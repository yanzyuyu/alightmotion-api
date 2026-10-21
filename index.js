const DEFAULT_GATEWAY = 'https://am-api-service.vercel.app';

export class AlightMotionClient {
  constructor(apiKey = '', baseUrl = DEFAULT_GATEWAY) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl.replace(/\/$/, '');
  }

  async autoCreateAccount() {
    const res = await fetch(`${this.baseUrl}/api/alightmotion/auto`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ apiKey: this.apiKey })
    });
    return await res.json();
  }

  async sendMagicLink(email) {
    const res = await fetch(`${this.baseUrl}/api/alightmotion/send-link`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, apiKey: this.apiKey })
    });
    return await res.json();
  }

  async verifyMagicLink(email, magicLink) {
    const res = await fetch(`${this.baseUrl}/api/alightmotion/verify-link`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, magicLink, apiKey: this.apiKey })
    });
    return await res.json();
  }

  async downloadPreset(url) {
    const res = await fetch(`${this.baseUrl}/api/alightmotion/download`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, apiKey: this.apiKey })
    });
    return await res.json();
  }
}
