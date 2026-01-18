Here’s a **simple, self-contained HTML + CSS example** that clearly illustrates how **CSS variables (custom properties)** work and how changing them affects the whole page.

This example demonstrates:

* Declaring CSS variables in `:root`
    
* Reusing them across multiple selectors
    
* Updating a single variable to change the theme
    

* * *

### Example: CSS Variables Demo Webpage

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Variables Example</title>

    <style>
        /* 1. Define CSS variables */
        :root {
            --primary-color: #4CAF50;
            --secondary-color: #2c3e50;
            --text-color: #ffffff;
            --padding-size: 16px;
            --border-radius: 8px;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: var(--secondary-color);
            margin: 0;
            padding: 0;
        }

        header {
            background-color: var(--primary-color);
            color: var(--text-color);
            padding: var(--padding-size);
            text-align: center;
        }

        .card {
            background-color: #ffffff;
            margin: 20px;
            padding: var(--padding-size);
            border-radius: var(--border-radius);
        }

        .button {
            display: inline-block;
            background-color: var(--primary-color);
            color: var(--text-color);
            padding: 10px 20px;
            border-radius: var(--border-radius);
            text-decoration: none;
            font-weight: bold;
        }

        .button:hover {
            opacity: 0.85;
        }
    </style>
</head>
<body>

    <header>
        <h1>CSS Variables Demo</h1>
        <p>Changing one variable updates the entire theme</p>
    </header>

    <div class="card">
        <h2>Why use CSS Variables?</h2>
        <p>
            CSS variables allow you to define values once and reuse them
            throughout your stylesheet.
        </p>
        <a href="#" class="button">Example Button</a>
    </div>

</body>
</html>
```

* * *

### Key Concepts Illustrated

1. **Declaration**
    
    ```css
    :root {
        --primary-color: #4CAF50;
    }
    ```
    
    `:root` makes variables globally accessible.
    
2. **Usage**
    
    ```css
    background-color: var(--primary-color);
    ```
    
3. **Maintainability**
    
    * Change `--primary-color` once
        
    * Header, button, and other elements update automatically
        

* * *

If you want, I can also:

* Add a **dark/light theme toggle using JavaScript**
    
* Show **local (component-level) CSS variables**
    
* Compare **CSS variables vs Sass variables**
    

Just tell me 👍

* * *
