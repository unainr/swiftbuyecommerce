"use server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15" as any,
});

export async function createStripeSession(cartItems: any) {
  if (!cartItems || cartItems.length === 0) {
    throw new Error("Cart is empty");
  }

  try {
    const line_items = cartItems.map((item: any) => ({
      price_data: {
        currency: "USD",
        product_data: {
          name: item.name,
          description: item.description,
          images: [item.image],
        },
        unit_amount: item.price * 100, // Amount in cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/strip/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/strip/cancel`,
    });

    return session.url;
  } catch (error: any) {
    console.error("Stripe session creation error:", error.message);
    throw new Error(error.message);
  }
}
