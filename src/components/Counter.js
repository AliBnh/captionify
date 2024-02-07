import { useState, useEffect } from 'react';

export default function Counter() {
    const [transcriptionCount, setTranscriptionCount] = useState(0);
    useEffect(() => {
        const count = localStorage.getItem('transcriptionCount');
        setTranscriptionCount(count || 0);
      }, []);
    return(
        <>

            <span className='bg-black text-white sm:font-semibold  py-1 px-2 text-xs sm:text-base rounded-xl'>{transcriptionCount}/10</span>
        </>
    )}