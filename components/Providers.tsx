'use client'
import React from 'react'
import { CartProvider } from 'use-shopping-cart'
const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <CartProvider
    mode="payment"
    cartMode="client-only"
    stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!}
    successUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/strip/success`}
    cancelUrl={`${process.env.NEXT_PUBLIC_BASE_URL}/strip/cancel`}
    currency="USD"
    billingAddressCollection={true}
    shouldPersist={true}
    language="en-US"


    >{children}</CartProvider>
  )
}

export default Providers