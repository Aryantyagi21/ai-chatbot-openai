# 🤖 AI FAQ Chatbot using OpenAI (ChatGPT API)

A lightweight chatbot that responds to frequently asked questions using OpenAI's ChatGPT API. Built using Node.js and Express, with a simple HTML frontend — perfect for demos or integration into your website.

---

## 🚀 Features

- Chat interface (HTML + Node.js backend)
- Processes natural language queries using ChatGPT API
- Easily deployable on cloud servers (like AWS EC2)
- Clean folder structure and easy setup

---

## 🧰 Tech Stack

- Node.js  
- Express.js  
- OpenAI API (ChatGPT)  
- dotenv  
- HTML & JavaScript (Frontend)

---

## 📁 Folder Structure
chatbot-api/
├── index.js # Node.js backend server
├── frontend.html # Frontend chatbot interface
├── .env.example # Example environment config
├── package.json # Dependencies
├── package-lock.json
├── node_modules/ # Installed libraries
└── README.md # Project documentation

---

## ⚙️ Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/Aryantyagi21/ai-chatbot-openai.git
cd ai-chatbot-openai

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env

# Edit .env and add your OpenAI API key like:
# OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# 4. Start the backend server
node index.js

# 5. Open the chatbot
Open the file 'frontend.html' in your browser to use the chatbot.
         ###For common errors and their fixes, check the [Error Screenshots](./error_screenshots/README.md).

## Security Notes
⚠️ Never commit actual API keys or credentials to your GitHub repository.

Best practices:

✅ Use a .env file to store your secrets securely.

✅ Add .env to your .gitignore file.

❌ Don't hardcode API keys in your index.js or frontend code.

✅ Share .env.example (with no real key) to guide others.

If you accidentally pushed your secret:

Use GitHub Push Protection to unblock or revoke the key.

Remove it from git history with tools like BFG Repo-Cleaner.

Regenerate the API key from OpenAI Dashboard.

👤 Author
Aryan Tyagi
📧 Email:tyagiaryanpnp18@gmail.com
🔗 LinkedIn
