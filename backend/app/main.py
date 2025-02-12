from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS for Angular Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],  # Allow Angular frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "TrackIt Backend is running!"}


# ✅ Add the new `/tiles` endpoint
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
