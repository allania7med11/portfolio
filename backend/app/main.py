from fastapi import FastAPI

from app.routers import contact

app = FastAPI(title="Portfolio Contact API")
app.include_router(contact.router)
