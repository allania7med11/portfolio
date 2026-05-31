import resend
from fastapi import APIRouter, HTTPException

from app.config import settings
from app.schemas.contact import ContactIn

router = APIRouter(prefix="/api/users", tags=["contact"])


@router.post("/contact/")
async def contact(payload: ContactIn):
    resend.api_key = settings.resend_api_key
    try:
        resend.Emails.send(
            {
                "from": settings.contact_from,
                "to": settings.contact_to,
                "reply_to": payload.from_email,
                "subject": f"[Portfolio] {payload.subject}",
                "text": f"From: {payload.from_email}\n\n{payload.message}",
            }
        )
    except Exception as exc:
        raise HTTPException(status_code=502, detail="Failed to send message") from exc
    return {"ok": True}
