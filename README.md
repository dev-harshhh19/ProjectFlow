# ProjectFlow

A full-stack project management application designed for efficient project tracking, task management, and team collaboration.

## Core Features

- **Project Tracking**: Comprehensive management of projects, including status (Active, On Hold, Completed), priority levels, and deadline oversight.
- **Task Management**: Detailed task creation and tracking with assignment capabilities, priority settings, status updates (To Do, In Progress, Review, Completed), and time estimation.
- **Dashboard & Analytics**: A centralized overview providing key project metrics, real-time progress statistics, and visual indicators for critical items.
- **Team Collaboration**: Facilitates shared workspaces and collective progress tracking for effective teamwork.
- **Responsive Design**: An intuitive and clean user interface optimized for seamless experience across desktop and mobile devices.

## Technology Stack

This application is built upon a robust, full-stack architecture:

- **Frontend**:
  - React
  - React Router
  - Tailwind CSS

- **Backend**:
  - Node.js
  - Express.js
  - PostgreSQL

- **Authentication**:
  - JSON Web Tokens (JWT)
  - Supabase Auth

## API Endpoints

The backend exposes a RESTful API for interaction with project and task resources.

### Projects API

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/projects` | Retrieves all projects. |
| `POST` | `/api/projects` | Creates a new project. |
| `GET` | `/api/projects/:id` | Fetches a single project by its ID. |
| `PUT` | `/api/projects/:id` | Updates an existing project. |
| `DELETE` | `/api/projects/:id` | Deletes a project. |
| `GET` | `/api/projects/:id/stats` | Provides detailed statistics for a specific project. |

### Tasks API

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/tasks` | Creates a new task. |
| `PUT` | `/api/tasks/:id` | Updates an existing task. |
| `DELETE` | `/api/tasks/:id` | Deletes a task. |

## License

This project is licensed under the MIT License. Refer to the `LICENSE` file for complete details.
