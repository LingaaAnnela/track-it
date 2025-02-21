from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel
from typing import List

import boto3
import uuid

app = FastAPI()

# Enable CORS for Angular Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],  # Allow Angular frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

dynamodb = boto3.resource(
    "dynamodb", region_name="us-east-2"
)  # Change region if needed
table = dynamodb.Table("Courses")


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


class Course(BaseModel):
    id: str | None = None
    title: str
    subtitle: str
    description: str
    targetDate: str
    priority: str


courses = []


@app.post("/courses", response_model=Course)
def add_course(course: Course):
    course_id = str(uuid.uuid4())  # Generate a unique ID
    item = {
        "id": course_id,
        "title": course.title,
        "subtitle": course.subtitle,
        "description": course.description,
        "targetDate": course.targetDate,
        "priority": course.priority,
    }
    table.put_item(Item=item)  # Store course in DynamoDB
    return course


@app.get("/courses", response_model=List[Course])
def get_courses():
    response = table.scan()  # Get all courses
    return response.get("Items", [])


@app.put("/courses/{course_id}", response_model=Course)
def update_course(course_id: str, course: Course):
    response = table.get_item(Key={"id": course_id})
    if "Item" not in response:
        raise HTTPException(status_code=404, detail="Course not found")

    updated_item = {"id": course_id, **course.dict()}
    table.put_item(Item=updated_item)
    return updated_item


@app.delete("/courses/{course_id}")
def delete_course(course_id: str):
    response = table.get_item(Key={"id": course_id})
    if "Item" not in response:
        raise HTTPException(status_code=404, detail="Course not found")

    table.delete_item(Key={"id": course_id})
    return {"message": "Course deleted successfully"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8000)
