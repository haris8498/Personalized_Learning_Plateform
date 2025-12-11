# 🎓 LearnSpace AI - Personalized Learning Platform

> An intelligent learning platform that creates personalized learning journeys based on your goals, experience level, and learning style.

![LearnSpace AI](https://img.shields.io/badge/React-18.2-blue) ![Vite](https://img.shields.io/badge/Vite-5.0-purple) ![Gemini](https://img.shields.io/badge/Gemini-AI-4285F4)

## ✨ Features

- **Interactive Assessment Quiz** - 5 questions to understand your learning profile
- **Personalized Dashboard** - Custom curriculum based on your answers
- **AI Chat Assistant** - Get personalized guidance powered by Google Gemini
- **Progress Tracking** - Visual metrics, streak counter, and achievement badges
- **Beautiful UI** - Smooth animations and responsive design

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Get Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Click "Get API Key"
3. Create a new API key or use an existing one
4. Copy the API key

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_GEMINI_API_KEY=your_actual_gemini_api_key_here
```

**⚠️ Important:** Replace `your_actual_gemini_api_key_here` with your actual Gemini API key from step 2.

### 4. Start Development Server

```bash
npm run dev
```

### 5. Open in Browser

Navigate to `http://localhost:5173`

## 🎯 User Journey

1. **Landing Page** → Click "Get Started For Free"
2. **Assessment Quiz** → Answer 5 personalization questions:
   - Your main learning goal
   - Current experience level
   - Preferred learning style
   - Weekly time commitment
   - Feedback preference
3. **Personalized Dashboard** → View your learning dashboard with:
   - Curriculum timeline
   - Progress metrics
   - Streak counter
   - Learning goals
   - User badge
   - **AI Chat Assistant** 🤖

## 💬 Using the AI Chat

The AI chat assistant provides personalized learning guidance based on your quiz answers:

- **Quick Suggestions**: Click pre-made questions to get started
- **Type Your Question**: Ask anything about your learning journey
- **Personalized Responses**: AI knows your goal, level, and learning style
- **Context-Aware**: Maintains conversation history

### Example Questions:
- "What should I learn first?"
- "How do I build a strong portfolio?"
- "Can you explain this concept in simple terms?"
- "What resources do you recommend?"

## 🛠 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Vanilla CSS with custom properties
- **Routing**: React Router DOM
- **AI**: Google Generative AI (Gemini Pro)
- **Animations**: CSS animations + transitions

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components (Landing, Questionnaire, Dashboard)
├── services/        # API services (AI integration)
├── data/            # Static data (questions)
├── App.jsx          # Main app component
└── index.css        # Global styles
```

## 🎨 Customization

### Modify Questions

Edit `src/data/questionsData.js` to change or add questions.

### Adjust AI Behavior

Edit `src/services/aiService.js` to customize the AI system prompt and responses.

### Update Styling

Modify CSS custom properties in `src/index.css` to change colors, spacing, and fonts.

## 🐛 Troubleshooting

### "API key not configured" error

Make sure you've:
1. Created a `.env` file in the project root
2. Added `VITE_GEMINI_API_KEY=your_key` with your actual API key
3. Restarted the development server (`Ctrl+C` then `npm run dev`)

### AI responses not working

1. Check that your Gemini API key is valid
2. Ensure you have internet connection
3. Check browser console for error messages
4. Verify API key has proper permissions in Google AI Studio

### Development server won't start

1. Delete `node_modules` folder
2. Run `npm install` again
3. Try `npm run dev` again

## 📝 License

MIT License - feel free to use this project for learning or your own projects!

## 🤝 Contributing

Contributions welcome! Feel free to submit issues or pull requests.

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

**Built with ❤️ for personalized learning**
