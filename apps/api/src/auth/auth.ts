import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { PrismaService } from '../../prisma/prisma.service';
import { openAPI } from 'better-auth/plugins';

export const createAuth = (prisma: PrismaService) =>
  betterAuth({
    /**
     * Better Auth configuration
     */
    baseURL: process.env.BETTER_AUTH_URL,
    secret: process.env.BETTER_AUTH_SECRET,
    basePath: '/api/auth',
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
        clientId: process.env.FIGMA_CLIENT_ID as string,
        clientSecret: process.env.FIGMA_CLIENT_SECRET as string,
        disableDefaultScope: true,
      },
    },
    plugins: [openAPI()],
    /**
     * Session configuration
     */
    session: {
      cookieCache: {
        enabled: true,
        maxAge: 3 * 30 * 24 * 60 * 60, // 3 mois
        refreshCache: true,
      },
      expiresIn: 60 * 60 * 24 * 30, // 30 jours
      updateAge: 60 * 60 * 24, // 1 jour
      cookieOptions: {
        sameSite: process.env.NODE_ENV === 'production' ? 'lax' : 'lax',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
      },
    },
    /**
     * Advanced configuration
     */
    advanced: {
      cookiePrefix: 'better-auth',
      useSecureCookies: process.env.NODE_ENV === 'production',
      crossSubDomainCookies: { enabled: false },
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
