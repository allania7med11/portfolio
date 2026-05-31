.PHONY: help up-dev down-dev up-prod down-prod

help: ## Show available commands
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "%-12s %s\n", $$1, $$2}'

up-dev: ## Start dev stack (http://localhost:8090)
	@bash scripts/dev.sh up

down-dev: ## Stop dev stack
	@bash scripts/dev.sh down

up-prod: ## Start prod stack locally (http://localhost:4020)
	@bash scripts/prod.sh up

down-prod: ## Stop prod stack
	@bash scripts/prod.sh down
