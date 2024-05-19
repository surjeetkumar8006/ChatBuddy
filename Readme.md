# ChatBuddy - OneStop place for personal interaction

ChatBuddy is a full-stack web application designed to facilitate personal interaction through real-time messaging. It provides users with a seamless experience to connect and communicate with each other. This README file serves as a guide to set up and run the application.

Live Deployed Link :- https://chat-buddy-with-socket-io.vercel.app/

## ChatBuddy UI
![ChatBuddy UI](https://github.com/AdityaGoel0320/MERN-CHAT-APP-WITH-SOCKET-IO/assets/112582770/88ae9a28-3ea9-44a7-a868-9c9179e6e690)


## Admin Page ScreenShot
![Admin Page ScreenShot](https://github.com/AdityaGoel0320/MERN-CHAT-APP-WITH-SOCKET-IO/assets/112582770/5dedddd9-3496-48ac-bd93-6333d10e0d43)


## Group Section
![Group Section ScreenShot](https://github.com/AdityaGoel0320/MERN-CHAT-APP-WITH-SOCKET-IO/assets/112582770/6d89d9e0-7ed8-4d25-8650-5b3f8f03e967)

<!-- [Watch the demo video](link_to_demo_video) -->

## Features

- **Real-time Messaging**: Utilizes Socket.io for instant messaging between users.
- **Image Storage**: Cloudinary integration for robust image storage and retrieval.
- **State Management**: Redux ensures proper state management throughout the application.
- **Admin Panel**: Includes an admin panel for managing users and content.

## Installation

To run ChatBuddy locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/AdityaGoel0320/MERN-CHAT-APP-WITH-SOCKET-IO.git
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

Live Deployed Link :- https://chat-buddy-with-socket-io.vercel.app/

## Technologies Used

- MongoDB
- Express.js
- React
- Node.js
- Cloudinary
- Socket.io
- Redux


---

© 2024 Aditya Goel. All Rights Reserved.

[website](https://aditya-goel-portfolio-website.vercel.app/) | [GitHub](https://github.com/AdityaGoel0320) | [LinkedIn](https://www.linkedin.com/in/aditya-goel-286245239/)
