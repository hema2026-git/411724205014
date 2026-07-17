from fastapi import FastAPI
from routes import router
import models
from database import engine

app = FastAPI()
app.include_router(router)
models.Base.metadata.create_all(bind=engine)

