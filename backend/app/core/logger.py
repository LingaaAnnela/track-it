import logging
import watchtower
import boto3
from app.core.config import settings

# Initialize AWS Session
session = boto3.client(
    "logs",
    aws_access_key_id=settings.AWS_ACCESS_KEY,
    aws_secret_access_key=settings.AWS_SECRET_KEY,
    region_name=settings.AWS_REGION,
)

# Setup CloudWatch Logger
logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

# Attach CloudWatch log handler
# logger.addHandler(
#     watchtower.CloudWatchLogHandler(
#         log_group=settings.CLOUDWATCH_LOG_GROUP,
#         stream_name=settings.CLOUDWATCH_STREAM_NAME,
#         boto3_session=session,
#     )
# )

logger.addHandler(
    watchtower.CloudWatchLogHandler(
        log_group=settings.CLOUDWATCH_LOG_GROUP,
        stream_name=settings.CLOUDWATCH_STREAM_NAME,
    )
)

logger.info("🚀 CloudWatch Logging is now enabled!")
