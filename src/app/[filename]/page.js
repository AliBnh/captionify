'use client'
import { useEffect,useState } from "react";
import axios from "axios";
import { clearTranscriptionItems } from "../../libs/awsTranscriptionHelpers";
import ResultVideo from "@/components/ResultVideo";
import TranscriptionEditor from "@/components/TranscriptionEditor";
export default function FilePage({params}){
    const filename = params.filename;
    const [isTranscribing, setIsTranscribing] = useState(false);
    const [awsTransriptionItems, setAwsTranscriptionItems] = useState([]);
    const [isFetchingInfo, setIsFetchingInfo] = useState(false);
    useEffect(()=>{
        getTranscription();
    },[filename]);

    function getTranscription(){
        setIsFetchingInfo(true);
        axios.get('/api/transcribe?filename='+filename).then((response)=>{
            setIsFetchingInfo(false);
            const status = response.data?.status;
            const transcription = response.data?.transcription;
            if(status === "IN_PROGRESS"){
                setIsTranscribing(true);
                setTimeout(getTranscription, 1000);
            }else{
                setIsTranscribing(false);
                
                setAwsTranscriptionItems(clearTranscriptionItems(transcription.results.items));
            }
        });}
    
    if(isTranscribing){
        return (
            <div className="">
                <h2  className="text-4xl mb-8 mt-16 text-center">We are transcribing your video</h2>
                <h3 className="text-xl text-center">Please wait</h3>
            </div>
        )
    }
    if(isFetchingInfo){
        return (
            <div>
                <h2  className="text-4xl mb-8 mt-16 text-center">We are fetching the transcription</h2>
                <h3 className="text-xl text-center">Please wait</h3>            
            </div>
        )
    }

    return (
        <div className="mt-20 md:mx-0 mx-6">
            <div className="grid sm:grid-cols-2 gap-8 sm:gap-16 sm:justify-items-end justify-center">
                <div className="">
                    <h2 className="text-2xl mb-4 font-bold text-center"></h2>
                    <TranscriptionEditor  
                    awsTransriptionItems={awsTransriptionItems} 
                    setAwsTranscriptionItems={setAwsTranscriptionItems}/>
                </div>
                <div className="">
                    <ResultVideo filename={filename} transcriptionItems={awsTransriptionItems}/>
                </div>
                
            </div>
            
        </div>
    )
}