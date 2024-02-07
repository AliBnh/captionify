
'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Counter from "@/components/Counter";
export default function Nav(){
    const [isPaidUser, setIsPaidUser] = useState(false);

    useEffect(() => {
      const hasPaid = localStorage.getItem('paidUser') === 'true';
      setIsPaidUser(hasPaid);
    }, []);
    const renderPlanStatus = () => {
      if (isPaidUser) {
        return <span className="text-yellow-500 font-bold">Premium</span>;
      } else {
        return <span className="text-gray-500 font-bold" >Free</span>;
      }
    };
return(
    <div className="flex items-center gap-1  sm:gap-6 text-sm sm:text-base  ">
    <Link href="/" className=' font-semibold hover:shadow-md rounded-full px-2 hover:bg-[#131313] hover:text-white'>Home</Link>
    <Link href="/pricing" className='  font-semibold hover:shadow-md rounded-full px-2 hover:bg-[#131313] hover:text-white'>Pricing</Link>
    <Link href="/contact" className='  font-semibold hover:shadow-md rounded-full px-2 hover:bg-[#131313] hover:text-white'>Contact</Link>
    <div className='flex sm:flex-row sm:gap-2 gap-0 flex-col items-center align-middle justify-center'>
    {renderPlanStatus()}
    {!isPaidUser && <Counter/>}
    </div>
  </div>
)
}