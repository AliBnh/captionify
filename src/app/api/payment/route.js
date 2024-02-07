const stripe = require('stripe')("sk_test_51OhG8vCDQGH9qTAvml4xFFTcLfwDqt5IKjqLHKArtniKB37iRpjfJCk8K9KPltHJegFKitfWqhCUnhYZDQ6WIrZk00nNaJLfRo");
export  async function POST(req){
    const amount = 29*100;

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Subscription to Premium Plan',
                    },
                    unit_amount: amount,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/',
        cancel_url: 'http://localhost:3000/pricing',
    });
      return Response.json({id: session.id});
}