#!/usr/bin/env bash
# Production stack (docker-compose.prod.yml). Triggered by the Makefile.
set -euo pipefail
cd "$(dirname "$0")/.."

PORT="${PORT:-4020}"
COMPOSE="docker compose -f docker-compose.prod.yml"

case "${1:-}" in
  up)
    # Static is generated inside the nginx image (node:18 build stage),
    # so no host node / yarn is needed here.
    $COMPOSE up --build -d
    echo "-> http://localhost:$PORT"
    ;;
  down) $COMPOSE down ;;
  *) echo "usage: prod.sh {up|down}" >&2; exit 1 ;;
esac
