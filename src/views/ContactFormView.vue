<template>
     <form action="test-action_page.php" method="POST" enctype="multipart/form-data">

        <div class="business-logo">
            <img class="only-light" src="/img/MCRred1-cropped.png">
            <img class="only-dark" src="/img/black-banner.png">
        </div>

        <label>Theme:</label>
        <div class="themes-switcher">
            <div class="active">Light</div>
            <div>Dark</div>
        </div>
        <br>

        <label for="username">Username:</label>
        <input type="text" id="username" placeholder="Username" minlength="5" maxlength="25" required>
        <br>

        <label for="password">Password:</label>
        <input type="password" id="password" placeholder="Create a Password" minlength="16" maxlength="24" required>
        <br>

        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="user@gmail.com">
        <br>
        <div class="container">
        <div class="input-wrapper">
        <label for="phone">Phone #:</label>
        <input type="text" id="phone" name="phone" oninput="formatPhoneNumber(this); validateInput(event);" maxlength="12" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
        <p id="error-message">Only numbers are allowed!</p>
        </div>
        <br>

        <label for="bday">Birthdate:</label>
        <input type="text" id="bday" placeholder="MM/DD/YYYY" pattern="\d{2}/\d{2}/\d{4}" required>
        <br>

        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" min="0" max="99" value="1">
        <br>

        <label for="title">Title:</label>
        <div class="horizontal">
            <div>
                <label for="Mr.">Mr.</label>
                <input type="radio" id="Mr." value="Mr." name="title">
            </div>

            <div>
                <label for="Ms.">Ms.</label>
                <input type="radio" id="Ms." value="Ms." name="title">
            </div>

            <div>
                <label for="PhD.">PhD.</label>
                <input type="radio" id="PhD." value="PhD." name="title">
            </div>

            <div>
                <label for="Dr.">Dr.</label>
                <input type="radio" id="Dr." value="Dr." name="title">
            </div>
        </div>
        <br>

        <div id="payment">
            <label for="payment-method">Payment</label>
            <select id="payment-method">
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Discover">Discover</option>
                <option value="American Express">American Express</option>
                <option value="Gift Card">Gift Card</option>
            </select>
        </div>
        <br>

        <div class="exam-attempt">
            <input type="checkbox" id="Exam Attempt" />
            <label for="exam-check">Exam Attempt</label>
        </div>

        <label for="comment">Comment:</label>
        <textarea id="comment"></textarea>
        <br>

        <label class="file-upload" for="file">File:</label>
        <input type="file" id="file" accept=".webp, .jpeg, .heic, .pdf">
        <br>

        <input type="reset">
        <br>
        <input type="submit">

        <button id="exportButton">Export PDF</button>

        </div>
    </form>
</template>
<style scoped>
/* Global Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* Prevents overflow */
}

/* Basic Body Styling */
body {
    font-family: 'Aptos', Arial, sans-serif;
    padding: 0.5rem;
}

/* Location Styling */
.location {
    width: 100%;
    margin: auto;
}

/* Padding Utility */
.px-3 {
    margin: 12pt 24pt;
}

.themes-switcher {
    margin-bottom: 1rem !important;
}

form input [type="file"] {
    padding: 0.5rem;
    width: 100%;
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12px;
    padding-top: 0px;
}

.themes-switcher div {
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 18px;
}

/* Typography */
.bitter,
.semi-bold p,
div span {
    font-family: 'Aptos', Arial, sans-serif;
    font-weight: 400;
    font-size: 12pt;
}

/* Responsive Adjustments */
@media (max-width: 520px) {
    .location {
        width: 100%;
        margin: auto 1rem;
    }
}

/* Page Banner */
.page-banner::before {
    content: 'test-form1';
    color: black;
}

/* Container */
.container {
    margin-top: 37px;
    margin-bottom: 37px;
    overflow: hidden;
    /* Prevents overflow */
}

