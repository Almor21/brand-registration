from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    API_PREFIX: str = "/api"
    
    DB_USER: str
    DB_PASSWORD: str
    DB_HOST: str
    DB_PORT: str
    DB_NAME: str
    NODE_ENV: str = "development"

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        case_sensitive = True
        
    @property
    def DATABASE_URL(self) -> str:
        if (self.NODE_ENV == "docker"):
            return (
                f"postgresql://{self.DB_USER}:{self.DB_PASSWORD}"
                f"@postgresql:{self.DB_PORT}/{self.DB_NAME}"
            )
        return (
            f"postgresql://{self.DB_USER}:{self.DB_PASSWORD}"
            f"@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"
        )


settings = Settings()