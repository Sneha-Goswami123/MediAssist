from pydantic import BaseModel


class UserCreate(BaseModel):

    name: str

    email: str

    password: str


class UserLogin(BaseModel):

    email: str

    password: str


class AppointmentCreate(BaseModel):

    doctor_name: str

    appointment_time: str


class AppointmentResponse(BaseModel):

    id: int

    patient_id: int

    doctor_name: str

    appointment_time: str

    status: str

    class Config:

        from_attributes = True