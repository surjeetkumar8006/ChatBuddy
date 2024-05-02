# ChatBuddy - OneStop place for personal interaction

ChatBuddy is a full-stack web application designed to facilitate personal interaction through real-time messaging. It provides users with a seamless experience to connect and communicate with each other. This README file serves as a guide to set up and run the application.

![ChatBuddy](link_to_screenshot)

[Watch the demo video](link_to_demo_video)

## Features

- **Real-time Messaging**: Utilizes Socket.io for instant messaging between users.
- **Image Storage**: Cloudinary integration for robust image storage and retrieval.
- **State Management**: Redux ensures proper state management throughout the application.
- **Admin Panel**: Includes an admin panel for managing users and content.

## Installation

To run ChatBuddy locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ChatBuddy.git
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd ChatBuddy/frontend
   npm install
   cd ../backend
   npm install
   ```

3. Create a `.env` file in the backend directory and add the following configurations:

   ```plaintext
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.ffsn2re.mongodb.net/MernChatApp?retryWrites=true&w=majority
   JWT_SECRET=<your_jwt_secret_key>
   ADMIN_SECRET_KEY=<your_admin_secret_key>
   NODE_ENV=DEVELOPMENT
   CLIENT_URL=http://localhost:5173
   PORT=1111
   CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
   CLOUDINARY_API_KEY=<your_cloudinary_api_key>
   CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
   ```

4. Create a `.env` file in the frontend directory and add the following configuration:

   ```plaintext
   VITE_SERVER=http://localhost:1111
   ```

5. Run the backend server:

   ```bash
   cd ../backend
   npm start
   ```

6. Run the frontend application:

   ```bash
   cd ../frontend
   npm run dev
   ```

7. Access ChatBuddy in your browser at `http://localhost:5173`.

## Usage

Once the application is up and running, users can sign up, log in, and start messaging with other users in real-time. The admin panel allows administrators to manage users and content efficiently.

## Technologies Used

- MongoDB
- Express.js
- React
- Node.js
- Cloudinary
- Socket.io
- Redux

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](link_to_contributing.md).

## License

This project is licensed under the [MIT License](link_to_license).

## Acknowledgments

Special thanks to [name](link_to_github_profile) for their contributions.

---

© 2024 Your Name. All Rights Reserved.

[website](link_to_your_website) | [GitHub](link_to_your_github) | [LinkedIn](link_to_your_linkedin)