// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;
  alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
});

// Load JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Initialize chatbot
    const chatbot = new Chatbot(data);

    // Add event listener for chat input submit
    const chatInput = document.getElementById('chat-input');
    const chatSubmit = document.getElementById('chat-submit');
    chatSubmit.addEventListener('click', () => {
      const query = chatInput.value.trim();
      chatbot.handleQuery(query);
      chatInput.value = '';
    });
    chatInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const query = chatInput.value.trim();
        chatbot.handleQuery(query);
        chatInput.value = '';
      }
    });
  })
  .catch(error => console.error(error));

// Chatbot class
class Chatbot {
  constructor(data) {
    this.data = data;
    this.output = document.getElementById('chat-output');
  }

  handleQuery(query) {
    // Add user message to output
    const userMessage = `<div class="chat-message user">${query}</div>`;
    this.output.insertAdjacentHTML('beforeend', userMessage);

    // Check for matching patterns
    let matched = false;
    for (const pattern in this.data.questions) {
      const regex = new RegExp(pattern, 'i');
      if (regex.test(query)) {
        const responses = this.data.questions[pattern];
        const randomIndex = Math.floor(Math.random() * responses.length);
        const botMessage = `<div class="chat-message bot">${responses[randomIndex]}</div>`;
        this.output.insertAdjacentHTML('beforeend', botMessage);
        matched = true;
        break;
      }
    }

    // If no pattern matched, use a default response
    if (!matched) {
      const defaultResponse = `<div class="chat-message bot">I'm sorry, I didn't understand your question.</div>`;
      this.output.insertAdjacentHTML('beforeend', defaultResponse);
    }

    // Scroll to the bottom of the chat output
    this.output.scrollTop = this.output.scrollHeight;
  }
}
;