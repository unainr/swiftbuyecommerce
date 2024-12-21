'use client'

import React from 'react'
import { Button } from './ui/button'
import { ShoppingCart } from 'lucide-react'
import { createStripeSession } from '@/serverActions';
import { urlFor } from '@/sanity/lib/image';
import { AddToBagProps } from './AddToBag';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';


const CheckOutNow = ({name, description, price, image, currency, id}: AddToBagProps) => {
    const { isSignedIn } = useAuth()
    const router = useRouter()
    const handleCheckout = async () => {
        if (!isSignedIn) {
            router.push('/sign-in')
            return
        }
        const cartItem = [{
            name,
            description,
            price,
            image: urlFor(image).url(),
            currency,
            id,
            quantity: 1
        }]
        
        const url = await createStripeSession(cartItem)
        window.location.href = url as any
    }

    return (
        <Button
            onClick={handleCheckout}
            className="whitespace-nowrap border-none text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow relative inline-flex h-10 items-center justify-center rounded-md border border-slate-800 bg-green-600 px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-green-700 overflow-hidden"
        >
            <span className="relative z-10 flex flex-row items-center">Buy Now</span>
            <span className="absolute inset-0 z-0 animate-shimmer bg-[linear-gradient(110deg,rgba(255,255,255,0.1),45%,rgba(255,255,255,0.3),55%,rgba(255,255,255,0.1))] bg-[length:200%_100%]"></span>
            <ShoppingCart className="w-5 h-5 ml-2" />
        </Button>
    )
}

export default CheckOutNow
