
**You:**

Generate html code to illustrate all Commonly used form elements completely

* * *

**ChatGPT:**

Here is a complete HTML code that illustrates all commonly used form elements, including text fields, radio buttons, checkboxes, dropdowns, file uploads, date pickers, color pickers, and more.

* * *

### **Complete HTML Code for Common Form Elements**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Elements Example</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        form { max-width: 500px; background: #f9f9f9; padding: 20px; border-radius: 8px; }
        label { font-weight: bold; }
        input, select, textarea { width: 100%; padding: 8px; margin: 5px 0 15px; border: 1px solid #ccc; border-radius: 4px; }
        button { background: blue; color: white; padding: 10px; border: none; border-radius: 5px; cursor: pointer; }
        button:hover { background: darkblue; }
    </style>
</head>
<body>

    <h2>Commonly Used Form Elements</h2>

    <form action="#" method="post">
        
        <!-- Text Input -->
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your full name" required>

        <!-- Email Input -->
        <label for="email">Email Address:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required>

        <!-- Password Input -->
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required>

        <!-- Number Input -->
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" min="1" max="100" placeholder="Enter your age">

        <!-- Phone Number -->
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder="Enter your phone number">

        <!-- URL Input -->
        <label for="website">Website:</label>
        <input type="url" id="website" name="website" placeholder="Enter your website URL">

        <!-- Date Input -->
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob">

        <!-- Time Input -->
        <label for="time">Preferred Time:</label>
        <input type="time" id="time" name="time">

        <!-- DateTime Local Input -->
        <label for="datetime">Appointment Date & Time:</label>
        <input type="datetime-local" id="datetime" name="datetime">

        <!-- Color Picker -->
        <label for="color">Favorite Color:</label>
        <input type="color" id="color" name="color">

        <!-- Range Input -->
        <label for="satisfaction">Satisfaction Level:</label>
        <input type="range" id="satisfaction" name="satisfaction" min="0" max="10" value="5">

        <!-- Radio Buttons -->
        <label>Gender:</label>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>

        <!-- Checkboxes -->
        <label>Hobbies:</label>
        <input type="checkbox" id="reading" name="hobby" value="reading">
        <label for="reading">Reading</label>
        <input type="checkbox" id="traveling" name="hobby" value="traveling">
        <label for="traveling">Traveling</label>
        <input type="checkbox" id="sports" name="hobby" value="sports">
        <label for="sports">Sports</label>

        <!-- Select Dropdown -->
        <label for="country">Country:</label>
        <select id="country" name="country">
            <option value="">--Select Country--</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="canada">Canada</option>
        </select>

        <!-- File Upload -->
        <label for="resume">Upload Resume:</label>
        <input type="file" id="resume" name="resume">

        <!-- Text Area -->
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" placeholder="Enter your message"></textarea>

        <!-- Hidden Input -->
        <input type="hidden" name="user_id" value="12345">

        <!-- Submit and Reset Buttons -->
        <button type="submit">Submit</button>
        <button type="reset" style="background: gray;">Reset</button>

    </form>

</body>
</html>
```

* * *

### **Explanation of Form Elements Used**

1. **Text Input (`<input type="text">`)** - For entering text like names.
2. **Email Input (`<input type="email">`)** - Accepts only valid email formats.
3. **Password Input (`<input type="password">`)** - Hides entered characters.
4. **Number Input (`<input type="number">`)** - Allows only numeric values.
5. **Telephone Input (`<input type="tel">`)** - Used for phone numbers.
6. **URL Input (`<input type="url">`)** - Accepts valid website URLs.
7. **Date Input (`<input type="date">`)** - Used for selecting a date.
8. **Time Input (`<input type="time">`)** - Allows time selection.
9. **Date-Time Input (`<input type="datetime-local">`)** - Selects both date and time.
10. **Color Picker (`<input type="color">`)** - Allows selecting a color.
11. **Range Input (`<input type="range">`)** - A slider for selecting values.
12. **Radio Buttons (`<input type="radio">`)** - Select one option from multiple choices.
13. **Checkboxes (`<input type="checkbox">`)** - Select multiple options.
14. **Dropdown (`<select>` with `<option>`)** - A drop-down selection.
15. **File Upload (`<input type="file">`)** - Uploads files.
16. **Text Area (`<textarea>`)** - Multi-line text input.
17. **Hidden Input (`<input type="hidden">`)** - Stores hidden data.
18. **Submit Button (`<button type="submit">`)** - Submits the form.
19. **Reset Button (`<button type="reset">`)** - Resets the form fields.

This form contains almost all commonly used input elements, providing a complete overview of form elements in HTML.

Let me know if you need any modifications!