import os
import resend

resend.api_key = os.getenv(
    "RESEND_API_KEY"
)


def send_appointment_email(
    recipient_email: str,
    doctor_name: str,
    appointment_time: str
):

    resend.Emails.send({
        "from": "onboarding@resend.dev",
        "to": recipient_email,
        "subject": "Appointment Confirmation",
        "html": f"""
        <h2>Appointment Confirmed ✅</h2>

        <p>Your appointment has been booked successfully.</p>

        <p>
            <b>Doctor:</b> {doctor_name}<br>
            <b>Time:</b> {appointment_time}
        </p>

        <p>
            Thank you for using
            AI Health Assistant.
        </p>
        """
    })