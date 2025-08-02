# ProjectFlow

A full-stack project management application built to streamline project tracking, enhance task management, and foster team collaboration.

## Core Features

- **Project Tracking**: Full CRUD operations for projects, including status tracking (Active, On Hold, Completed), priority levels, and deadline management.
- **Task Management**: Comprehensive task creation and management with assignees, priority, status (To Do, In Progress, Review, Completed), and time estimation.
- **Dashboard & Analytics**: A high-level overview of all projects with key metrics, including real-time progress statistics and visual indicators for overdue items.
- **Team Collaboration**: Designed for teams to share workspaces and track progress collectively.
- **Responsive Design**: A clean and intuitive interface that works seamlessly across desktop and mobile devices.

## Technology Stack

This application is built with a modern, full-stack architecture:

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

The backend provides a RESTful API for managing projects and tasks.

### Projects API

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/projects` | Retrieve all projects. |
| `POST` | `/api/projects` | Create a new project. |
| `GET` | `/api/projects/:id` | Get a single project by its ID. |
| `PUT` | `/api/projects/:id` | Update a project. |
| `DELETE` | `/api/projects/:id` | Delete a project. |
| `GET` | `/api/projects/:id/stats` | Get detailed statistics for a project. |

### Tasks API

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/tasks` | Create a new task. |
| `PUT` | `/api/tasks/:id` | Update a task. |
| `DELETE` | `/api/tasks/:id` | Delete a task. |

## Contributing

Contributions are welcome. Please follow these steps:

1.  Fork the repository.
2.  Create a new feature branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add YourFeature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.