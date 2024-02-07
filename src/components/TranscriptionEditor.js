import TranscriptionItem from "@/components/TranscriptionItem";

export default function TranscriptionEditor({awsTransriptionItems,setAwsTranscriptionItems}){
    function updateTranscriptionItem(index,prop,e){
        const newAwsItems = [...awsTransriptionItems];
        const newItem = {...newAwsItems[index]};
        newItem[prop] = e.target.value;
        newAwsItems[index] = newItem;
        setAwsTranscriptionItems(newAwsItems);
    }

    
    return (
        <div className="">
            <div className="grid grid-cols-3 gap-1  text-black sticky top-0 p-2 rounded-md font-bold"
            style={{
                background: "rgba(255, 255, 255, 1)",
                borderRadius: "16px",
                boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 1)",
                marginRight: "1rem",
            }}
            >        
                        <div className="text-center ">Start</div>
                        <div className="text-center ">End</div>
                        <div className="text-center">Content</div>
                    </div>
                    {awsTransriptionItems.length>0 && (
                        <div className="
                            sm:h-[480px]
                            h-64
                            overflow-scroll 
                            overflow-x-hidden
                            
                        ">
                            {awsTransriptionItems.map((item,key)=>(
                            <div key={key}>
                                <TranscriptionItem 
                                    item={item}
                                    handleStartTimeChange={(e)=>updateTranscriptionItem(key,'start_time',e)}
                                    handleEndTimeChange={(e)=>updateTranscriptionItem(key,'end_time',e)}
                                    handleContentChange={(e)=>updateTranscriptionItem(key,'content',e)}
                                />
                            </div>
                        ))}
                    </div>
                    )}
        </div>
    )
}