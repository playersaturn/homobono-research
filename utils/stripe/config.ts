
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? 'mock_key', {
    apiVersion: '2025-01-27.acacia',
    appInfo: {
        name: 'InvestTips Newsletter',
        version: '0.1.0'
    }
});
