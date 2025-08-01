# AI Chatbot Projects – OpenAI & Custom API (Node.js)

This repository contains two separate AI chatbot implementations:

---

## 🤖 1. OpenAI API Chatbot (`openai-chatbot/`)

This is a simple chatbot that uses OpenAI’s GPT model (`gpt-3.5-turbo`) with a Node.js backend and a basic HTML frontend.

### 📁 Directory: `openai-chatbot/`

### Features:
- Communicates with OpenAI's API
- Simple web-based interface
- Easy to run using Node.js

---

## 🔧 2. Custom API Chatbot (`custom-api-chatbot/`)

This is a custom-built chatbot backend using your own static knowledge base (`faqData.js`) without any AI model.

### 📁 Directory: `custom-api-chatbot/`

### Features:
- Built in Node.js
- Uses keyword/question matching logic
- Custom logging and folder structure
- Ideal for specific domains like SSB/Defense FAQs

---

## 📁 Other folders:

- `error_screenshots/`: Contains screenshots of errors you encountered while building the chatbot.
- `.env.example`: Example environment variable file for reference.

---

## 🚀 How to Run (Quick Start)

### For OpenAI chatbot:

```bash
cd openai-chatbot
npm install
node index.js

## For Custom Chatbot
   
   cd custom-api-chatbot
npm install
node index.js

#Then open the frontend in your browser

###📌 Notes
Each chatbot has its own package.json and node_modules.

.env files are ignored in Git for security.

You can create separate README.md files inside each subfolder for deeper instructions (optional).

👨‍💻 Author
Aryan Tyagi – DevOps Enthusiast & Chatbot Builder
📧 Email:tyagiaryanpnp18@gmail.com
🔗 LinkedIn
