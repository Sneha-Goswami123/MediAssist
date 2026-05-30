from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from dotenv import load_dotenv

from app.database import engine
from app.database import Base

from app.routes.auth_routes import router as auth_router
from app.routes.appointment_routes import router as appointment_router
from app.routes.ai_routes import router as ai_router
from app.routes.report_routes import router as report_router
from app.routes.chatbot_routes import router as chatbot_router

import app.models

load_dotenv()

Base.metadata.create_all(
    bind=engine
)

app = FastAPI(
    title="AI Health Assistant"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(appointment_router)
app.include_router(ai_router)
app.include_router(report_router)
app.include_router(chatbot_router)


@app.get("/")
def home():

    return {
        "message": "AI Health Assistant Backend Running"
    }