// emojiPicker.js
const emojiPicker = document.createElement("div");
emojiPicker.id = "emoji-picker";
emojiPicker.innerHTML = "😀 😃 😄 😁 😆 😅 😂 😊 😎 ❤️ 💬";

emojiPicker.style = `
  position: absolute;
  bottom: 60px;
  left: 20px;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
`;

emojiPicker.addEventListener("click", (e) => {
  if (e.target.textContent) {
    const messageInput = document.getElementById("message-input");
    messageInput.value += e.target.textContent;
  }
});

document.body.appendChild(emojiPicker);
