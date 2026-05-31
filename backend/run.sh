#!/bin/sh
echo "ENVIRONMENT=$ENVIRONMENT"
if [ "$ENVIRONMENT" = "dev" ]; then
    fastapi dev app/main.py --host 0.0.0.0 --port 8000
else
    fastapi run app/main.py --host 0.0.0.0 --port 8000
fi
