**You:**

Generate a complete html code which illustrate all basic html tags

* * *

**ChatGPT:**

Here is a complete HTML code that demonstrates all basic HTML tags, including headings, paragraphs, links, images, lists, tables, forms, and more:

### **Complete HTML Code Illustrating Basic Tags**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic HTML Tags Example</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        table, th, td { border: 1px solid black; border-collapse: collapse; padding: 8px; }
    </style>
</head>
<body>

    <!-- Headings -->
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>

    <!-- Paragraph and Text Formatting -->
    <p>This is a paragraph with <b>bold</b>, <i>italic</i>, <u>underlined</u>, and <mark>highlighted</mark> text.</p>
    <p>Here is a <small>small text</small> and a <big>big text</big>.</p>
    <p>Superscript: x<sup>2</sup>, Subscript: H<sub>2</sub>O</p>
    <p><del>Deleted text</del> and <ins>Inserted text</ins></p>

    <!-- Links -->
    <p>Visit <a href="https://www.google.com" target="_blank">Google</a>.</p>

    <!-- Images -->
    <p>Here is an image:</p>
    <img src="https://via.placeholder.com/150" alt="Sample Image">

    <!-- Lists -->
    <h3>Unordered List</h3>
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <h3>Ordered List</h3>
    <ol>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ol>

    <h3>Definition List</h3>
    <dl>
        <dt>HTML</dt>
        <dd>HyperText Markup Language</dd>
        <dt>CSS</dt>
        <dd>Cascading Style Sheets</dd>
    </dl>

    <!-- Table -->
    <h3>Simple Table</h3>
    <table>
        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>Alice</td>
            <td>25</td>
        </tr>
        <tr>
            <td>Bob</td>
            <td>30</td>
        </tr>
    </table>

    <!-- Forms -->
    <h3>Form Example</h3>
    <form>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br><br>

        <label>Gender:</label>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label><br><br>

        <label for="country">Country:</label>
        <select id="country" name="country">
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
        </select><br><br>

        <label>Hobbies:</label>
        <input type="checkbox" id="reading" name="hobby" value="reading">
        <label for="reading">Reading</label>
        <input type="checkbox" id="traveling" name="hobby" value="traveling">
        <label for="traveling">Traveling</label><br><br>

        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="4" cols="30"></textarea><br><br>

        <input type="submit" value="Submit">
    </form>

    <!-- Multimedia -->
    <h3>Video</h3>
    <video width="320" height="240" controls>
        <source src="sample.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>

    <h3>Audio</h3>
    <audio controls>
        <source src="sample.mp3" type="audio/mpeg">
        Your browser does not support the audio tag.
    </audio>

    <!-- Buttons -->
    <h3>Button Example</h3>
    <button onclick="alert('Button Clicked!')">Click Me</button>

    <!-- Inline Frame (iframe) -->
    <h3>Iframe Example</h3>
    <iframe src="https://www.example.com" width="300" height="200"></iframe>

    <!-- Div and Span -->
    <h3>Div and Span Example</h3>
    <div style="background-color: lightgray; padding: 10px;">
        <p>This is inside a div.</p>
    </div>
    <p>This is a <span style="color: red;">span element</span> inside a paragraph.</p>

</body>
</html>
```

### **Explanation of Tags Used**

* `<h1>` to `<h6>`: Headings of different levels.
* `<p>`: Paragraph.
* `<b>`, `<i>`, `<u>`, `<mark>`, `<small>`, `<big>`, `<sup>`, `<sub>`, `<del>`, `<ins>`: Text formatting.
* `<a>`: Hyperlink.
* `<img>`: Image.
* `<ul>`, `<ol>`, `<li>`: Lists (unordered and ordered).
* `<dl>`, `<dt>`, `<dd>`: Definition lists.
* `<table>`, `<tr>`, `<th>`, `<td>`: Table.
* `<form>`, `<input>`, `<label>`, `<textarea>`, `<select>`, `<option>`: Form elements.
* `<video>`, `<audio>`: Multimedia elements.
* `<button>`: Button.
* `<iframe>`: Embedding another webpage.
* `<div>`: Block-level container.
* `<span>`: Inline container.

This example gives a solid overview of basic HTML tags in action. Let me know if you need modifications or explanations!

* * *