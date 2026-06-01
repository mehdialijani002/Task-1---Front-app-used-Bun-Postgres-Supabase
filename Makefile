.PHONY: help build up down restart logs logs-nginx logs-nextjs shell-nginx shell-nextjs clean status health

help: ## Display help information
	@echo "Available commands:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2}'

build: ## Build Docker images
	docker-compose build

up: ## Start containers
	docker-compose up -d

down: ## Stop and remove containers
	docker-compose down

restart: ## Restart containers
	docker-compose restart

logs: ## Show logs for all services
	docker-compose logs -f

logs-nginx: ## Show Nginx logs
	docker-compose logs -f nginx

logs-nextjs: ## Show Next.js logs
	docker-compose logs -f nextjs

shell-nginx: ## Enter Nginx container shell
	docker-compose exec nginx sh

shell-nextjs: ## Enter Next.js container shell
	docker-compose exec nextjs sh

clean: ## Complete cleanup (containers, images, volumes)
	docker-compose down -v
	docker system prune -af

status: ## Check container status
	docker-compose ps

health: ## Check service health
	@echo "Checking HTTP..."
	@curl -s -o /dev/null -w "HTTP Status: %{http_code}\n" http://localhost || echo "HTTP connection error"
	@echo "Checking HTTPS..."
	@curl -s -o /dev/null -w "HTTPS Status: %{http_code}\n" https://bizhomesolutions.com || echo "HTTPS connection error"

deploy: ## Full deployment (build and up)
	docker-compose up -d --build

redeploy: down deploy ## Redeploy (down, build and up)

stats: ## Show resource usage statistics
	docker stats

backup: ## Backup project
	@echo "Creating backup..."
	tar -czf backup-$$(date +%Y%m%d-%H%M%S).tar.gz \
		--exclude='node_modules' \
		--exclude='.next' \
		--exclude='nginx/logs' \
		.
	@echo "Backup created: backup-$$(date +%Y%m%d-%H%M%S).tar.gz"

