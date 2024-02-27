import rateLimit from 'express-rate-limit';
import env from '../config/env.js';

export const rateLimiterUsingThirdParty = rateLimit({
    windowMs: env.RATE_LIMITER_WINDOW_ALLOWED, // 24 hrs in milliseconds
    max: env.RATE_LIMITER_MAX_ALLOWED,
    message: 'You have exceeded the 100 requests in 24 hrs limit!',
    standardHeaders: true,
    legacyHeaders: false,
});
