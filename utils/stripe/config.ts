
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? 'mock_key', {
    apiVersion: '2025-11-17.clover', // Updated to match installed types
    appInfo: {
        name: 'InvestTips Newsletter',
        version: '0.1.0'
    }
});
