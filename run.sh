#!/bin/sh
echo "envs $ENVIRONMENT $PORT"
if [ "$COLLECTSTATIC" = "True" ]; then
    npm run generate && echo "Generation completed successfully"
fi
if [ "$ENVIRONMENT" = "debug" ]; then
    sleep infinity
elif [ "$ENVIRONMENT" = "dev" ]; then
    npm run dev
elif [ "$ENVIRONMENT" = "prod" ]; then
    npm run build
    npm run start
fi