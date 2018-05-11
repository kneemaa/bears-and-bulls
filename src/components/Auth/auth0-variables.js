export const AUTH_CONFIG = {
  domain: 'devious.auth0.com',
  clientId: 'CVSJgRVxWoZ46VIAWvU9Jz29ZzhA9vEA',
  callbackUrl: process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/callback' : 'https://bears-and-bulls.herokuapp.com/callback',
  audience: 'https://devious.auth0.com/userinfo',
  responseType: 'code token id_token',
  scope: 'openid email profile'
}
