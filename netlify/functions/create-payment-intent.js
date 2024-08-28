// ./netlify/functions/create-payment-intent.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function(event, context) {
    if (event.httpMethod === 'POST') {
        try {
            const { amount } = JSON.parse(event.body); // Adjust amount based on your needs
            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency: 'gbp',
                payment_method_types: ['card'],
            });
            return {
                statusCode: 200,
                body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: error.message }),
            };
        }
    } else {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' }),
        };
    }
};
