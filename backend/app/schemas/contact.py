from pydantic import BaseModel, EmailStr, constr


class ContactIn(BaseModel):
    from_email: EmailStr
    subject: constr(strip_whitespace=True, min_length=1)
    message: constr(strip_whitespace=True, min_length=1)
