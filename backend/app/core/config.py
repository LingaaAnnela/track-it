import os
from dotenv import load_dotenv

# Load .env variables
load_dotenv()


class Settings:
    AWS_ACCESS_KEY = os.getenv("AWS_ACCESS_KEY_ID")
    AWS_SECRET_KEY = os.getenv("AWS_SECRET_ACCESS_KEY")
    AWS_REGION = os.getenv("AWS_REGION")
    DYNAMODB_TABLE = os.getenv("DYNAMODB_TABLE")
    CLOUDWATCH_LOG_GROUP = os.getenv("CLOUDWATCH_LOG_GROUP")
    CLOUDWATCH_STREAM_NAME = os.getenv("CLOUDWATCH_STREAM_NAME")


settings = Settings()

# Debug: Print values to check
# print("AWS_ACCESS_KEY:", settings.AWS_ACCESS_KEY)
# print("AWS_SECRET_KEY:", settings.AWS_SECRET_KEY)
# print("AWS_REGION:", settings.AWS_REGION)
