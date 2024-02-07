'use client';
import UploadIcon from "@/components/UploadIcon";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function(){
    const [isUploading, setIsUploading] = useState(false);
    const router = useRouter();

    async function upload(e){
        e.preventDefault();
        if(localStorage.getItem('paidUser')==='false' && localStorage.getItem('transcriptionCount') < 10){
            let count = localStorage.getItem('transcriptionCount'); 
            if (!count) {
                count = 0;
            }
        count++;
        localStorage.setItem('transcriptionCount', count);
        }else if(count >= 10){
            alert('You have reached the limit of 10 transcriptions. Please upgrade to a paid account to continue');
            return;
        }

        const files = e.target.files;
        if(files.length > 0) {
            const file = files[0];
            setIsUploading(true);
            const res  = await axios.postForm('/api/upload', {
                file,
            });
            setIsUploading(false);
            const newName = res.data.newName;
            router.push(`/${newName}`);
        }
      }
    return(
        <>
        {isUploading &&(
            <div className="bg-black/95 text-white fixed inset-0 flex items-center font-bold">
                <div className="w-full text-center">
                    <h2 className="text-4xl mb-8">
                        It's uploading
                    </h2>
                    <h3 className="text-xl">
                        Please wait 
                    </h3>
                </div>
            </div>

        )}
        <label 
        className=" py-2 px-6 bg-[#131313] border-[#FAFAFA] text-[#FAFAFA] hover:bg-[#FAFAFA]  hover:text-[#131313] rounded-full inline-flex gap-2 border-2 font-semibold cursor-pointer transition-all duration-200 ease-in-out hover:shadow-2xl hover:border-black">
        <UploadIcon/>
        <span >
          Choose file
        </span>
        <input onChange={upload} type="file" className="hidden" />
      </label>
        </>

    )
}