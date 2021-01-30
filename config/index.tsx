const dev: Boolean = process.env.NODE_ENV !== 'production';

export const server: String = dev ? 'http://localhost:3000' : 'https://your_deployment.server.com';