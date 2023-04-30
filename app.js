const messagesContainer = document.getElementById('messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Initialize the OpenAI API
const openai = require('openai')('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');

// Add an event listener to the send button
sendBtn.addEventListener('click', () => {
  // Get the user's input
  const userInputValue = userInput.value;

  // Add the user's message to the messages container
  messagesContainer.innerHTML += `<p><strong>You:</strong> ${userInputValue}</p>`;

  // Use the OpenAI API to generate a response
  openai.completions.create({
    engine: 'davinci',
    prompt: userInputValue,
    max_tokens: 50,
    n: 1,
    stop: '\n',
  })
  .then(response => {
    // Add the response to the messages container
    const responseData = response.data[0].text;
    messagesContainer.innerHTML += `<p><strong>Bot:</strong> ${responseData}</p>`;
  })
  .catch(error => {
    console.error(error);
  });

  // Clear the user's input
  userInput.value = '';
});