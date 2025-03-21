# Login-page-react
  A Login Page allows users to access a system by entering a username and password. It verifies credentials, ensuring secure authentication. If valid, the user is logged in; otherwise, an error is shown. If the user is not found, a new account can be registered. Security features like password hashing and error handling enhance protection. 
# Key Features of a Login Page:
  1.User Authentication – Verifies user credentials before granting access.
  2.Input Fields – Includes text fields for username and password entry.
  3.Validation – Ensures users enter valid credentials and provides error messages for incorrect input.
  4.Security Measures – Implements password hashing, encryption, and login attempt limits to prevent unauthorized access.
  5.Login Button – A button to submit credentials for verification.
  6.Error Handling – Displays messages like "Invalid credentials" or "User not found".
  7.New User Registration – Optionally allows new users to sign up if they don’t have an account.
# How It Works:
  1.The user enters their username and password.
  2.The system checks the credentials against stored data in the database.
  3.If the credentials match, the user is logged in successfully.
  4.If the credentials don’t match, the system shows an error message.
  5.If the user doesn’t exist, they may be prompted to register.
# Technologies Used in the Login Page
# Frontend:
  React.js – For building the UI components.
  React Router – For navigation and routing.
  CSS – For styling the login page.
  Axios/Fetch API – For making API requests.
# Backend:
  Node.js – Backend runtime environment.
  Express.js – For handling API routes.
  MongoDB – Database to store user credentials.
  Mongoose – ODM for MongoDB operations.
  bcrypt.js – For password hashing and security.
