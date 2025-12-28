import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { PrismaService } from '../../../../prisma/prisma.service';
import { openAPI } from 'better-auth/plugins';

export const createAuth = (prisma: PrismaService) =>
  betterAuth({
    /**
     * Better Auth configuration
     */
    baseURL: process.env.BETTER_AUTH_URL,
    secret: process.env.BETTER_AUTH_SECRET,
    basePath: '/api/better-auth',
    /**
     * Database configuration
     */
    database: prismaAdapter(prisma, {
      provider: 'postgresql',
    }),
    /**
     * Social providers configuration
     */
    socialProviders: {
      figma: {
        clientId: process.env.FIGMA_CLIENT_ID || '',
        clientSecret: process.env.FIGMA_CLIENT_SECRET || '',
        redirectURI: process.env.FIGMA_REDIRECT_URI || '/',
      },
    },
    plugins: [openAPI()],
    /**
     * Session configuration
     */
    session: {
      expiresIn: 60 * 60 * 24 * 30, // 30 jours
      updateAge: 60 * 60 * 24, // 1 jour
    },
    /**
     * Rate limiting configuration
     */
    rateLimit: {
      window: 15 * 60 * 1000, // 15 minutes
      max: 100,
    },
    /**
     * Trusted origins for CORS
     */
    trustedOrigins: [process.env.CLIENT_URL || 'http://localhost:3000'],
  });

export type Auth = ReturnType<typeof createAuth>;
