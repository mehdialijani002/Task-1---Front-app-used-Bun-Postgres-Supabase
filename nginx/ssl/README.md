# SSL Certificates Directory

This directory is used for storing SSL certificates.

## Required Files:

1. `cloudflare-origin.crt` - Origin Certificate from Cloudflare
2. `cloudflare-origin.key` - Private Key for the certificate

## How to obtain Cloudflare Origin Certificate:

1. Log in to Cloudflare dashboard
2. Select your domain
3. Go to SSL/TLS > Origin Server
4. Click Create Certificate
5. Download the certificate and key and place them here

## Required Commands:

```bash
# Place the certificate
nano cloudflare-origin.crt
# Paste the Origin Certificate content

# Place the private key
nano cloudflare-origin.key
# Paste the Private Key content

# Set permissions
chmod 600 cloudflare-origin.key
chmod 644 cloudflare-origin.crt
```

⚠️ **Warning**: Never commit these files to Git!

