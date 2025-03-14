Codtech Task 1

Overview

This project is a real-time chat application that includes both frontend and backend components. The backend is built with Node.js and Express, utilizing Socket.io for real-time communication. The frontend is implemented using React.js for dynamic UI updates.

Features

Real-time messaging with WebSockets (Socket.io)

Themed UI with light/dark mode support

Emoji picker for chat messages

User notifications on new messages

Persistent chat history using local storage

Installation

Prerequisites

Ensure you have the following installed:

Node.js (LTS recommended)

npm (comes with Node.js)

Steps

Clone the repository:

git clone <repository-url>
cd Codtech-Task-1-main

Install backend dependencies:

cd Backend
npm install

Start the backend server:

node Server.js

Install frontend dependencies:

cd ../Frontend
npm install

Start the frontend application:

npm start

Open your browser and navigate to http://localhost:3000 to access the chat application.

Project Structure

Codtech-Task-1-main/
│── Backend/
│   ├── Logger.js
│   ├── Server.js
│   ├── dateFormatter.js
│── Frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components/
│   ├── public/
│   │   ├── index.html
│   ├── styles/
│   │   ├── Style.css
│   ├── package.json
│── README.md

Usage

Open the application in your browser.

Enter a message and send it to see real-time updates across connected clients.

Switch between light and dark mode using the theme toggle.

View message history even after refreshing the page.

License

This project is licensed under the MIT License.

