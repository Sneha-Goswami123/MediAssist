from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.auth_dependency import get_current_user
from app.database import get_db

from app.models import Appointment
from app.models import User

from app.schemas import AppointmentCreate

from app.email_utils import send_appointment_email

router = APIRouter(
    prefix="/appointments",
    tags=["Appointments"]
)


@router.post("/")
def create_appointment(
    appointment: AppointmentCreate,
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):

    new_appointment = Appointment(
        patient_id=current_user["user_id"],
        doctor_name=appointment.doctor_name,
        appointment_time=appointment.appointment_time,
        status="pending"
    )

    db.add(new_appointment)

    db.commit()

    db.refresh(new_appointment)

    user = db.query(
        User
    ).filter(
        User.id ==
        current_user["user_id"]
    ).first()

    try:

        send_appointment_email(
            recipient_email=user.email,
            doctor_name=appointment.doctor_name,
            appointment_time=appointment.appointment_time
        )

    except Exception as e:

        import traceback
        print("================================")
        print("EMAIL ERROR:")
        traceback.print_exc()
        print("================================")

    return new_appointment


@router.get("/")
def get_appointments(
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):

    appointments = db.query(
        Appointment
    ).filter(
        Appointment.patient_id ==
        current_user["user_id"]
    ).all()

    return appointments


@router.delete("/{appointment_id}")
def delete_appointment(
    appointment_id: int,
    current_user=Depends(get_current_user),
    db: Session = Depends(get_db)
):

    appointment = db.query(
        Appointment
    ).filter(
        Appointment.id == appointment_id,
        Appointment.patient_id ==
        current_user["user_id"]
    ).first()

    if not appointment:

        raise HTTPException(
            status_code=404,
            detail="Appointment not found"
        )

    db.delete(appointment)

    db.commit()

    return {
        "message": "Appointment deleted"
    }