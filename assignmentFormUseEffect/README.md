# Registration Form with Validation

In your career you will get to create registration forms. You can never anticipate what data the users will insert so you need to make the validation to make sure that the data that goes to your server is valid.

## Overview

In this lab you are going to work with your group to make a registration form that also handles validation. Make sure to divide the work between the whole team and that everyone gets to work on everything.

## Lab design

![](./assets/download.jpeg)

## Requirements

1.  Create the design of the page
2.  Validate the form inputs with the following in mind:
    1.  The full name should not contain any numbers
    2.  The email should be a valid email. It needs the @ sign and .com/.net/etc..
    3.  The user name should not be used before. You can assume that the username Recoded already exists. so if the user inserts Recoded it should show them a message saying this user already exists.
    4.  Passwords should have over 8 characters long, have at least one capital letter, have at least one small letter, have at least one number, have at least one symbol
    5.  Repeated password should be exactly the same as the password field above it
3.  While the user is typing in the inputs you should be actively validating to make sure that they are inserting the right information. If their input is not valid, then you should notify them by showing them what the error is below the input. For example, if the user inserts the wrong email it should show them "Invalid email" in red under the email input.
4.  Clicking on Sign up should make sure that all of the inputs are validated correctly and that they agree on the terms. After that, it checks if all data is correct, and sends a POST request to this [API](https://jsonplaceholder.typicode.com/users) to create a new user. After the API is contacted we should receive a message with the user ID.
