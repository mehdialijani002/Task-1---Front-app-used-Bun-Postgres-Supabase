# Bizhome Frontend — Bun, Supabase, Postgres

A modern Next.js app configured for Bun development, Supabase auth/data, and local Postgres support.

## Why this setup

- **Bun** for fast install and development startup
- **Supabase** for auth, realtime, and Postgres-backed API
- **Postgres** for local data and compatibility with Supabase
- **Local-first**: the app is configured to use local Supabase and avoid external backend URLs

## Quick start

### 1) Prepare environment

Create `.env.local` from the development template:

```powershell
copy .env.development .env.local
```

Open `.env.local` and verify these values:

```env
NEXT_PUBLIC_USE_SUPABASE=true
NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-public-key>
SUPABASE_SERVICE_ROLE_KEY=<your-secret-service-role-key>
NEXT_PUBLIC_API_BASE_URL=
```

### 2) Install dependencies with Bun

```powershell
bun install
```

If Bun is not installed yet, install it in PowerShell:

```powershell
iwr https://bun.sh/install.ps1 -useb | iex
```

### 3) Start the dev server

```powershell
bun run next dev --turbopack
```

If Bun fails, fall back to npm:

```powershell
npm install --legacy-peer-deps
npm run dev
```

## Supabase auth flow

- Sign up on the technician or property manager page
- Successful signup now redirects directly to login
- A success snackbar appears after signup
- Local Supabase email confirmation is optional and depends on your local Supabase settings

> Note: this repo is configured to use local Supabase auth. It no longer depends on `http://api.bizhomesolutions.com:8080`.

## Local Supabase and Postgres

This project can use your local Supabase instance running on `http://127.0.0.1:54321`.

### Use the local Supabase dev environment

Your local Supabase stack exposes:

- `Project URL`: `http://127.0.0.1:54321`
- `REST`: `http://127.0.0.1:54321/rest/v1`
- `GraphQL`: `http://127.0.0.1:54321/graphql/v1`
- `Edge Functions`: `http://127.0.0.1:54321/functions/v1`

### Local Postgres support

If you want a dedicated local Postgres container, use the included Docker Compose file:

```powershell
npm run docker:db
```

Stop it with:

```powershell
npm run docker:db:down
```

The local Docker Postgres uses:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/bizhome_local
```

## What is already wired

- `src/lib/supabaseClient.js` connects to Supabase using `NEXT_PUBLIC_SUPABASE_URL`
- `src/api/core/technicianAuth/technicianAuth.js` and `propertyManagerAuth.js` can switch to Supabase when `NEXT_PUBLIC_USE_SUPABASE=true`
- `src/components/PANEL/auth/technician-auth/technicianSignUp/technicianSignUp.jsx` redirects to login after signup with a success snackbar
- `src/context/auth/AuthContext.js` supports Supabase auth flows and realtime Snackbar alerts
- `src/lib/supabaseRealtime.js` subscribes to realtime changes

## Running the project

### Fast Bun workflow

```powershell
bun install
bun run next dev --turbopack
```

### Fallback npm workflow

```powershell
npm install --legacy-peer-deps
npm run dev
```

### Build

```powershell
bun run next build
# or
npm run build
```

### Start production-like

```powershell
bun run next start
# or
npm run start
```

## Environment variables

Use `.env.development` as a template, then copy it to `.env.local`.

Key variables:

```env
NEXT_PUBLIC_USE_SUPABASE=true
NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_...
SUPABASE_SERVICE_ROLE_KEY=sb_secret_...
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/bizhome_local
NEXT_PUBLIC_API_URL=http://localhost:4030
NEXT_PUBLIC_API_BASE_URL=
PORT=4030
```

## Troubleshooting

### Supabase URL malformed

Make sure `NEXT_PUBLIC_SUPABASE_URL` is a valid URL and not empty.

### Bun command not found

Install Bun with:

```powershell
iwr https://bun.sh/install.ps1 -useb | iex
```

### npm install conflict

Use:

```powershell
npm install --legacy-peer-deps
```

### Docker Compose not running

Start Docker Desktop before running:

```powershell
npm run docker:db
```

## Optional Docker + production notes

The repo includes Docker and Nginx config for deployment, but development is easiest with Bun + local Supabase.

## Summary

This project is now optimized for a Bun-first local development experience with Supabase auth/realtime and Postgres support. Use Bun for speed, `.env.local` for local Supabase credentials, and the included local Postgres compose file only if you need a dedicated database container.

### Common Issues

#### 1. SSL/TLS Error

```bash
# Check SSL certificate
openssl x509 -in nginx/ssl/cloudflare-origin.crt -text -noout

# Check private key
openssl rsa -in nginx/ssl/cloudflare-origin.key -check
```

#### 2. Nginx Won't Start

```bash
# Check Nginx config syntax
docker-compose exec nginx nginx -t

# View Nginx logs
docker-compose logs nginx
```

#### 3. Next.js Not Working

```bash
# Enter container
docker-compose exec nextjs sh

# Check build files
ls -la .next/

# Check environment variables
env | grep NODE_ENV
```

#### 4. 502 Bad Gateway Error

```bash
# Check connection to upstream
docker-compose exec nginx ping nextjs

# Check logs
docker-compose logs nextjs
docker-compose logs nginx
```

## 📊 Monitoring

### Check Resource Usage

```bash
# View CPU and RAM usage
docker stats

# View disk usage
docker system df