/* Form Styling */
form {
    background-color: #ffd0d0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 0.2rem;
    width: 100%;
    margin: 0 auto;
    /* Centered */
    font-family: 'Aptos', Arial, sans-serif;
    font-weight: 400;
    font-size: 12pt;
    box-sizing: border-box;
    /* Prevents overflow */
    overflow: hidden;
    /* Prevents overflow */
}

/* Global Input and Textarea Styling */
form label {
    display: block;
    margin-bottom: 0.25rem;
}

form input,
form select {
    display: block;
    margin-bottom: 1rem;
    padding: 0.5rem;
    width: 100%;
    height: auto;
    border: none;
    resize: none;
    background-color: white;
    cursor: pointer;
}

/* Textarea Specific Styling */
form textarea {
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12pt;
    font-weight: 400;
    height: auto;
    min-height: 50px;
    min-width: 100px;
    overflow: hidden;
    box-sizing: border-box;
    display: block;
    width: 100%;
    cursor: pointer;
}

body.dark-mode form input,
form textarea {
    background-color: #1E1E1E;
}

body.dark-mode form textarea {
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12pt;
    font-weight: 400;
    height: auto;
}

/* Ensure text inside inputs and textareas is white in dark mode */
body.dark-mode form input,
body.dark-mode form textarea,
body.dark-mode form select {
    color: white;
}

/* Ensure placeholder text is also visible in dark mode */
body.dark-mode input::placeholder,
body.dark-mode textarea::placeholder,
body.dark-mode select::placeholder {
    color: lightgray;
    opacity: 1;
}

/* Button Group */
form .button-group {
    display: flex;
    gap: 1rem;
    padding: 0.5rem 0;
}

/* Reset and Submit Button Styling */
form input:is([type="reset"], [type="submit"]) {
    background-color: red;
    border: none;
    border-radius: 0.2rem;
    color: white;
    padding: 0.5rem 1rem;
    height: 2rem;
    margin-top: -0.75rem;
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12pt;
    font-weight: 400;
    white-space: nowrap;
    /* Prevents text breaking/cutting off */
}

body.dark-mode form input:is([type="reset"], [type="submit"]) {
    background-color: darkblue;
    border: none;
    border-radius: 0.2rem;
    color: white;
    padding: 0.5rem 1rem;
    height: 2rem;
    margin-top: -0.75rem;
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12pt;
    font-weight: 400;
    white-space: nowrap;
    /* Prevents text breaking/cutting off */
}

/* Export Button */
#exportButton {
    color: white;
    padding: 0.5rem 1rem;
    height: 2rem;
    background-color: red;
    border: none;
    border-radius: 0.2rem;
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12pt;
    font-weight: 400;
    margin-top: 0.5rem;
    white-space: nowrap;
    cursor: pointer;
    /* Prevents text breaking/cutting off */
}

body.dark-mode #exportButton {
    color: white;
    padding: 0.5rem 1rem;
    height: 2rem;
    background-color: darkblue;
    border: none;
    border-radius: 0.2rem;
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12pt;
    font-weight: 400;
    margin-top: 0.5rem;
    white-space: nowrap;
    /* Prevents text breaking/cutting off */
}

/* Horizontal Form Section */
form .horizontal {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    width: 100%;
    overflow: hidden;
    /* Prevents overflow in horizontal form */
}

form .horizontal>div {
    background-color: red;
    color: white;
    padding: 0.5rem;
    width: 6rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}

body.dark-mode form .horizontal>div {
    background-color: darkblue;
    color: white;
    padding: 0.5rem;
    width: 6rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}

/* File Input */
form input[type="file"] {
    padding: 0.5rem;
    width: 100%;
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12pt;
    font-weight: 400;
}

input::-webkit-file-upload-button {
    background-color: red;
    color: white;
    padding: 0.5rem;
    border-radius: 0.2rem;
    border: none;
    margin-right: 0.5rem;
    /* margin-top: 0.5rem; */
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12pt;
    font-weight: 400;
    cursor: pointer;
}

body.dark-mode input::-webkit-file-upload-button {
    background-color: darkblue;
}

