// Set up variables
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chatLog = document.querySelector(".chat-log");

require('dotenv').config(); // Load the .env file

async function sendMessage(message) {
  const response = await fetch("https://api.openai.com/v1/engine/engines/davinci-codex/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      prompt: `User: ${message}\nBot:`,
      max_tokens: 150,
      temperature: 0.5,
      n: 1,
      stop: "\n",
    }),
  });
  const data = await response.json();
  return data.choices[0].text.trim();
}

// Define function to add message to chat log
function addMessageToLog(message, sender) {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("chat-message");
  messageContainer.classList.add(sender);
  messageContainer.textContent = message;
  chatLog.appendChild(messageContainer);
  chatLog.scrollTop = chatLog.scrollHeight;
}

// Define function to handle user input
async function handleUserInput() {
  const message = userInput.value.trim();
  if (message !== "") {
    userInput.value = "";
    addMessageToLog(message, "user");
    const botMessage = await sendMessage(message);
    addMessageToLog(botMessage, "bot");
  }
}

// Set up event listeners
sendBtn.addEventListener("click", handleUserInput);
userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleUserInput();
  }
});
