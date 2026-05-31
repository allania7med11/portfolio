# Multi-stage build mirroring the ChatTag pattern (base -> development/production)
FROM python:3.12-slim AS base

ENV PYTHONDONTWRITEBYTECODE=1 PYTHONUNBUFFERED=1
WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
EXPOSE 8000

#########################################
# Development stage  (ENVIRONMENT=dev -> fastapi dev, hot reload)
#########################################
FROM base AS development
ENTRYPOINT ["sh", "./run.sh"]

#########################################
# Production stage   (fastapi run)
#########################################
FROM base AS production
ENTRYPOINT ["sh", "./run.sh"]