/* Payment Button */
form #payment-method {
    background-color: red;
    color: white;
    border: none;
    margin-top: 0.5rem;
    padding: 0;
    border-radius: 0.2rem;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12pt;
    font-weight: 400;
}

body.dark-mode form #payment-method {
    background-color: darkblue;
    color: white;
    border: none;
    margin-top: 0.5rem;
    padding: 0;
    border-radius: 0.2rem;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12pt;
    font-weight: 400;
}

form #payment>label {
    margin-bottom: -0.25rem;
    padding-bottom: -0.25rem;
    height: auto;
    width: auto;
    display: block;
    color: black;
}

body.dark-mode form #payment>label {
    margin-bottom: -0.25rem;
    padding-bottom: -0.25rem;
    width: auto;
    height: auto;
    display: block;
    color: white;
}

/* Exam Attempt Section */
form .exam-attempt {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    width: auto;
    /* Adjust the gap between the checkbox and the label */
}

/* Ensures the checkbox and its text appear correctly aligned */
form .exam-attempt label {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    cursor: pointer;
    width: auto;
    height: auto;
    margin-bottom: 0;
    /* Ensures the checkbox and the label are inline */
    padding-bottom: 0;
    /* Ensures the checkbox and the label are inline */
}

form .exam-attempt input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin: 0;
    /* Ensures the checkbox and the label are inline */
    padding: 0;
    order: 1;
    /* Moves the checkbox to the right of the label */
}

/* Checkbox Styling */
input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    top: -2px;
    left: -2px;
    width: 20px;
    height: 20px;
    border: 2px solid #888;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

input[type="checkbox"]:checked {
    background-color: red;
    border-color: #7CFC00;
}

input[type="checkbox"]:checked::after {
    content: '\2714';
    color: #7CFC00;
    font-size: 16px;
    top: -2px;
    left: -2px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: center;
}

body.dark-mode input[type="checkbox"]:checked {
    background-color: black;
    border-color: #32CD32;
}

body.dark-mode input[type="checkbox"]:checked::after {
    content: '\2714';
    color: #32CD32;
    font-size: 16px;
    top: -2px;
    left: -2px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: center;
}

input[type="checkbox"]:focus {
    outline: 1.5px solid #7CFC00;
}

/* Circles/Bullets/Radio Button Styling */
form input[type="radio"] {
    appearance: none;
    width: 24px;
    height: 24px;
    outline: 1.5px solid #888;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    margin: 0;
    box-sizing: border-box;
    border: 2px solid #888;
    padding: 0;
}

form input[type="radio"]:checked {
    background-color: #7CFC00;
    border: 2px solid red;
    outline: 1.5px solid #7CFC00;
}

form input[type="radio"]:focus {
    outline: 1.5px solid #7CFC00;
}

body.dark-mode form input[type="radio"]:checked {
    background-color: #32CD32;
    border: 2px solid darkblue;
    outline: 1.5px solid #32CD32;
}

body.dark-mode form input[type="radio"]:focus {
    outline: 1.5px solid #32CD32;
}

/* Focus Styles */
form input:focus,
form textarea:focus {
    background-color: white;
    outline: 2px solid blue;
}

/* Selection Styling */
::selection {
    background-color: blue;
    color: white;
}

/* Caret Styling */
input,
textarea {
    caret-color: blue;
}

.themes-switcher {
    display: flex;
    border-radius: 0.2rem;
    background: white;
}

.themes-switcher div {
    width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    padding: 0 0.5rem;
    color: grey;
    cursor: pointer;
}

.themes-switcher .active {
    background: black;
    border-radius: 0.2rem;
    color: white;
}

.business-logo {
    width: 280px;
    height: 150px;
    margin: auto;
}

.business-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

body .only-dark {
    display: none;
}

body.dark-mode .only-light {
    display: none;
}

body.dark-mode .only-dark {
    display: block;
}

body.dark-mode {
    background: black;
}

body.dark-mode form {
    background: #800020;
    color: white;
}

