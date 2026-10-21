# alightmotion-api

Zero-dependency JavaScript/Node.js client and documentation for the Alight Motion Pro REST API Gateway.

Official Gateway: https://am-api-service.vercel.app  
Interactive Web Playground: https://am-api-service.vercel.app/docs#playground

## Problem & Background

Automating Alight Motion accounts for Discord, WhatsApp, or Telegram bots usually requires manual mailbox verification, APK reverse-engineering, or dealing with Google Drive download quota limits on shared presets. 

This repository provides an API client that connects directly to the Alight Motion Developer Gateway (<180ms response time), handling Firebase Identity authentication, 1-year Pro account generation, and preset URL resolving without modifying APKs.

## Quick Start (cURL)

Auto-create a 1-year Pro account:

```bash
curl -X POST https://am-api-service.vercel.app/api/alightmotion/auto \
  -H "Content-Type: application/json" \
  -d '{"apiKey": "YOUR_API_KEY"}'
```

Resolve and download a quota-limited preset:

```bash
curl -X POST https://am-api-service.vercel.app/api/alightmotion/download \
  -H "Content-Type: application/json" \
  -d '{"url": "https://alight.link/sample", "apiKey": "YOUR_API_KEY"}'
```

## Usage (Node.js 18+)

```javascript
import { AlightMotionClient } from './index.js';

const client = new AlightMotionClient('YOUR_API_KEY');

const account = await client.autoCreateAccount();
console.log(account.email, account.status);

const preset = await client.downloadPreset('https://alight.link/sample');
console.log(preset.url);
```

## API Reference

| Endpoint | Method | Description |
|---|---|---|
| `/api/alightmotion/auto` | POST | Auto-create mailbox and activate 1-year Pro subscription |
| `/api/alightmotion/send-link` | POST | Send official Firebase magic login link to email |
| `/api/alightmotion/verify-link` | POST | Verify magic link and return session tokens |
| `/api/alightmotion/download` | POST | Resolve Google Drive and MediaFire preset links |

## Live Playground

Test all endpoints directly from your browser without terminal setup:
https://am-api-service.vercel.app/docs#playground
