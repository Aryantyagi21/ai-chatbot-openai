import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import cron from 'node-cron';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// ✅ Setup OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 🎯 Chat route
app.post('/chat', async (req, res) => {
  try {
    const userMessage = req.body.message;

    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: userMessage }],
    });

    const botReply = chatCompletion.choices[0].message.content.trim();
    res.json({ reply: botReply });
  } catch (error) {
    console.error('❌ Error from OpenAI:', error);
    res.status(500).json({ error: 'Something went wrong with the AI response' });
  }
});

// 🕓 Cron job - runs every 6 hours
cron.schedule('0 */6 * * *', () => {
  console.log('⏰ Cron job running every 6 hours');
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