#comment {
    background-color: white;
    color: black;
    border: none;
    padding: 0.5rem;
    width: 100%;
    field-sizing: content;
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12pt;
    resize: none;
}

body.dark-mode #comment {
    background-color: #1E1E1E;
    color: white;
    border: none;
    padding: 0.5rem;
    width: 100%;
    height: auto;
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12pt;
    resize: none;
}

#comment>label {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    cursor: pointer;
    width: auto;
    height: auto;
    margin-bottom: 0.25rem;
    padding-bottom: 0.25rem;
    margin-top: 0.25rem;
    padding-bottom: 0.25rem;
}

body #quantity {
    color: gray !important;
}

body.dark-mode #quantity {
    color: lightgray !important;
}

input::placeholder,
textarea::placeholder,
select::placeholder {
    color: gray;
    opacity: 1;
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12pt;
}

body.dark-mode input::placeholder,
textarea::placeholder,
select::placeholder {
    color: lightgray;
    opacity: 1;
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12pt;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder,
select:-ms-input-placeholder {
    color: gray;
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12pt;
}

body.dark-mode input:-ms-input-placeholder,
textarea:-ms-input-placeholder,
select:-ms-input-placeholder {
    color: lightgray;
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12pt;
}

::-ms-input-placeholder,
input::-ms-input-placeholder,
textarea::-ms-input-placeholder,
select::-ms-input-placeholder {
    color: gray;
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12pt;
}

body.dark-mode ::-ms-input-placeholder,
input::-ms-input-placeholder,
textarea::-ms-input-placeholder,
select::-ms-input-placeholder {
    color: lightgray;
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12pt;
}

#quantity::placeholder {
    color: gray;
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12pt;
}

body.dark-mode #quantity::placeholder {
    color: lightgray !important;
    font-family: 'Aptos', Arial, sans-serif;
    font-size: 12pt;
}

select {
    field-sizing: content;
}

.container {
    display: inline-block;
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
    margin: 0;
    /* Fixes extra padding above fields */
    padding: 0;
    /* Prevents unwanted spacing */
}

.input-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* Ensures left alignment */
    width: 100%;
    /* Ensures input and error message are the same width */
    margin: 0;
    /* Removes extra space above */
    padding: 0;
    /* Prevents extra spacing */
}

label {
    font-size: 14px;
    margin-bottom: 2px;
    /* Small space between label and input */
    display: block;
    padding: 0;
}

input {
    width: 250px;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    /* Default border */
    border-radius: 0px;
    box-sizing: border-box;
    display: block;
    margin: 0;
    outline: none !important;
    /* Forces removal of any browser default outline */
}

/* Fixes double outline on focus */
input:focus,
input:active {
    border: 2px solid #007bff;
    /* Ensures a clear focus effect */
    outline: none !important;
    /* Completely removes the unwanted second outline */
}

/* Error message aligns perfectly with input */
#error-message {
    color: red;
    font-size: 14px;
    display: none;
    margin-top: -12px;
    /* Ensures correct spacing below input */
    background: whitesmoke;
    padding: 6px 10px;
    border: 1px solid red;
    border-radius: 0px;
    box-sizing: border-box;
    width: 250px;
    /* Adjust width to match input perfectly */
    left: 0%;
}

textarea {
    width: 100%;
    /* Ensures full width */
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    /* Default border */
    border-radius: 0px;
    /* Keeps your custom styling */
    box-sizing: border-box;
    display: block;
    margin: 0;
    outline: none !important;
    /* Forces removal of any browser default outline */
}

