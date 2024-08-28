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
// You would get this clientSecret from your server
const elements = stripe.elements({ clientSecret, appearance });
const paymentElement = elements.create('payment', options);
paymentElement.mount('#payment-element');

// Handle payment submission
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
        // Show error message to your customer
        console.log(error.message);
    } else {
        // Redirect or show success message
    }
});
