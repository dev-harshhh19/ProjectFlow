# 🚀 ProjectFlow - Modern Project Management Application

A full-stack project management application built with React, Node.js, and Supabase. Features include project tracking, task management, team collaboration, and comprehensive analytics.

## ✨ Features

- **🎯 Smart Project Management** - Create, organize, and track projects with intelligent workflows
- **👥 Team Collaboration** - Real-time collaboration with shared workspaces
- **⏱️ Time Tracking** - Automatic time tracking with detailed reports
- **📊 Advanced Analytics** - Comprehensive insights and progress visualization
- **🔒 Secure Authentication** - Powered by Supabase Auth
- **📱 Responsive Design** - Works seamlessly on all devices
- **🎨 Modern UI** - Beautiful, intuitive interface with dark/light themes

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with modern features
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **React Router** - Client-side routing
- **Framer Motion** - Smooth animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Supabase** - Backend-as-a-Service
- **PostgreSQL** - Relational database
- **JWT** - JSON Web Tokens for authentication

## 🚦 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/project-management-app.git
   cd project-management-app
   ```

2. **Install dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   
   **Backend (.env)**:
   ```env
   DATABASE_URL=your_supabase_db_url
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   PORT=4000
   FRONTEND_URL=http://localhost:3000
   ```

   **Frontend (.env)**:
   ```env
   REACT_APP_SUPABASE_URL=https://your-project.supabase.co
   REACT_APP_SUPABASE_ANON_KEY=your_anon_key
   REACT_APP_API_URL=http://localhost:4000
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

## 🌐 Deployment

### Frontend - Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Select the `frontend` folder as root directory
   - Add environment variables:
     - `REACT_APP_SUPABASE_URL`
     - `REACT_APP_SUPABASE_ANON_KEY`
     - `REACT_APP_API_URL` (your Render backend URL)
   - Deploy!

### Backend - Render

