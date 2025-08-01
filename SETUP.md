# Project Management App - Setup Guide

## Major Issues Fixed

### 1. **React Router and Auth Context Structure Issue**
- **Problem**: `useAuth()` and `useLocation()` hooks were being called outside their respective providers
- **Solution**: Restructured App.js to properly wrap components with providers in correct order

### 2. **Missing Environment Variables**
- **Problem**: No .env files existed, causing authentication and database connection failures
- **Solution**: Created .env.example templates for both frontend and backend

### 3. **Package Dependencies Issues**
- **Problem**: Inconsistent and conflicting dependencies in package.json files
- **Solution**: Fixed root package.json with proper scripts and concurrent execution

### 4. **Backend Import Issues**
- **Problem**: Missing imports for `path` and `fs` modules needed for file operations
- **Solution**: Added missing imports to prevent runtime errors

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v12 or higher)
- Supabase account (for authentication)
- npm or yarn package manager

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
# Install all dependencies (root, backend, and frontend)
npm run install:all

# Or install manually:
# npm install
# cd backend && npm install
# cd ../frontend && npm install
```

### 2. Database Setup

#### PostgreSQL Database:
1. Create a PostgreSQL database named `project_management`
2. Run the schema file:
   ```bash
   psql -d project_management -f backend/schema.sql
   ```

#### Supabase Setup (Alternative/Additional):
1. Create a Supabase project at https://supabase.com
2. Get your project URL and API keys from Settings > API
3. Enable email authentication in Authentication settings

### 3. Environment Configuration

#### Backend (.env in backend folder):
```bash
# Copy the example file
cp backend/.env.example backend/.env

# Edit the file with your actual values:
DATABASE_URL=postgresql://username:password@localhost:5432/project_management
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
JWT_SECRET=your-super-secret-jwt-key-here
NODE_ENV=development
PORT=4000
FRONTEND_URL=http://localhost:3000
```

#### Frontend (.env in frontend folder):
```bash
# Copy the example file
cp frontend/.env.example frontend/.env

# Edit the file with your actual values:
REACT_APP_SUPABASE_URL=https://your-project-id.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-anon-key
REACT_APP_API_URL=http://localhost:4000
PORT=3000
```

### 4. Start the Application

#### Option 1: Start both simultaneously (recommended):
```bash
npm run dev
```

#### Option 2: Start separately:
```bash
# Terminal 1 - Backend
npm run dev:backend

# Terminal 2 - Frontend
npm run dev:frontend
```

### 5. Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:4000
- Health Check: http://localhost:4000/

## Troubleshooting

### Common Issues:

1. **"Cannot read properties of null" error**
   - **Cause**: React context providers not properly wrapped
   - **Solution**: Verify App.js structure is correct (fixed in this update)

2. **Environment variables not found**
   - **Cause**: Missing .env files
   - **Solution**: Copy .env.example files and fill in real values

3. **Database connection failed**
   - **Cause**: Incorrect DATABASE_URL or database not running
   - **Solution**: Check PostgreSQL is running and connection string is correct

4. **Supabase authentication errors**
   - **Cause**: Wrong API keys or Supabase project not configured
   - **Solution**: Verify keys in Supabase dashboard and check email auth is enabled

5. **CORS errors**
   - **Cause**: Frontend and backend running on different ports than configured
   - **Solution**: Ensure ports match in environment variables

6. **"Module not found" errors**
   - **Cause**: Dependencies not installed
   - **Solution**: Run `npm run install:all` or install dependencies manually

### Port Configuration:
- Backend runs on port 4000 (configurable via PORT in backend/.env)
- Frontend runs on port 3000 (configurable via PORT in frontend/.env)
- Make sure CORS origins match these ports

### Database Schema:
The application expects these tables:
- `projects` - Main project data
- `tasks` - Task data linked to projects

Run the schema.sql file to create these tables with proper relationships.

## Features Available After Setup:

- User authentication (register/login)
- Create, edit, delete projects
- Add tasks to projects
- Export projects as CSV/PDF
- Project statistics and progress tracking
- Responsive design with animations

## Development Scripts:

- `npm run dev` - Start both frontend and backend
- `npm run dev:backend` - Start only backend
- `npm run dev:frontend` - Start only frontend
- `npm run build` - Build frontend for production
- `npm run install:all` - Install all dependencies

## Production Deployment:

1. Set NODE_ENV=production in backend/.env
2. Update FRONTEND_URL to your production domain
3. Use production PostgreSQL database
4. Build frontend: `npm run build`
5. Serve built files with your web server
