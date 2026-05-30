import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os


def send_appointment_email(
    recipient_email: str,
    doctor_name: str,
    appointment_time: str
):

    sender_email = os.getenv(
        "EMAIL_ADDRESS"
    )

    sender_password = os.getenv(
        "EMAIL_PASSWORD"
    )

    subject = "Appointment Confirmation"

    body = f"""
Hello,

Your appointment has been booked successfully.

Doctor: {doctor_name}
Time: {appointment_time}

Status: Confirmed

Thank you,
AI Health Assistant
"""

    msg = MIMEMultipart()

    msg["From"] = sender_email
    msg["To"] = recipient_email
    msg["Subject"] = subject

    msg.attach(
        MIMEText(
            body,
            "plain"
        )
    )

    server = smtplib.SMTP(
        "smtp.gmail.com",
        587
    )

    server.starttls()

    server.login(
        sender_email,
        sender_password
    )

    server.send_message(msg)

    server.quit()