document.addEventListener('DOMContentLoaded', async () => {
    const stripe = Stripe('pk_live_51PsRsLH5TV7FZcwUA7OcStM8fSCg17wjdfEOFQxA4A8dkdJns2PUyySZyZ3K0ArmEfKuHVb7Ss47vJglgEq6l0b700zwnli2X0');
    
    let clientSecret;
    try {
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: 1000 }) // Adjust the amount as needed
        });
        
        const data = await response.json();
        clientSecret = data.clientSecret;
    } catch (error) {
        console.error('Failed to fetch client secret:', error);
        return;
    }

    const appearance = {
        theme: 'night',
        variables: { colorPrimaryText: '#e0e0e0', colorPrimary: '#f39c12' }
    };

    const options = {
        layout: {
            type: 'accordion',
            defaultCollapsed: false,
            radios: true,
            spacedAccordionItems: false
        }
    };

    const elements = stripe.elements({ clientSecret, appearance });
    const paymentElement = elements.create('payment', options);
    paymentElement.mount('#payment-element');

    const form = document.getElementById('payment-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'https://your-site.com/success', // Update with your success URL
            },
        });

        if (error) {
            console.error('Payment error:', error.message);
        } else {
            // Handle successful payment
        }
    });
});
