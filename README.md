# Open README and overwrite content
cat > README.md << 'EOF'
# Speedometer App 🚗💨

A simple React application that simulates a speedometer.
Users can accelerate and apply brakes while respecting minimum and maximum limits.

## 🚀 Features
- Increase speed by 10 kmph
- Decrease speed by 10 kmph
- Minimum speed limit: 0 kmph
- Maximum speed limit: 200 kmph
- Built using React functional components and hooks

## 🛠️ Tech Stack
- React
- JavaScript (ES6)
- CSS

## ▶️ How to Run Locally

1. Install dependencies
npm install

2. Start the development server
npm start
or
npm run dev

3. Open browser and visit
http://localhost:3000

## 📁 Project Structure

src/
 ├── App.js
 ├── index.js
 └── components/
      └── SpeedCounter/
           └── index.js

## 🎯 What I Learned
- React state management using useState
- Arrow functions and component structure
- Handling UI limits using Math.min and Math.max
- Git workflow: commit, branch, push, remote setup

Built by Adiii 🚀
EOF

# Stage changes
git add .

# Commit changes
git commit -m "Update README and speedometer project"

# Make sure remote is correct
git remote remove origin || true
git remote add origin https://github.com/Adithyasai3/speedometer.git

# Push (tries master first, then main)
git push -u origin master || git push -u origin main
