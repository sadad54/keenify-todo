✅ Keenify Todo App
A simple, modern, minimalistic To-Do App built with Next.js (App Router), Supabase, and Vercel.

It allows user-specific authentication and CRUD operations (Create, Read, Delete) on todos with clean UI and live deployment.

🚀 Live Demo
Click Here to View the Live App
(Replace with your actual Vercel deployment URL)

💻 Tech Stack
Frontend: Next.js (App Router, React)

Backend: Supabase (Authentication & Database)

Hosting: Vercel

Language: JavaScript

Database: Supabase PostgreSQL (with Row Level Security)

🛠️ How to Run Locally
Clone the Repository

bash
Copy
Edit
git clone https://github.com/sadad54/keenify-todo.git
cd keenify-todo
Install Dependencies

bash
Copy
Edit
npm install
Set Up Environment Variables
Create a file named .env.local in the root directory and add:

bash
Copy
Edit
NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
Run the App Locally

bash
Copy
Edit
npm run dev
Open http://localhost:3000 in your browser to use the app.

✨ Features Implemented
✅ User Authentication (Signup/Login) with Supabase

✅ User-specific Todos (only logged-in users can see their own list)

✅ Create Todos

✅ View Todos

✅ Delete Todos

✅ Responsive, modern, and minimalistic UI

✅ Live deployment on Vercel

🔮 Suggested Future Features
📅 1. Google Calendar Integration
Allow users to set a due date and time for each to-do item.

Automatically sync the to-do with the Google Calendar API so users can get reminders via Google Calendar.

📧 2. Gmail or Telegram API Notifications
Send email or Telegram bot notifications when a deadline is near.

Gmail API or Telegram Bot API can push reminders directly to the user.

🤖 3. Auto-Prioritization of Todos
Use a smart algorithm to auto-prioritize tasks based on deadlines, importance, or custom weights.

Example: Overdue tasks appear at the top automatically.

⏳ 4. Due Date & Countdown Timers
Display a live countdown next to each to-do item indicating how much time is left.

👥 5. Sharing To-Do Lists
Allow list sharing between multiple users via a unique URL or by adding emails.

🏷️ 6. Tags and Categories
Let users categorize tasks with tags like “Work”, “Personal”, “Urgent” for better organization.

📂 Folder Structure
bash
Copy
Edit
keenify-todo/
├── lib/
│   └── supabaseClient.js
├── src/
│   └── app/
│       ├── layout.js
│       ├── page.js            # Login/Signup Page
│       └── dashboard/
│           └── page.js        # Dashboard Page
├── .env.local
├── .gitignore
├── package.json
├── README.md
└── ...
✅ Project Status
✔️ Core functionality is complete and fully deployed.
✔️ Clean commit history and structured code.
✔️ Ready for future feature expansions.

👤 Author
Your Name
GitHub Profile
(Replace with your GitHub URL)

