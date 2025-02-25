from pydantic import BaseModel


class Course(BaseModel):
    id: str | None = None
    title: str
    subtitle: str
    description: str | None = None
    targetDate: str
    priority: str
    category: str
