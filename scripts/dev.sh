#!/usr/bin/env bash
# Development stack (docker-compose.yml). Triggered by the Makefile.
set -euo pipefail
cd "$(dirname "$0")/.."

case "${1:-}" in
  up)   docker compose up -d --build; echo "-> http://localhost:8090" ;;
  down) docker compose down ;;
  *) echo "usage: dev.sh {up|down}" >&2; exit 1 ;;
esac
