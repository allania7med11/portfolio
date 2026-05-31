from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    resend_api_key: str = ""
    contact_to: str = ""
    contact_from: str = "onboarding@resend.dev"


settings = Settings()
