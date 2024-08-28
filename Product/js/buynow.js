// Initialize Stripe with your public key
const stripe = Stripe('pk_live_51PsRsLH5TV7FZcwUA7OcStM8fSCg17wjdfEOFQxA4A8dkdJns2PUyySZyZ3K0ArmEfKuHVb7Ss47vJglgEq6l0b700zwnli2X0');

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

// Function to setup Stripe Elements
async function setupStripe() {
    try {
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: 1000 }) // Example amount
        });
        
        const { clientSecret } = await response.json();
        
        const elements = stripe.elements({ clientSecret, appearance });
        const paymentElement = elements.create('payment', options);
        paymentElement.mount('#payment-element');
    } catch (error) {
        console.error('Error setting up Stripe:', error);
    }
}

setupStripe();

// Handle payment submission
const form = document.getElementById('payment-form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: 'https://the-mad-hatters-playground.netlify.app/success', // Update with your success URL
            },
        });

        if (error) {
            // Show error message to your customer
            console.log(error.message);
        } else {
            // Redirect or show success message
        }
    } catch (error) {
        console.error('Error confirming payment:', error);
    }
});