/* Fixes double outline issue on focus */
textarea:focus,
textarea:active {
    border: 2px solid #007bff !important;
    /* Ensures a clear focus effect */
    outline: none !important;
    /* Completely removes the unwanted second outline */
}
</style>
<script>
export default {
    mounted() {
        document.getElementById('exportButton').addEventListener('click', async () => {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF({
                format: "letter", // Set PDF to US Letter size
            });

            // Load the template image
            const templateURL = 'https://via.placeholder.com/612x792'; // Replace with your template URL
            const templateImage = await fetch(templateURL)
                .then(response => response.blob())
                .then(blob => createImageBitmap(blob));

            // Add the template image as the background
            const canvas = document.createElement('canvas');
            canvas.width = 612; // US Letter width in points
            canvas.height = 792; // US Letter height in points
            const context = canvas.getContext('2d');
            context.drawImage(templateImage, 0, 0, canvas.width, canvas.height);
            const imageData = canvas.toDataURL('image/png');
            doc.addImage(imageData, 'PNG', 0, 0, 216, 279); // Fit image to US Letter size (8.5 x 11 inches)

            // Overlay custom content
            doc.setFont("helvetica", "bold");
            doc.setFontSize(16);
            doc.text("Hello, this is content over the template!", 20, 50);

            // Save the PDF
            doc.save("custom-letter-template.pdf");
        });
        // Helper function to convert Blob to ImageBitmap
        async function createImageBitmap(blob) {
            return new Promise((resolve, reject));
        }
        const img = new Image();
        img.onload = () => resolve(img);
        // img.onerror = reject;
        // img.src = URL.createObjectURL(blob);

        document.querySelectorAll('.themes-switcher div').forEach(theme => {
            theme.addEventListener('click', function () {
                document.querySelectorAll('.themes-switcher div').forEach(div => div.classList.remove('active'));
                this.classList.add('active');

                if (this.textContent.trim() === 'Dark') {
                    document.body.classList.add('dark-mode');
                } else {
                    document.body.classList.remove('dark-mode');
                }
            });
        });

        document.addEventListener("DOMContentLoaded", function () {
            let quantityInput = document.getElementById("quantity");

            if (quantityInput.value.trim() !== "") {
                quantityInput.style.color = "gray"; // Light Mode default text color
            }

            quantityInput.addEventListener("input", function () {
                this.style.color = "black"; // Change color when user types
            });

            if (document.body.classList.contains("dark-mode")) {
                if (quantityInput.value.trim() !== "") {
                    quantityInput.style.color = "lightgray"; // Dark Mode default text color
                }
                quantityInput.addEventListener("input", function () {
                    this.style.color = "white";
                });
            }
        });

        // Phone Number Format Input Value Automations //
        let errorTimeout; // Stores the timeout reference

        document.getElementById("phone").addEventListener("input", function (event) {
            let input = event.target;
            let value = input.value.replace(/\D/g, ''); // Remove all non-numeric characters
            let formattedValue = '';

            // Auto-format as user types
            if (value.length > 3 && value.length <= 6) {
                formattedValue = value.replace(/(\d{3})(\d{1,3})/, '$1-$2');
            } else if (value.length > 6) {
                formattedValue = value.replace(/(\d{3})(\d{3})(\d{1,4})/, '$1-$2-$3');
            } else {
                formattedValue = value;
            }

            input.value = formattedValue;

            // Show error message if an invalid character was typed
            if (event.inputType === "insertText" && /[^0-9]/.test(event.data)) {
                document.getElementById("error-message").style.display = "block";

                // Reset the timer so it stays visible for 2 seconds
                clearTimeout(errorTimeout);
                errorTimeout = setTimeout(() => {
                    document.getElementById("error-message").style.display = "none";
                }, 2000); // Message disappears after 2 seconds
            }
        });

        // Prevent users from pasting invalid input
        document.getElementById("phone").addEventListener("paste", function (event) {
            event.preventDefault();
            let pastedData = (event.clipboardData || window.clipboardData).getData("text").replace(/\D/g, ''); // Remove non-numeric
            let formattedValue = '';

            if (pastedData.length > 3 && pastedData.length <= 6) {
                formattedValue = pastedData.replace(/(\d{3})(\d{1,3})/, '$1-$2');
            } else if (pastedData.length > 6) {
                formattedValue = pastedData.replace(/(\d{3})(\d{3})(\d{1,4})/, '$1-$2-$3');
            } else {
                formattedValue = pastedData;
            }

            event.target.value = formattedValue;
        });
    }
}
</script>