# Clean up unused resources
docker system prune -a
```

## 🔄 Backup and Restore

### Backup

```bash
# Backup code
tar -czf bizhome-backup-$(date +%Y%m%d).tar.gz \
  --exclude='node_modules' \
  --exclude='.next' \
  c:\Users\m\OneDrive\Desktop\wwwwwwww\project\Bizhome-front-master

# Backup SSL certificates
tar -czf ssl-backup-$(date +%Y%m%d).tar.gz nginx/ssl/
```

### Restore

```bash
# Restore from backup
```

tar -xzf bizhome-backup-YYYYMMDD.tar.gz

# Build and run

docker-compose up -d --build

````

## 🛠️ Using Makefile (Recommended)

The project includes a Makefile for easier management:

```bash
# Display all available commands
make help

# Build and deploy
make deploy

# View logs
make logs              # All services
make logs-nginx        # Nginx only
make logs-nextjs       # Next.js only

# Management
make status            # Check status
make restart           # Restart containers
make down              # Stop containers
make clean             # Complete cleanup

# Utilities
make health            # Health check
make stats             # Resource statistics
make backup            # Create backup

# Development
make shell-nginx       # Enter Nginx container
make shell-nextjs      # Enter Next.js container
````

## 📞 Useful Links

- **Cloudflare Dashboard**: https://dash.cloudflare.com
- **Cloudflare Origin Certificate**: https://developers.cloudflare.com/ssl/origin-configuration/origin-ca
- **Docker Documentation**: https://docs.docker.com
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Nginx Documentation**: https://nginx.org/en/docs/

## ⚠️ Important Notes

1. **Never** commit SSL files to Git
2. Add `.env` file to `.gitignore`
3. Always test SSL before production
4. Ensure regular backups
5. Monitor logs regularly
6. Keep Docker images updated
7. Use strong passwords for production

## 🎉 Final Testing

After deployment, verify the following:

```bash
# ✅ HTTP redirects to HTTPS
curl -I http://bizhomesolutions.com

# ✅ HTTPS works
curl -I https://bizhomesolutions.com

# ✅ SSL is valid
openssl s_client -connect bizhomesolutions.com:443 -servername bizhomesolutions.com

# ✅ Security headers are present
curl -I https://bizhomesolutions.com | grep -i "strict-transport-security\|x-frame-options\|x-content-type"

# ✅ Test SSL grade (external tool)
# Visit: https://www.ssllabs.com/ssltest/analyze.html?d=bizhomesolutions.com
```

## 🚀 Production Checklist

Before going live, ensure:

- [ ] SSL certificates are properly configured
- [ ] DNS records point to the correct IP
- [ ] Firewall rules are configured
- [ ] Environment variables are set
- [ ] Backups are configured
- [ ] Monitoring is set up
- [ ] Error pages are customized
- [ ] Performance is optimized
- [ ] Security headers are enabled
- [ ] Logs are being collected
- [ ] Health checks are working
- [ ] Domain resolves correctly
- [ ] HTTPS redirects work
- [ ] All pages load correctly
- [ ] API endpoints respond

## 📈 Performance Optimization

### Enable HTTP/2

Already enabled in the Nginx configuration.

### Gzip Compression

Already configured for text files, JSON, JavaScript, CSS, and SVG.

## Local Development with Supabase and Bun

If you want to try the app with Supabase for Auth and Postgres as the database, follow these steps.

1. Copy the environment template and fill in your Supabase project values:

```bash
cp .env.development .env.local
# edit .env.local and add your NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
```

2. Start a local Postgres (optional) using Docker Compose:

```bash
# start local postgres
npm run docker:db
# stop
npm run docker:db:down
```

3. Install dependencies (Bun recommended):

```bash
# with Bun
bun install
bun run next dev --turbopack

# or with npm
npm install
npm run dev
```

4. Realtime notifications are enabled when `NEXT_PUBLIC_USE_SUPABASE=true` and will show in-app SnackBar for new demo bookings.

Notes:

- For production use Supabase managed Postgres or run Postgres in your infra and set `DATABASE_URL` accordingly.
- Bun support for Next.js is experimental; if you run into runtime issues, use Node/npm.

### Static File Caching

Next.js static files are cached for 365 days.

### CDN

Cloudflare proxy acts as a CDN automatically.

## 🔐 Security Best Practices

1. **SSL/TLS**: Use Full (strict) mode in Cloudflare
2. **Headers**: Security headers are configured in Nginx
3. **Firewall**: Only expose necessary ports (80, 443)
4. **Updates**: Keep Docker images and system updated
5. **Secrets**: Never commit sensitive data to Git
6. **Access**: Use SSH keys instead of passwords
7. **Monitoring**: Set up log monitoring and alerts

## 💡 Tips

1. Use `make` commands for easier management
2. Monitor logs regularly with `make logs`
3. Create automated backups with cron jobs
4. Use environment-specific `.env` files
5. Test SSL configuration before going live
6. Keep documentation updated
7. Use version tags for Docker images

If everything works correctly, your site will be accessible at https://bizhomesolutions.com! 🚀

## 🆘 Support

For issues or questions:

1. Check the logs: `make logs`
2. Verify SSL certificates
3. Check DNS settings in Cloudflare
4. Review firewall rules
5. Test connectivity
6. Consult Docker documentation

## 📝 License

This deployment configuration is part of the BizHome Solutions project.

---

**Last Updated**: October 2025
**Version**: 1.0.0
