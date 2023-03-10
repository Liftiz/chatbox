const chatContainer = document.getElementById("chat-container");
const messageInput = document.getElementById("message-input");
const senderButton = document.getElementById("sender-button");
const recipientButton = document.getElementById("recipient-button");

let messages = [];

function addMessage(message, isSender) {
  const messageClass = isSender ? "sender" : "recipient";
  const messageContainer = document.createElement("div");
  messageContainer.textContent = message;
  messageContainer.classList.add("message", messageClass);

  const editButton = document.createElement("button");
  editButton.textContent = "Modifier";
  editButton.classList.add("edit-button");
  editButton.addEventListener("click", () => {
    const editedMessage = prompt("Modifier le message :", message);
    if (editedMessage !== null) {
      messageContainer.textContent = editedMessage;
      messages = messages.map(msg => {
        if (msg.message === message) {
          return { message: editedMessage, isSender };
        } else {
          return msg;
        }
      });
    }
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Supprimer";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", () => {
    chatContainer.removeChild(messageContainer);
    messages = messages.filter(msg => msg.message !== message);
  });

  messageContainer.appendChild(editButton);
  messageContainer.appendChild(deleteButton);
  chatContainer.appendChild(messageContainer);

  messages.push({ message, isSender });
}

senderButton.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message !== "") {
    addMessage(message, true);
    messageInput.value = "";
  }
});

recipientButton.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message !== "") {
    addMessage(message, false);
    messageInput.value = "";
  }
});
