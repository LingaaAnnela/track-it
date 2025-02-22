from fastapi import APIRouter, HTTPException
from app.models.course import Course
from app.services.course_service import (
    add_course,
    get_all_courses,
    edit_course,
    delete_course,
)

# from core.logging import logger

router = APIRouter()


@router.post("/courses", response_model=Course)
def create_course(course: Course):
    course_data = course.dict(exclude_unset=True)
    saved_course = add_course(course_data)
    # logger.info(
    #     f"New course added: {saved_course['title']} with ID: {saved_course['id']}"
    # )
    return saved_course


@router.get("/courses")
def list_courses():
    courses = get_all_courses()
    # logger.info("Fetched all courses")
    return courses


@router.put("/courses/{course_id}", response_model=Course)
def update_course(course_id: str, course: Course):
    course_data = course.dict(exclude_unset=True)
    updated_course = edit_course(course_id, course_data)
    return updated_course


@router.delete("/courses/{course_id}")
def remove_course(course_id: str):
    delete_course(course_id)
    return {"message": "Course deleted"}
