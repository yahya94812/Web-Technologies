### Database Architecture (Short Notes)

```text
Application
    ↓
ORM (Hibernate, SQLAlchemy, Entity Framework)
    ↓
Database Driver (JDBC, ODBC, MySQL Connector, psycopg)
    ↓
DBMS (MySQL, PostgreSQL, Oracle, SQL Server)
    ↓
Database Data Files (Stored on Disk)
```

### Components

* **Database Data Files**

  * Physical files where the data is stored on disk.
  * Not accessed directly by applications.

* **DBMS (Database Management System)**

  * Manages the database.
  * Reads/writes data files.
  * Executes SQL queries.
  * Handles transactions, security, indexing, and concurrency.

* **Database Driver**

  * A software library that connects the application to the DBMS.
  * Sends SQL queries and returns results.
  * Examples: JDBC, ODBC, MySQL Connector, `psycopg`.

* **ORM (Object-Relational Mapping)**

  * Lets developers work with objects instead of writing SQL manually.
  * Converts objects ↔ SQL.
  * Uses the database driver to communicate with the DBMS.
  * Examples: Hibernate, SQLAlchemy, Entity Framework.

### Data Flow

```text
Application
   ↓
ORM
   ↓
Database Driver
   ↓
DBMS
   ↓
Database Files
```

### Example Flow

1. Application requests data.
2. ORM generates an SQL query.
3. Database Driver sends the SQL to the DBMS.
4. DBMS reads the data from disk.
5. DBMS returns the result to the Driver.
6. Driver passes the result to the ORM.
7. ORM converts the result into objects.
8. Application receives the objects.
