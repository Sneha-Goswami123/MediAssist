from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class AppointmentCreate(BaseModel):
    doctor_name: str
    appointment_time: str


class AppointmentResponse(BaseModel):
    id: int
    doctor_name: str
    appointment_time: str
    status: str

    class Config:
        from_attributes = True