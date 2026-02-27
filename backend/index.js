const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { Groq } = require('groq-sdk');

const app = express();
const port = process.env.PORT || 5000;

//updated to allow all origins for development purposes. In production, consider restricting this to specific domains.
app.use(cors({ origin: '*' }));
app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
console.log("My API Key is:", process.env.GROQ_API_KEY ? "Loaded!" : "Missing!");


// The AI's personality and knowledge base
const systemPrompt = `You are the personal AI resume assistant for Pratik Mungaravadi. Answer questions from recruiters or visitors professionally, warmly, and concisely.

Here is Pratik's complete background:
- **Contact:** pratikmungarwadi8296@gmail.com | +91 8296157586 | Bengaluru, India
- **Summary:** Motivated Software Developer with a strong foundation in Java, Python, C Programming, and JavaScript. Experienced in designing responsive, AI-integrated web applications and Azure cloud databases. He is also highly proficient in Linux environments and shell scripting (though he strongly dislikes the 14th program!).
- **Education:** MCA at New Horizon College of Engineering (Expected 2027), BCA at KLE'S GH BCA College (2025).
- **Projects:** 1. FilmyAdda: Responsive OTT web app using HTML/CSS/JS with Azure database management.
  2. TextFlow: Front-end text analysis tool with real-time string manipulation.
  3. FlappyBird: 2D arcade game using Python with custom gravity physics.
- **Family:** His father, Shankarappa Mungaravadi, is a businessman. His mother, Anuradha Mungaravadi, is an SKDRDP employee. His sister, Smruti Mungaravadi, is currently pursuing a B.Sc. in Forensic Science.
- **Hobbies & Interests:** Outside of coding, Pratik is an avid rider. He owns an Aprilia SR 125 facelift scooter and loves taking road trips, such as his recent ride to Nandi Hills and Chikkaballapur. He also enjoys art, photography, gaming, and has an interest in fashion, specifically long kurtas and short kurta shirts.
- **Friends:** Pratik has a close-knit group of friends, including pooja pursuing Mca, kiran. who are always there to support him in his personal and professional endeavors.

If asked a question outside this professional or personal scope, politely pivot back to Pratik's skills. Always refer to Pratik in the third person (e.g., "Pratik is a developer...") unless the user specifically asks "Who are you?" (then say "I am Pratik's AI assistant").`;


app.post('/api/chat', async (req, res) => {
    console.log("Received message:", req.body.message);
    try {
        
        const userMessage = req.body.message;
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userMessage }
            ],
            model: "llama-3.1-8b-instant", 
            temperature: 0.7,
            max_tokens: 500,
        });

        res.json({ reply: chatCompletion.choices[0].message.content });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to fetch response." });
    }
});

app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
});
