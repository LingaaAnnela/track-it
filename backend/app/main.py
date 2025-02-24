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


@app.get("/tiles")
def tiles():
    return [
        {"text": "💰 Financial", "cols": 1, "rows": 1, "color": "lightblue"},
        {"text": "🔔 Reminders", "cols": 1, "rows": 1, "color": "lightyellow"},
        {"text": "📈 Portfolio", "cols": 2, "rows": 2, "color": "lightpink"},
        {"text": "📚 Learning", "cols": 2, "rows": 1, "color": "lightgreen"},
        {"text": "💳 Subscriptions", "cols": 1, "rows": 1, "color": "orange"},
        {"text": "✅ To-Dos", "cols": 2, "rows": 1, "color": "#DDBDF1"},
        {"text": "🎯 Goals", "cols": 1, "rows": 1, "color": "red"},
        {"text": "📊 Daily Insights", "cols": 2, "rows": 1, "color": "red"},
        {"text": "🏋️‍♂️ Health & Fitness", "cols": 1, "rows": 1, "color": "red"},
    ]


if __name__ == "__main__":
    import uvicorn

    logger.info("🚀 Starting TrackIt FastAPI Server")
    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)
