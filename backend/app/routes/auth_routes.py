from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.auth_utils import create_access_token
from app.auth_dependency import get_current_user

from app.database import get_db

from app.models import User
from app.models import Appointment
from app.models import ChatMessage

from app.schemas import UserCreate
from app.schemas import UserLogin

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/register")
def register_user(
    user: UserCreate,
    db: Session = Depends(get_db)
):

    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if existing_user:

        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    new_user = User(
        name=user.name,
        email=user.email,
        password=user.password,
        role="patient"
    )

    db.add(new_user)

    db.commit()

    db.refresh(new_user)

    return {
        "message": "User registered successfully"
    }


@router.post("/login")
def login_user(
    user: UserLogin,
    db: Session = Depends(get_db)
):

    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if not existing_user:

        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    if existing_user.password != user.password:

        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    token = create_access_token(
        {
            "user_id": existing_user.id,
            "email": existing_user.email
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }


@router.get("/profile")
def get_profile(
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):

    user = db.query(User).filter(
        User.id ==
        current_user["user_id"]
    ).first()

    appointment_count = db.query(
        Appointment
    ).filter(
        Appointment.patient_id ==
        user.id
    ).count()

    chat_count = db.query(
        ChatMessage
    ).filter(
        ChatMessage.user_id ==
        user.id
    ).count()

    return {
        "id": user.id,
        "name": user.name,
        "email": user.email,
        "role": user.role,
        "appointments": appointment_count,
        "chats": chat_count
    }