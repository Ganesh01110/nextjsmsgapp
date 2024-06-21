# Next.js Message Application

This Next.js application allows users to send anonymous messages. It includes features such as user authentication, message handling, and integration with the OpenAI API for message suggestions.

## Features

- **User Authentication:**
  - Sign Up with unique username check
  - Email verification with resend functionality
  - Login with bcrypt and session management

- **Dashboard:**
  - Access to send and receive messages
  - User settings and profile management

- **Routes:**
  - `/accept-message`: Accept incoming messages
  - `/unique-username-check`: Ensure usernames are unique during sign up
  - `/delete-message`: Delete a message
  - `/get-message`: Retrieve a message
  - `/send-message`: Send a new message
  - `/signing`: User signing endpoint
  - `/suggest-message`: Integrate with OpenAI to suggest messages
  - `/verify-registration-code`: Verify the registration code sent via email

## User Flow

1. **Sign Up:**
   - User signs up with a unique username.
   - The application checks for username uniqueness using the `/unique-username-check` route.
   - If the username is unique, a verification email is sent to the user's email address.

2. **Email Verification:**
   - User receives an email with a verification code.
   - User verifies their email using the `/verify-registration-code` route.
   - If needed, users can resend the verification email using the provided service.

3. **Login:**
   - After verifying their email, users can log in to the application.
   - Authentication is managed using bcrypt and session handling.

4. **Dashboard:**
   - Once logged in, users can send and receive messages anonymously.
   - Users can access the dashboard to manage their messages.

5. **Message Handling:**
   - Users can send messages using the `/send-message` route.
   - Messages can be accepted via the `/accept-message` route.
   - Users can retrieve messages with the `/get-message` route.
   - Messages can be deleted using the `/delete-message` route.

6. **Message Suggestions:**
   - Users can get message suggestions via the `/suggest-message` route, which integrates with the OpenAI API.

## Installation and Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Ganesh01110/nextjsmsgapp.git
   cd nextjsmsgapp
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root of the project.
   - Add the necessary environment variables such as database connection strings, API keys, and email service credentials.

4. **Run the development server:**
   ```sh
   npm run dev
   ```
   - The application will be available at `http://localhost:3000`.

## Technologies Used

- **Next.js** for the main application framework.
- **React** for building the user interface.
- **Mongoose** for MongoDB interactions.
- **Next-Auth** for authentication.
- **Bcrypt** for password hashing.
- **OpenAI API** for message suggestions.
- **Resend** for handling email verifications.
- **Tailwind CSS** for styling.
- **React Hook Form** for form handling.
- **Zod** for schema validation.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests for any features or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
