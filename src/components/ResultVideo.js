import Captionify from "@/components/Captionify";
import { useEffect, useState,useRef } from "react";
import {FFmpeg} from "@ffmpeg/ffmpeg";
import { toBlobURL,fetchFile } from "@ffmpeg/util";
import { transcriptionItemsToSrt } from "@/libs/awsTranscriptionHelpers";
import roboto from "./../fonts/Roboto-Regular.ttf";
import robotoBold from "./../fonts/Roboto-Bold.ttf";

export default function ResultVideo({filename, transcriptionItems}){
    const videoUrl = "https://captions-app.s3.amazonaws.com/"+filename;
    const [loaded, setLoaded] = useState(false);
    const [primaryColor, setPrimaryColor] = useState('#FFFFFF');
    const [outlineColor, setOutlineColor] = useState('#000000');
    const [progress, setProgress] = useState(1);
    const ffmpegRef = useRef(new FFmpeg());
    const videoRef = useRef(null);

    useEffect(()=>{
        videoRef.current.src = videoUrl;
        load();
    },[]);
    
    const load = async () => {
        const ffmpeg = ffmpegRef.current;
        const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd'
        await ffmpeg.load({
            coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
            wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
        });
        await ffmpeg.writeFile('/tmp/roboto.ttf', await fetchFile(roboto));
        await ffmpeg.writeFile('/tmp/roboto-bold.ttf', await fetchFile(robotoBold));
        setLoaded(true);
    }
    function toFFmpegColor(rgb) {
        const bgr = rgb.slice(5,7) + rgb.slice(3,5) + rgb.slice(1,3);
        return '&H' + bgr + '&';
      }    
    const transcode = async () => {
        const ffmpeg = ffmpegRef.current;
        const srt = transcriptionItemsToSrt(transcriptionItems);
        await ffmpeg.writeFile(filename, await fetchFile(videoUrl));
        await ffmpeg.writeFile('subs.srt', srt);
        videoRef.current.src = videoUrl;
        await new Promise((resolve, reject) => {
          videoRef.current.onloadedmetadata = resolve;
        });
        
        const duration = videoRef.current.duration;
        ffmpeg.on('log', ({ message }) => {
            const regexResult = /time=([0-9:.]+)/.exec(message);
            if (regexResult && regexResult?.[1]) {
              const howMuchIsDone = regexResult?.[1];
              const [hours,minutes,seconds] = howMuchIsDone.split(':');
              const doneTotalSeconds = hours * 3600 + minutes * 60 + seconds;
              const videoProgress = doneTotalSeconds / duration;
              setProgress(videoProgress);
            }
        });
        await ffmpeg.exec([
            '-i', filename,
            '-preset', 'ultrafast',
            '-vf', `subtitles=subs.srt:fontsdir=/tmp:force_style='
                Fontname=Roboto Bold,
                FontSize=30,
                MarginV=80,
                PrimaryColour=${toFFmpegColor(primaryColor)},
                OutlineColour=${toFFmpegColor(outlineColor)}'`,
                
            'output.mp4'
        ]);
        const data = await ffmpeg.readFile('output.mp4');
        videoRef.current.src =
            URL.createObjectURL(new Blob([data.buffer], {type: 'video/mp4'}));
            setProgress(1);
    }

    
    return(
        <>
        <div className="mb-4 text-center">
        <button 
            onClick={transcode}
            className=" py-2 px-6 bg-[#131313] border-[#FAFAFA] text-[#FAFAFA] hover:bg-[#FAFAFA]  hover:text-[#131313] rounded-full inline-flex gap-2 border-2 font-semibold cursor-pointer transition-all duration-200 ease-in-out hover:shadow-2xl hover:border-black">
            <span>Apply captions</span>
        </button>
        </div>
        {/* <div className="grid grid-cols-2 ">
          <div className="flex gap-2 ">
            <span> Primary color</span>
            <input 
                type="color"
                className="align-middle" 
                value={primaryColor}
                onChange={(e)=>setPrimaryColor(e.target.value)}
            />
          </div>
          <div className="flex gap-2 ">
            <span> Outline color</span>
          <input 
                type="color"
                className="align-middle" 
                value={outlineColor} 
                onChange={(e)=>setOutlineColor(e.target.value)}
            />
          </div>
        </div> */}

<div className="rounded-xl overflow-hidden relative flex justify-center">
        {progress && progress < 1 && (
          <div className="absolute inset-0 flex items-center">
            <div className="w-full text-center  flex justify-center">
              <div className="bg-black/70 mx-8 rounded-lg overflow-hidden relative w-48 text-black font-semibold">
                <div className="bg-bg-gradient-from h-8"
                     style={{width:progress * 100+'%'}}>
                  <h3 className="text-black text-xl absolute inset-0 py-1">
                    {parseInt(progress * 100)}%
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}
        <video 
            ref={videoRef}
            data-video={0}
            controls 
            className="w-auto  rounded-xl"

        >    
        </video>
    </div>
        </>
    )
}