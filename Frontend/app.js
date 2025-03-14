// app.js
const socket = io();

const chatWindow = document.getElementById("chat-window");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");

// Add message to the chat window
const appendMessage = (message) => {
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll
};

// Send message when the button is clicked
sendButton.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message) {
    socket.emit("message", message);
    appendMessage(`You: ${message}`);
    messageInput.value = "";
  }
});

// Receive and display messages from the server
socket.on("message", (message) => {
  appendMessage(`Other: ${message}`);
});
