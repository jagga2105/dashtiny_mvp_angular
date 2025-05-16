// server.js

const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai-api'); // Install using npm or yarn

const app = express();
const port = 3000;

const openai = new OpenAI(process.env.OPENAI_API_KEY);

app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.complete({
      engine: 'davinci',
      prompt: message,
      maxTokens: 150
    });

    res.json({ reply: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
