🐄 QurbaniHat Bazar

A Modern Digital Livestock Marketplace

📌 Overview

QurbaniHat Bazar is a modern web-based platform designed to simplify the process of buying and selling Qurbani animals. It connects buyers with verified sellers, offering a seamless, transparent, and user-friendly experience.

Built with a focus on performance, scalability, and user experience, this platform brings the traditional livestock market into the digital world.

✨ Features
🛒 Marketplace
Browse cows, goats, and other livestock
Detailed animal profiles (price, weight, breed, health)
Category-based filtering
🔐 Authentication
Secure login & registration system
Email-based authentication
Protected user routes
👤 User Dashboard
Manage personal profile
Update user information
Track activity
📊 Smart UI/UX
Modern responsive design
Animated UI components
Clean and intuitive navigation
📦 Data Handling
JSON-based animal data
Scalable backend structure
Optimized API routes
🧱 Tech Stack
Frontend
Next.js (App Router)
React.js
Tailwind CSS
Backend
API Routes (Next.js)
Authentication system
Database
MongoDB (via custom db connection)
Tools & Libraries
ESLint
PNPM
Custom animations
📂 Project Structure
app/
 ├── api/auth/
 ├── details-page/[id]/
 ├── login/
 ├── register/
 ├── my-profile/
 ├── update/
 ├── layout.jsx
 ├── page.jsx

components/
 ├── Navbar.jsx
 ├── Hero.jsx
 ├── Footer.jsx
 ├── TipsAnimation.jsx

lib/
 ├── db.js
 ├── auth.js
 ├── auth-client.js

data/
 ├── animals.json

 
🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/qurbanihat-bazars.git
cd qurbanihat-bazars

2️⃣ Install Dependencies
pnpm install

3️⃣ Setup Environment Variables

Create a .env file and add:

MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_secret_key
4️⃣ Run the Development Server
pnpm dev

Open: http://localhost:3000

🔥 Future Improvements
🧠 AI-based animal recommendation
📍 Location-based seller filtering
💳 Online payment integration
📱 Mobile app version
⭐ Review & rating system

This project aims to:

Digitize traditional Qurbani markets
Ensure transparency in buying livestock
Save time and effort for users
Provide a scalable livestock marketplace solution
👨‍💻 Author

Omor Faruk (Shrabon)
Frontend Developer | Next.js Enthusiast

📜 License

This project is open-source and available under the MIT License.

💡 Final Note

This is more than just a project — it’s a step toward transforming traditional livestock trading into a modern digital experience.
