# 🏥 MediAssist (AI Health Assistant)

An AI-powered healthcare platform that helps users manage appointments, analyze symptoms, upload medical reports, and interact with an intelligent healthcare chatbot.

The project combines modern web technologies with Generative AI to provide a smart healthcare experience while maintaining secure user authentication and data management.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?logo=kubernetes)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql)
![Google Gemini](https://img.shields.io/badge/Google-Gemini-4285F4?logo=google)
---

# 🚀 Live Demo

### Frontend

https://ai-health-assistant-coral.vercel.app/

### Backend API

https://ai-health-assistant-gior.onrender.com

### API Documentation

https://ai-health-assistant-gior.onrender.com/docs

---

# 📌 Features

## 👤 User Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* User Profile Page
* Secure Session Management

---

## 📅 Appointment Management

* Book Doctor Appointments
* View Appointment History
* Delete Appointments
* Appointment Status Tracking
* Appointment Confirmation Emails using Resend

---

## 🤖 AI Health Chatbot

Powered by Google Gemini AI.

Features:

* Health-related conversations
* Educational healthcare guidance
* Symptom explanations
* Medical information assistance
* Safe AI responses with healthcare-focused prompts

---

## 🩺 AI Symptom Checker

Users can enter symptoms and receive:

* Possible health conditions
* General recommendations
* Severity awareness
* Guidance on seeking professional care

Note:
The system does not provide medical diagnoses and is intended for educational purposes only.

---

## 📄 Medical Report Analyzer

Users can upload medical reports in PDF format.

The AI analyzes:

* Key findings
* Important observations
* Simplified explanations
* Healthcare recommendations

---

## 💬 Chat History

* Stores user conversations
* View previous AI interactions
* Personalized healthcare history

---

## 📧 Email Notifications

Integrated with Resend API.

Features:

* Appointment confirmation emails
* Automated notification system
* Production-ready email integration

---

## 👤 User Profile Dashboard

Displays:

* User information
* Total appointments
* Total chatbot conversations
* Role management

---

## 🏗️ System Architecture

```text
User
  │
  ▼
Frontend (Next.js)
  │
  ▼
Backend (FastAPI)
  │
  ├── Database → Neon PostgreSQL
  ├── AI → Google Gemini
  └── Email → Resend
```


---

# 🛠️ Tech Stack

## Frontend Technologies

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* Axios
* React Hooks
* Local Storage
* Client-Side Routing
* Responsive UI Design

## Backend Technologies

* Python 3
* FastAPI
* SQLAlchemy ORM
* Pydantic
* Uvicorn
* Python Dotenv
* Python Multipart
* CORS Middleware

## Database Technologies

* PostgreSQL
* Neon Serverless PostgreSQL
* Relational Database Design
* Database Migrations
* CRUD Operations

## AI & ML

* Google Gemini 2.5 Flash
* Google Generative AI SDK
* Prompt Engineering
* AI Chatbot Development
* AI Symptom Analysis
* Medical Report Analysis
* Large Language Model (LLM) Integration

## Authentication & Security

* JWT Authentication
* Access Tokens
* Protected Routes
* Authorization Middleware
* User Session Management
* Password Validation
* Secure API Access

## Email & Notifications

* Resend API
* Transactional Email Notifications
* Appointment Confirmation Emails

## File Processing

* PyPDF
* PDF Parsing
* Medical Report Upload & Analysis
* File Handling

## API Development

* REST API Architecture
* JSON Data Exchange
* Request Validation
* Response Handling
* API Documentation
* Swagger UI
* OpenAPI

## Cloud & Deployment

* Docker
* Docker Compose
* Kubernetes
* Kubernetes Deployments
* Kubernetes Services
* Kubernetes ConfigMaps
* Kubernetes Secrets
* Docker Hub
* Vercel (Frontend Deployment)
* Render (Backend Deployment)
* Neon (Database Hosting)
* Cloud-Based Architecture
* Production Deployment
* Environment Variables Management

## Development Tools

* Visual Studio Code (VS Code)
* Git
* GitHub
* Postman
* Swagger UI
* Browser Developer Tools

## Software Engineering Concepts

* Full Stack Development
* MVC Architecture
* Component-Based Architecture
* Database Design
* State Management
* Error Handling
* API Integration
* Authentication Systems
* Responsive Web Design
* Production Deployment
* Version Control
* Debugging & Troubleshooting


---

# 📂 Project Structure

```text
AI-Health-Assistant/
│
├── frontend/
│   │
│   ├── app/
│   │   ├── page.tsx                     # Home Page
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── appointment/
│   │   │   └── page.tsx
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   ├── chatbot/
│   │   │   └── page.tsx
│   │   ├── chat-history/
│   │   │   └── page.tsx
│   │   ├── symptom-checker/
│   │   │   └── page.tsx
│   │   └── report-analyzer/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── LogoutButton.tsx
│   │   └── Reusable UI Components
│   │
│   ├── services/
│   │   └── api.ts                       # Axios API Configuration
│   │
│   ├── public/
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   └── next.config.ts
│
├── backend/
│   │
│   ├── app/
│   │   ├── routes/
│   │   │   ├── auth_routes.py
│   │   │   ├── appointment_routes.py
│   │   │   ├── chatbot_routes.py
│   │   │   ├── ai_routes.py
│   │   │   └── report_routes.py
│   │   │
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── database.py
│   │   ├── main.py
│   │   ├── auth_utils.py
│   │   ├── auth_dependency.py
│   │   ├── email_utils.py
│   │   └── __init__.py
│   │
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .env
│
├── k8s/
│   ├── backend-deployment.yaml
│   ├── backend-service.yaml
│   ├── frontend-deployment.yaml
│   ├── frontend-service.yaml
│   ├── configmap.yaml
│   └── secret.yaml.example
│
├── screenshots/
│   └── home-page.png
│
├── docker-compose.yml
├── .gitignore
├── README.md
│
└── Deployment
    ├── Docker
    ├── Docker Compose
    ├── Kubernetes
    ├── Docker Hub
    ├── Vercel (Frontend Hosting)
    ├── Render (Backend Hosting)
    ├── Neon PostgreSQL (Database)
    ├── Google Gemini AI
    └── Resend Email API
```

---

# 🔐 Authentication Flow

1. User Registers
2. User Logs In
3. Backend Generates JWT Token
4. Token Stored in Browser
5. Protected Routes Verify Token
6. User Accesses Secure Features

---

# 🤖 AI Modules

## Healthcare Chatbot

Uses Google Gemini API to:

* Answer health questions
* Explain symptoms
* Provide healthcare education

---

## Symptom Checker

Analyzes:

* Fever
* Headache
* Cough
* Fatigue
* Digestive issues
* Other user-entered symptoms

---

## Report Analyzer

Processes uploaded medical reports and generates:

* Summaries
* Insights
* Recommendations

---

# 📧 Email Notification Workflow

1. User books appointment
2. Appointment saved in PostgreSQL
3. Resend API triggered
4. Confirmation email sent
5. User receives booking notification

---

# ⚙️ Environment Variables

## Backend (.env)

```env
DATABASE_URL=your_database_url

SECRET_KEY=your_secret_key

ALGORITHM=HS256

GEMINI_API_KEY=your_gemini_api_key

RESEND_API_KEY=your_resend_api_key
```

## Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=https://your-backend-url.onrender.com
```

# 🧪 Local Installation

## Clone Repository

```bash
git clone https://github.com/your-username/AI-Health-Assistant.git

cd AI-Health-Assistant
```

## Backend Setup

```bash
cd backend

python -m venv .venv

source .venv/bin/activate
```

Windows:

```bash
.venv\Scripts\activate
```

Install Dependencies

```bash
pip install -r requirements.txt
```

Run Backend

```bash
uvicorn app.main:app --reload
```

Backend URL:

```text
http://localhost:8000
```

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend URL:

```text
http://localhost:3000
```
---

## 🐳 Docker Support

Run the complete application using Docker Compose:

```bash
docker compose up --build
```

### Services

- Frontend → http://localhost:3000
- Backend → http://localhost:8000/docs

### Docker Components

- Frontend Container (Next.js)
- Backend Container (FastAPI)
- PostgreSQL Database (Neon)
- Docker Compose Orchestration

---

# ☸️ Kubernetes Deployment

The application can also be deployed using Kubernetes.

## Kubernetes Components

- Backend Deployment
- Frontend Deployment
- Backend ClusterIP Service
- Frontend NodePort Service
- ConfigMap
- Secret
- Docker Hub Images

## Deploy

```bash
kubectl apply -f k8s/
```

Verify

```bash
kubectl get deployments

kubectl get pods

kubectl get services
```

---

## Frontend

- Vercel
- Kubernetes

## Backend

- Render
- Kubernetes

## Database

- Neon PostgreSQL

## Email Service

- Resend

## Containerization

- Docker
- Docker Compose
- Docker Hub

## Orchestration

- Kubernetes
- Deployments
- Services
- ConfigMaps
- Secrets

---  

# 📸 Screenshots

* Home Page
<img width="1499" height="777" alt="image" src="https://github.com/user-attachments/assets/588fe243-67b7-4b37-9239-27eea34dda45" />


# 📈 Future Improvements

* Doctor Management System
* Admin Dashboard
* Appointment Scheduling Calendar
* Prescription Management
* Medical Record Storage
* Multi-language Support
* AI Health Risk Prediction
* Real-time Notifications
* Video Consultation Integration

---

# ⚠️ Disclaimer

This application is intended for educational and demonstration purposes only.

The AI features do not provide medical diagnoses, treatment plans, or emergency healthcare advice.

Users should always consult qualified healthcare professionals for medical concerns.

---

# ⭐ Project Highlights

* Full Stack Healthcare Platform
* AI-Powered Healthcare Assistant
* Secure JWT Authentication
* PostgreSQL Database Integration
* Gemini AI Integration
* AI Symptom Checker & Medical Report Analyzer
* Resend Email Notifications
* Dockerized Frontend & Backend
* Kubernetes Deployments with Multi-Replica Architecture
* Kubernetes Services, ConfigMaps & Secrets
* Cloud Deployment using Vercel, Render & Neon
* Production-Ready Architecture

# 👩‍💻 Author

 Sneha Goswami
