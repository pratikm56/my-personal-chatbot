# 🤖 Pratik's Personal AI Portfolio Chatbot

Welcome to the repository for my full-stack AI-powered portfolio assistant! This application allows recruiters, developers, and visitors to interact with a custom AI that knows all about my technical skills, software projects, and background.

## 🚀 Live Demo
* **Frontend (Interact with the AI here!)=https://my-personal-chatbot-3re6.vercel.app/
* **Backend API:** Hosted securely on Render=https://my-personal-chatbot-d7xz.onrender.com

## ✨ Features
* **Intelligent Responses:** Powered by the Groq API, the assistant dynamically answers context-specific questions about my professional journey.
* **Comprehensive Knowledge Base:** The AI is specifically prompted with my resume details, including:
  * **Education:** My ongoing MCA at New Horizon College of Engineering and my BCA background.
  * **Technical Skills:** Proficiency in C Programming, Java, Python, JavaScript, Linux shell scripting, and Azure.
  * **Key Projects:** Deep dives into *FilmyAdda*, *TextFlow*, and *FlappyBird*.
  * **Personal Touch:** It even knows a few fun facts about me, like my recent scooter rides to Nandi Hills and my best friend Pooja!
* **Modern Glassmorphism UI:** A sleek, translucent frontend design with smooth, animated gradient backgrounds.
* **Fully Responsive:** Works seamlessly across desktop and mobile devices.

## 💻 Tech Stack
* **Frontend:** React.js, CSS3 (Glassmorphism Design principles), Axios
* **Backend:** Node.js, Express.js, CORS
* **AI Integration:** Groq API (Large Language Model)
* **Deployment & Hosting:** Vercel (Frontend) & Render (Backend)

## 🛠️ Local Installation & Setup

If you want to run this project locally on your machine, follow these steps:

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/your-username/pratik-portfolio-chatbot.git
cd pratik-portfolio-chatbot
\`\`\`

### 2. Setup the Backend
\`\`\`bash
cd backend
npm install
\`\`\`
* Create a `.env` file in the `backend` folder.
* Add your Groq API key: `GROQ_API_KEY=your_api_key_here`
* Start the server:
\`\`\`bash
npm start
\`\`\`

### 3. Setup the Frontend
Open a new terminal window and navigate to the frontend directory:
\`\`\`bash
cd frontend
npm install
\`\`\`
* Open `frontend/src/App.js` and ensure the Axios POST request points to `http://localhost:5000/api/chat` for local testing.
* Start the React app:
\`\`\`bash
npm start
\`\`\`

## 📬 Contact
* **Email:** pratikmungarwadi8296@gmail.com
* **Location:** Bengaluru, India
