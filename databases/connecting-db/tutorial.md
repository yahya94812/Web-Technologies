This is a clean **SQLAlchemy 2.0 Async ORM** setup. I'll explain every line, why it exists, and what happens internally.

---

# Overall Project Flow

```
database.py
     │
     │ creates connection with PostgreSQL
     ▼
engine
     │
     ▼
AsyncSessionLocal
     │
     ▼
models.py
     │
     ▼
Student Model
     │
     ▼
create_tables.py
     │
     ▼
Base.metadata.create_all()
     │
     ▼
PostgreSQL Database
```

Think of it like this:

* **database.py** → connects to PostgreSQL
* **models.py** → tells SQLAlchemy what tables should exist
* **create_tables.py** → actually creates those tables

---

# Part 1: database.py

```python
from sqlalchemy.ext.asyncio import create_async_engine
```

SQLAlchemy has two engines:

* Synchronous Engine
* Asynchronous Engine

Normally:

```python
engine = create_engine(...)
```

But since FastAPI supports async programming, we use

```python
create_async_engine()
```

This allows

```python
await session.execute(...)
```

instead of blocking the server.

---

```python
from sqlalchemy.orm import sessionmaker
```

A **Session** is your conversation with the database.

Example:

```
Open connection
↓

Insert data

↓

Read data

↓

Update data

↓

Commit

↓

Close
```

Instead of creating sessions manually every time, SQLAlchemy gives us a **factory** called `sessionmaker`.

Imagine a machine:

```
Session Factory
        │
        ├── Session 1
        ├── Session 2
        ├── Session 3
```

Every request gets a fresh session.

---

```python
from sqlalchemy.ext.asyncio import AsyncSession
```

Since we're using async,

instead of

```
Session
```

we use

```
AsyncSession
```

It supports

```python
await session.commit()
await session.execute()
```

---

```python
import os
```

This imports Python's OS module.

Usually we'd use

```python
os.getenv("DATABASE_URL")
```

to read environment variables.

In your code it's imported but not used.

---

## DATABASE_URL

```python
DATABASE_URL = "postgresql+asyncpg://postgres:password@host:5432/postgres"
```

This is called the **connection string**.

Let's split it.

```
postgresql+asyncpg://
```

Means:

Database:

```
PostgreSQL
```

Driver:

```
asyncpg
```

Without `+asyncpg`, SQLAlchemy wouldn't know to use the async driver.

---

Next:

```
postgres
```

Username

---

Next:

```
Ipostgres24*7
```

Password

---

Next:

```
db.gvnpnxpsasdysfgrlxrc.supabase.co
```

Server where PostgreSQL lives.

---

Next:

```
5432
```

Port number.

PostgreSQL default port is

```
5432
```

---

Last:

```
/postgres
```

Database name.

---

Overall:

```
Protocol
↓

Driver

↓

Username

↓

Password

↓

Host

↓

Port

↓

Database Name
```

---

# create_async_engine()

```python
engine = create_async_engine(
    DATABASE_URL,
    echo=True,
    pool_pre_ping=True,
)
```

The engine is the heart of SQLAlchemy.

Think of it like

```
Python
    │
 Engine
    │
PostgreSQL
```

Every query goes through the engine.

---

## echo=True

```python
echo=True
```

This prints every SQL query.

Example

When you do

```python
session.add(student)
```

Console prints

```sql
INSERT INTO students ...
```

Useful for debugging.

Production:

```
echo=False
```

---

## pool_pre_ping=True

SQLAlchemy uses **connection pooling**.

Instead of

```
Open connection

↓

Close

↓

Open again
```

It does

```
Pool

Connection 1

Connection 2

Connection 3
```

It reuses connections.

Sometimes PostgreSQL kills idle connections.

Before using one,

SQLAlchemy sends

```
SELECT 1
```

If dead,

it reconnects.

That's what

```python
pool_pre_ping=True
```

does.

---

# AsyncSessionLocal

```python
AsyncSessionLocal = sessionmaker(
```

Remember

`sessionmaker`

is a session factory.

It doesn't create a session immediately.

It creates a blueprint.

Later,

```python
session = AsyncSessionLocal()
```

creates one.

---

## bind

```python
bind=engine
```

Means

"This session should use this engine."

---

## class_

```python
class_=AsyncSession
```

Normally

```
Session
```

Now

```
AsyncSession
```

---

## expire_on_commit=False

By default,

after

```python
await session.commit()
```

SQLAlchemy erases object data.

Example

```python
student.name
```

would require another database fetch.

