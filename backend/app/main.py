from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import courses
from app.core.logger import logger

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routes
app.include_router(courses.router)


@app.get("/")
def health_check():
    logger.info("✅ Health Check: FastAPI is running!")
    return {"message": "TrackIt Backend Running!"}


if __name__ == "__main__":
    import uvicorn

    logger.info("🚀 Starting TrackIt FastAPI Server")
    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)
