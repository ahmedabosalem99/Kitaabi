export const environment = {
  production: true,
  apiUrl: process.env['RAILWAY_BACKEND_URL'] || '/api' // Fallback to relative path
};
