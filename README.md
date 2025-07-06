
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

🛠️ How to Run the App
▶️ Run Locally
Clone the Repository

bash
Copy
Edit
git clone https://github.com/sadad54/keenify-todo
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
Start the App

bash
Copy
Edit
npm run dev
The app will run at http://localhost:3000

🌐 Run the Live App
Go to the deployed Vercel URL:

arduino
Copy
Edit
https://keenify-todo-your-vercel-url.vercel.app
(Replace with your actual Vercel deployment link)

You can directly sign up, log in, and use the app without running it locally.

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

Automatically sync the to-do with the Google Calendar API so users get Google Calendar reminders.

📧 2. Gmail or Telegram API Notifications
Send email or Telegram bot notifications when a deadline is near.

Use the Gmail API or Telegram Bot API to push real-time alerts.

🤖 3. Auto-Prioritization of Todos
Implement a smart algorithm to auto-prioritize tasks based on deadlines, importance, or urgency.

Example: Overdue or high-priority tasks automatically move to the top of the list.

⏳ 4. Due Date & Countdown Timers
Display live countdown timers next to each to-do item.

👥 5. Share To-Do Lists
Allow users to share their to-do lists with others using email invitations or a public link.

🏷️ 6. Tags and Categories
Allow users to organize their tasks with tags or categories (e.g., Work, Personal, Urgent).

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
Adnan Mashrur Sadad
GitHub Profile
(https://github.com/sadad54)