1. **Deploy to Render**
   - Go to [render.com](https://render.com)
   - Create a new Web Service
   - Connect your GitHub repository
   - Select the `backend` folder as root directory
   - Use these settings:
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Environment**: Node

2. **Add Environment Variables** in Render dashboard:
   - `DATABASE_URL`
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `JWT_SECRET`
   - `NODE_ENV=production`
   - `FRONTEND_URL` (your Vercel frontend URL)

## 🐳 Docker Deployment (Optional)

Build and run with Docker:
```bash
docker-compose -f docker-compose.prod.yml up -d --build
```

## 📱 Application Structure

```
project-management-app/
├── frontend/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── context/         # Context providers
│   │   ├── hooks/          # Custom hooks
│   │   └── utils/          # Utility functions
│   ├── build/              # Production build
│   └── package.json
├── backend/                 # Node.js backend
│   ├── routes/             # API routes
│   ├── middleware/         # Express middleware
│   ├── utils/              # Utility functions
│   └── package.json
└── README.md
```

## 🔑 Key Features

### Dashboard
- Project overview with progress tracking
- Recent activities and notifications
- Quick access to important tasks

### Project Management
- Create and organize projects
- Set deadlines and priorities
- Track progress with visual indicators

### Task Management
- Create, assign, and track tasks
- Set due dates and priorities
- Comment and collaborate on tasks

### Team Collaboration
- Invite team members
- Real-time updates and notifications
- Shared workspaces and communication

### Analytics & Reporting
- Project performance metrics
- Time tracking reports
- Team productivity insights

## 🚀 Performance Optimizations

- **Code Splitting** - Lazy loading for better performance
- **Image Optimization** - Optimized assets and lazy loading
- **Caching** - Efficient caching strategies
- **Bundle Optimization** - Minimized bundle sizes
- **CDN Delivery** - Fast global content delivery

## 🔒 Security Features

- **JWT Authentication** - Secure token-based auth
- **CORS Protection** - Cross-origin request security
- **Environment Variables** - Secure configuration management
- **Input Validation** - Server-side validation
- **SQL Injection Protection** - Parameterized queries

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/project-management-app](https://github.com/yourusername/project-management-app)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Vercel](https://vercel.com/)
- [Render](https://render.com/)

---

Made with ❤️ by [Your Name]

# Enhanced Project Management Tool

A full-stack project management application built with React, Node.js, PostgreSQL, and TailwindCSS. This tool provides comprehensive project and task management capabilities with advanced features for tracking progress, time management, and team collaboration.

## 🚀 Features

### Project Management
- **Create, Edit, and Delete Projects** - Full CRUD operations for projects
- **Priority Levels** - Set project priority (Low, Medium, High, Urgent)
- **Status Tracking** - Track project status (Active, On Hold, Completed, Cancelled)
- **Deadline Management** - Set and track project deadlines with overdue alerts
- **Time Estimation** - Estimate and track hours for projects
- **Progress Visualization** - Visual progress bars and statistics

### Task Management
- **Comprehensive Task CRUD** - Create, read, update, and delete tasks
- **Advanced Task Fields**:
  - Title and description
  - Priority levels (Low, Medium, High, Urgent)
  - Status tracking (To Do, In Progress, Review, Completed, Cancelled)
  - Assignment to team members
  - Deadlines with overdue detection
  - Time estimation and tracking
- **Real-time Status Updates** - Change task status with immediate UI updates
- **Time Tracking** - Track estimated vs actual time spent on tasks

### Dashboard & Analytics
- **Project Overview** - View all projects with key metrics
- **Progress Statistics** - Real-time progress tracking for each project
- **Task Counts** - Total, completed, and in-progress task counts
- **Visual Indicators** - Color-coded priority and status badges
- **Overdue Alerts** - Clear visual indicators for overdue items

### User Experience
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Modern UI** - Clean, intuitive interface with TailwindCSS styling
- **Interactive Elements** - Hover effects, transitions, and smooth animations
- **Confirmation Dialogs** - Safe delete operations with confirmation prompts
- **Form Validation** - Input validation and error handling

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **React Router** - Client-side routing for SPA experience
- **TailwindCSS** - Utility-first CSS framework for styling
- **Modern JavaScript** - ES6+ features and async/await

### Backend
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web application framework
- **PostgreSQL** - Relational database for data persistence
- **pg** - PostgreSQL client for Node.js

### Database Schema
```sql
-- Enhanced projects table
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) DEFAULT 'active',
    priority VARCHAR(20) DEFAULT 'medium',
    deadline TIMESTAMP,
    estimated_hours DECIMAL(10,2) DEFAULT 0,
    total_time_spent DECIMAL(10,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Enhanced tasks table
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50) DEFAULT 'todo',
    priority VARCHAR(20) DEFAULT 'medium',
    project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
    assigned_to VARCHAR(255),
    deadline TIMESTAMP,
    estimated_hours DECIMAL(10,2) DEFAULT 0,
    time_spent DECIMAL(10,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn package manager

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure PostgreSQL:
   - Create a database named `project_management`
   - Update the database connection in `index.js` with your credentials
   - Run the schema file:
     ```bash
     psql -d project_management -f schema.sql
     ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

## 🎯 Usage Guide

### Creating Projects
1. Navigate to the Dashboard
2. Click "+ New Project" button
3. Fill in project details:
   - **Name** (required)
   - **Description** (optional)
   - **Priority** (Low, Medium, High, Urgent)
   - **Deadline** (optional)
   - **Estimated Hours** (optional)
4. Click "Create Project"

### Managing Tasks
1. Click on a project to view its details
2. Click "+ New Task" to add tasks
3. Fill in task details:
   - **Title** (required)
   - **Description** (optional)
   - **Priority** and **Status**
   - **Assigned To** (team member name)
   - **Deadline** and **Estimated Hours**
4. Use the task list to:
   - Edit task details
   - Change task status
   - Track time spent
   - Delete tasks

### Project Management
- **Edit Projects**: Hover over project cards and click the edit icon
- **Delete Projects**: Hover over project cards and click the delete icon
- **View Statistics**: See real-time progress and task counts
- **Track Progress**: Monitor completion percentages and time tracking

## 🔧 API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create a new project
- `GET /api/projects/:id` - Get a specific project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project
- `GET /api/projects/:id/stats` - Get project statistics

### Tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## 🎨 UI Components

### ProjectList
- Displays projects in a responsive grid layout
- Shows priority badges, status indicators, and progress bars
- Hover effects reveal edit and delete actions
- Visual indicators for overdue deadlines

### TaskList
- Comprehensive task management interface
- Inline editing capabilities
- Status dropdown with real-time updates
- Time tracking and progress visualization

### NewProjectModal & NewTaskForm
- Enhanced forms with all necessary fields
- Validation and error handling
- Responsive design for all screen sizes

## 🚀 Future Enhancements

- **User Authentication** - Login and user management
- **Team Collaboration** - Multiple users and permissions
- **File Attachments** - Upload and manage project files
- **Comments & Notes** - Task and project discussions
- **Email Notifications** - Deadline reminders and updates
- **Advanced Analytics** - Detailed reporting and insights
- **Calendar Integration** - Sync with external calendars
- **Mobile App** - Native mobile application

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please open an issue in the repository or contact the development team. 