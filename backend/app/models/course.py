from pydantic import BaseModel


class Course(BaseModel):
    id: str | None = None
    title: str
    subtitle: str
    description: str
    targetDate: str
    priority: str
