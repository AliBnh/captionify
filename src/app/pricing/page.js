'use client'
import { loadStripe,redirectToCheckout } from "@stripe/stripe-js";
import axios from "axios";
export default function PricingPage(){
    const makePayment = async (event)=>{
        event.preventDefault();
        localStorage.setItem('paidUser', 'true');
        const stripe = await loadStripe("pk_test_51OhG8vCDQGH9qTAvkSiyDatoWgaTxAPlcjx68bV8PAZKpRIodjZ89tMUfjQWrlMCgGoYnFhNPL0ltnRVGm8FhIZ000zL7ZNX04");
        const body = {
            amount: 29
                }
        const headers = {
            'Content-Type': 'application/json'
        }
        const response = await fetch('/api/payment', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)

        });
        //del 2lines

        const session = await response.json();

        const result = await stripe.redirectToCheckout({
            sessionId: session.id
        });

        
    }
    const hasPaid = localStorage.getItem('paidUser') === 'true';
    return (
        <div >
            <section class="flex items-center justify-center mt-10 pb-10">
    <div class="p-4 sm:px-10 flex flex-col justify-center items-center text-base h-100vh mx-auto" id="pricing">
        <h3 class="text-4xl font-semibold text-center flex gap-2 justify-center mb-10">Select Your Plan and Get Started</h3>
        <div class="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="ring-1 ring-gray-200 rounded-3xl p-8 xl:p-10">
                <div class="flex items-center justify-between gap-x-4">
                    <h3 id="tier-standard" class="text-gray-900 text-2xl font-semibold leading-8">Standard</h3>
                </div>
                <p class="mt-4 text-base leading-6 text-gray-600">Ideal for: Casual users & small businesses</p>
                <p class="mt-6 flex items-baseline gap-x-1">
                    <span class="line-through text-2xl font-sans text-gray-500/70"></span><span
                        class="text-5xl font-bold tracking-tight text-gray-900">Free</span>
                </p>
                <a href="/"
                    aria-describedby="tier-standard"
                    class="text-blue-600 ring-1 ring-inset ring-blue-400 hover:ring-blue-600 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    target="">Get started for free</a>
                <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                    <li class="flex gap-x-3 text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-5 flex-none text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg> Up to 10 videos per month
                    </li>
                    <li class="flex gap-x-3 text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-5 flex-none text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>Export up to 720p resolution
                    </li>
                    <li class="flex gap-x-3 text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-5 flex-none text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>Basic caption customization options
                    </li>
                </ul>
            </div>
            <div class="ring-2 ring-blue-600 rounded-3xl p-8 xl:p-10">
                <div class="flex items-center justify-between gap-x-4">
                    <h3 id="tier-extended" class="text-blue-600 text-2xl font-semibold leading-8">Premium</h3>
                    <p class="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">
                        Most popular</p>
                </div>
                <p class="mt-4 text-base leading-6 text-gray-600">Ideal for: Businesses & content creators</p>
                <p class="mt-6 flex items-baseline gap-x-1">
                    <span class="line-through text-2xl font-sans text-gray-500/70">$39</span><span
                        class="text-5xl font-bold tracking-tight text-gray-900">$29</span>
                </p>
                <button href="" onClick={makePayment}
                    aria-describedby="tier-extended"
                    class="bg-blue-600 text-white shadow-sm hover:bg-blue-500 mt-6 block rounded-md py-2 sm:px-28 px-20 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    target="_blank">Buy now</button>
                <ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10">
                    <li class="flex gap-x-3 text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-5 flex-none text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg> Unlimited videos per month
                    </li>
                    <li class="flex gap-x-3 text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" aria-hidden="true" class="h-6 w-5 flex-none text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>Export up to 4k resolution
                    </li>
                    <li class="flex gap-x-3 text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                            class="h-6 w-5 flex-none text-blue-600">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>Advanced caption customization options
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
        </div>
    );
}