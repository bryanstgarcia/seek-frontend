# TManager - Task Management App

TManager is a modern task management application built with React and Vite. It provides user authentication, task CRUD operations, and a responsive dashboard for tracking your productivity.

## Features
- User authentication (sign up, log in, log out)
- Create, read, update, and delete tasks
- Task status management (pending, in progress, completed)
- Tagging and categorization of tasks
- Responsive dashboard with task statistics
- Protected routes for authenticated users
- Global state management for tasks

## Folder Structure
```
frontend/
├── src/
│   ├── authentication/   # Auth logic, context, hooks, services, adapters
│   ├── shared/           # Shared components, router, global state
│   ├── tasks/            # Task CRUD, dashboard, hooks, adapters, services
│   └── main.jsx          # App entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v20+ recommended)
- npm or yarn

### Setup
1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
2. **Configure environment variables:**
   - Create a `.env` file in the project root:
     ```env
     VITE_API_URL=http://localhost:8000
     ```
   - Replace the URL with your backend API endpoint.

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173) by default.

## Usage
- **Sign Up / Log In:** Create an account or log in to access your tasks.
- **Dashboard:** View a summary of your tasks (total, pending, in progress, completed).
- **Tasks:** Create, update, delete, and manage the status of your tasks. Add tags for better organization.
- **Protected Routes:** `/tasks` and `/dashboard` are only accessible to authenticated users.
- **Log Out:** Use the "Sign out" option in the navbar menu to close your session.

## Technologies Used
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)
- [React Router](https://reactrouter.com/)
- Context API for global state

