from http.client import HTTPException
import boto3
import uuid
from app.models.course import Course
from app.core.config import settings
from app.core.logger import logger

# Initialize DynamoDB
dynamodb = boto3.resource(
    "dynamodb",
    aws_access_key_id=settings.AWS_ACCESS_KEY,
    aws_secret_access_key=settings.AWS_SECRET_KEY,
    region_name=settings.AWS_REGION,
)
table = dynamodb.Table(settings.DYNAMODB_TABLE)


def add_course(course_data):
    course_id = str(uuid.uuid4())
    course_data["id"] = course_id
    table.put_item(Item=course_data)
    logger.info(f"New course added: {course_data.title} with ID: {course_id}")
    return course_data


def get_all_courses():
    response = table.scan()
    logger.info("Fetched all courses from the database")
    return response.get("Items", [])


def edit_course(course_id: str, course: Course):
    response = table.get_item(Key={"id": course_id})
    if "Item" not in response:
        raise HTTPException(status_code=404, detail="Course not found")

    updated_item = {"id": course_id, **course}
    table.put_item(Item=updated_item)
    return updated_item


def delete_course(course_id):
    response = table.delete_item(Key={"id": course_id})
    if "Item" not in response:
        logger.warning(f"Attempted to delete non-existent course: {course_id}")
        return {"error": "Course not found"}

    logger.info(f"Deleted course with ID: {course_id}")

    return {"message": "Course deleted"}
