// Get the input field and button
var input = document.querySelector('input[type="text"]');
var button = document.querySelector('button');

// Get the messages container
var messages = document.querySelector('.messages');

// Function to add a new message to the chat
function addMessage(content, isSent) {
    // Create a new message element
    var message = document.createElement('div');
    message.classList.add('message');
    
    // Set the message class based on whether it was sent or received
    if (isSent) {
        message.classList.add('sent');
    } else {
        message.classList.add('received');
    }
    
    // Set the message content
    message.innerHTML = '<p>' + content + '</p>';
    
    // Append the message to the messages container
    messages.appendChild(message);
    
    // Scroll to the bottom of the messages container
    messages.scrollTop = messages.scrollHeight;
}

// Function to handle the button click event
function sendMessage() {
    // Get the text from the input field
    var messageText = input.value;
    
    // If the input field is empty, do nothing
    if (messageText.trim() === '') {
        return;
    }
    
    // Add the message to the chat as sent
    addMessage(messageText, true);
    
    // TODO: Send the message to the bot and get the response
    
    // Clear the input field
    input.value = '';
}

// Add a click event listener to the button
button.addEventListener('click', sendMessage);

// Add a keydown event listener to the input field
input.addEventListener('keydown', function(event) {
    // If the user pressed the Enter key, send the message
    if (event.keyCode === 13) {
        sendMessage();
    }
});

