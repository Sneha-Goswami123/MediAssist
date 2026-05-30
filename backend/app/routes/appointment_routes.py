from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Appointment
from app.schemas import AppointmentCreate

router = APIRouter(
    prefix="/appointments",
    tags=["Appointments"]
)


@router.post("/")
def create_appointment(
    appointment: AppointmentCreate,
    db: Session = Depends(get_db)
):

    new_appointment = Appointment(
        patient_id=1,
        doctor_name=appointment.doctor_name,
        appointment_time=appointment.appointment_time,
        status="pending"
    )

    db.add(new_appointment)

    db.commit()

    db.refresh(new_appointment)

    return new_appointment


@router.get("/")
def get_appointments(
    db: Session = Depends(get_db)
):

    appointments = db.query(
        Appointment
    ).all()

    return appointments