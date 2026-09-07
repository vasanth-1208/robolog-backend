# RoboLog Backend

Backend API for **RoboLog**, built with NestJS and designed with a modular architecture for authentication, user management, and persistent data storage.

## 🚀 Overview

RoboLog Backend provides the server-side foundation for the RoboLog application.

It is responsible for:

* User authentication
* User management
* Secure password handling
* Database connectivity
* REST API endpoints
* Application configuration
* Automated testing

The backend follows a modular NestJS architecture that makes the application easier to maintain, extend, and integrate with a frontend client.

## ✨ Key Features

### 🔐 Authentication

* User authentication module
* Secure password hashing using bcrypt
* Authentication service and controller
* User-related data management

### 👤 User Management

* User entity and persistence layer
* Structured user module
* Database-backed user information

### 🗄️ Database Integration

The backend uses:

* **PostgreSQL** as the relational database
* **TypeORM** for database access and entity management

### ⚙️ Configuration

Application configuration is managed through the NestJS configuration system, allowing environment-specific settings without hardcoding sensitive configuration values.

### 🧪 Testing

The project includes:

* Unit tests
* End-to-end tests
* Jest test configuration
* Test coverage support

## 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │   Frontend Client   │
                    └──────────┬──────────┘
                               │
                               │ HTTP / REST API
                               ▼
                    ┌─────────────────────┐
                    │    NestJS Backend   │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
        ┌──────────┐     ┌──────────┐    ┌────────────┐
        │   Auth   │     │  Users   │    │  Config    │
        │  Module  │     │  Module  │    │  Module    │
        └────┬─────┘     └────┬─────┘    └────────────┘
             │                │
             └────────┬───────┘
                      ▼
                ┌────────────┐
                │  TypeORM   │
                └─────┬──────┘
                      ▼
                ┌────────────┐
                │ PostgreSQL │
                └────────────┘
```

## 🔄 Request Flow

```text
Client Request
      │
      ▼
NestJS Controller
      │
      ▼
Service Layer
      │
      ▼
TypeORM
      │
      ▼
PostgreSQL
      │
      ▼
API Response
```

## 🛠️ Technology Stack

| Technology | Purpose                 |
| ---------- | ----------------------- |
| NestJS     | Backend framework       |
| TypeScript | Application development |
| Node.js    | Runtime environment     |
| PostgreSQL | Relational database     |
| TypeORM    | ORM / database access   |
| bcrypt     | Password hashing        |
| Jest       | Unit testing            |
| Supertest  | API / E2E testing       |
| ESLint     | Code quality            |
| Prettier   | Code formatting         |

The current project dependencies confirm NestJS 11, TypeORM, PostgreSQL (`pg`), bcrypt, configuration support, Jest, Supertest, ESLint, and TypeScript.

## 📁 Project Structure

```text
robolog-backend/
│
├── src/
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   └── *.spec.ts
│   │
│   ├── users/
│   │   └── user.entity.ts
│   │
│   ├── app.controller.ts
│   ├── app.service.ts
│   ├── app.module.ts
│   └── main.ts
│
├── test/
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
│
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── nest-cli.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── tsconfig.build.json
```

The repository currently follows this modular structure, including separate `auth` and `users` areas and dedicated unit/E2E test files.

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/vasanth-1208/robolog-backend.git
```

### 2. Navigate to the project

```bash
cd robolog-backend
```

### 3. Install dependencies

```bash
npm install
```

## 🔑 Environment Configuration

Create a `.env` file in the project root and configure the required database and application settings.

Example:

```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=your_password
DATABASE_NAME=robolog
```

> Do not commit real passwords, API keys, database credentials, or other secrets to GitHub.

## 🗄️ PostgreSQL Setup

Create a PostgreSQL database for the application.

Example:

```sql
CREATE DATABASE robolog;
```

Then configure the database connection through environment variables.

## ▶️ Running the Application

### Development

```bash
npm run start:dev
```

### Standard start

```bash
npm run start
```

### Production

```bash
npm run build
npm run start:prod
```

## 🧪 Testing

### Unit tests

```bash
npm run test
```

### Watch mode

```bash
npm run test:watch
```

### End-to-end tests

```bash
npm run test:e2e
```

### Test coverage

```bash
npm run test:cov
```

The available scripts include build, development, production, linting, unit testing, coverage, and E2E testing.

## 🔒 Security

The backend uses bcrypt for secure password hashing.

Recommended production practices include:

* Store secrets in environment variables
* Never commit `.env` files
* Use strong database credentials
* Validate incoming API data
* Use HTTPS in production
* Implement proper authentication guards
* Apply authorization where required
* Configure CORS for trusted frontend origins
* Avoid exposing sensitive error information

## 🧩 Backend Modules

### Auth Module

Responsible for authentication-related functionality and communication between authentication controllers and services.

### Users Module

Provides the user entity and the persistence model used by the application.

### Application Module

Acts as the root module that connects the application's modules and dependencies.

## 📈 Future Enhancements

Potential improvements include:

* JWT-based authentication
* Refresh-token support
* Role-based access control
* DTO validation with `class-validator`
* Authentication guards
* API documentation with Swagger
* User profile management
* Request logging
* Rate limiting
* Global exception handling
* Docker support
* CI/CD pipeline
* Production monitoring
* Database migrations
* API versioning

## 📌 Project Status

**Status:** Backend foundation / Active Development

The repository currently provides a NestJS backend foundation with authentication and user-related modules, PostgreSQL/TypeORM integration, and automated testing infrastructure.

## 👨‍💻 Author

**VASANTHARAJ M**

B.E. Computer Science & Engineering
Bannari Amman Institute of Technology

GitHub: `vasanth-1208`

## 📄 License

This project is currently maintained as a private-development codebase and does not currently declare an open-source license.
