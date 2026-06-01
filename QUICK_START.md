# 🚀 Quick Start Deployment Guide

## Main Commands

```bash
# 1. Get SSL certificate from Cloudflare and place in nginx/ssl/
#    - cloudflare-origin.crt
#    - cloudflare-origin.key

# 2. Build and run the project
docker-compose up -d --build

# 3. View logs
docker-compose logs -f

# 4. Check status
docker-compose ps

# 5. Stop containers
docker-compose stop

# 6. Restart containers
docker-compose start
```

## Deployment Checklist

- [ ] Docker and Docker Compose installed
- [ ] SSL certificate obtained from Cloudflare and placed in `nginx/ssl/`
- [ ] DNS in Cloudflare points to server IP
- [ ] Firewall allows ports 80 and 443
- [ ] `.env` file created (if needed)
- [ ] `docker-compose up -d --build` executed
- [ ] Site accessible at https://bizhomesolutions.com

## Quick Test

```bash
# Test HTTPS
curl -I https://bizhomesolutions.com

# Test Health endpoint
curl https://bizhomesolutions.com/health
```

For more details, read the `DOCKER_DEPLOYMENT.md` file.