With

```python
False
```

The object still contains data.

Much easier for APIs.

---

# models.py

---

```python
from sqlalchemy.orm import DeclarativeBase
```

Every ORM model needs one parent class.

That parent is

```python
Base
```

---

```python
class Base(DeclarativeBase):
    pass
```

This creates the base class.

Every table inherits from it.

```
Base
   │
   ├── Student
   ├── Teacher
   ├── Employee
```

---

# Student Model

```python
class Student(Base):
```

Means

Student is a database table.

---

```python
__tablename__ = "students"
```

Table name inside PostgreSQL.

Without it,

SQLAlchemy guesses the name.

Now it becomes

```sql
students
```

---

# Columns

---

## id

```python
id: Mapped[int]
```

SQLAlchemy 2.0 introduced typing.

Instead of

```python
id = Column(Integer)
```

Now

```python
id: Mapped[int]
```

Means

Python type is integer.

---

```python
mapped_column(primary_key=True)
```

Creates

```sql
id SERIAL PRIMARY KEY
```

or an equivalent auto-incrementing integer in PostgreSQL.

Primary key means

* Unique
* Cannot be NULL
* Identifies every row

---

```python
index=True
```

Creates a database index.

Searching

```sql
WHERE id=5
```

becomes much faster.

---

## name

```python
name: Mapped[str]
```

Python type

```
str
```

---

```python
mapped_column(
    String(100),
    nullable=False
)
```

SQL

```sql
VARCHAR(100)
```

Cannot be NULL.

---

## age

```python
Integer
```

Stores

```
18

20

22
```

---

## department

```python
String(50)
```

Stores

```
CSE

ECE

EEE
```

---

## cgpa

```python
Float
```

Stores

```
8.9

7.2

9.75
```

---

## email

```python
unique=True
```

Means

No duplicate emails.

Example

Allowed

```
abc@gmail.com

xyz@gmail.com
```

Not allowed

```
abc@gmail.com

abc@gmail.com
```

Database throws an error.

---

# create_tables.py

```python
from database import engine
```

Imports the database engine.

---

```python
from models import Base
```

Imports metadata.

Metadata contains

```
Student

Teacher

Employee

etc.
```

---

## create_tables

```python
async def create_tables():
```

Async function.

---

```python
async with engine.begin() as conn:
```

Creates a database connection and begins a transaction.

```
Engine

↓

Connection

↓

Transaction
```

When the block exits successfully, the transaction is committed; if an exception occurs, it is rolled back.

---

```python
await conn.run_sync(Base.metadata.create_all)
```

This is the most important line.

`Base.metadata` contains information about every model that inherits from `Base`.

It looks conceptually like:

```
Metadata

↓

Student Table

↓

Columns

↓

Types

↓

Constraints
```

`create_all()` checks whether each table already exists.

If **not**, it generates SQL similar to:

```sql
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER NOT NULL,
    department VARCHAR(50) NOT NULL,
    cgpa FLOAT NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);
```

If the table already exists, it does nothing.

Because `create_all()` is synchronous internally, `run_sync()` lets it execute safely using the async connection.

---

# Main Block

```python
if __name__ == "__main__":
```

This condition is `True` only when you run the file directly:

```bash
python create_tables.py
```

It is `False` if another file imports `create_tables.py`.

---

```python
import asyncio
```

Imports Python's asynchronous event loop library.

---

```python
asyncio.run(create_tables())
```

Starts an event loop and executes the async function.

The sequence is:

```
python create_tables.py

↓

asyncio.run()

↓

create_tables()

↓

engine.begin()

↓

run_sync(create_all)

↓

PostgreSQL creates the tables

↓

Program exits
```

## End-to-end flow

When you execute:

```bash
python create_tables.py
```

the following happens:

1. `database.py` creates an async SQLAlchemy engine connected to PostgreSQL.
2. `models.py` defines the `Student` ORM model and registers it with `Base.metadata`.
3. `create_tables.py` opens an async connection through the engine.
4. `Base.metadata.create_all()` inspects all registered models.
5. SQLAlchemy generates the required `CREATE TABLE` statements (only for tables that don't already exist).
6. PostgreSQL creates the `students` table with its columns, primary key, index, and unique constraint.
7. The connection is committed and closed automatically.

This structure is the standard foundation for async applications using SQLAlchemy, including frameworks like FastAPI. From here, the next step is typically to learn how to use `AsyncSessionLocal` to perform CRUD operations (Create, Read, Update, Delete) on the `Student` model using async database sessions.
