export default function TranscriptionItem({
    item,
    handleStartTimeChange,
    handleEndTimeChange,
    handleContentChange,

}){
    if(!item) return '';

    return (
        <div className="my-1 grid grid-cols-3 gap-1 items-center">
            <input 
                type="text" 
                value={item.start_time} 
                onChange={handleStartTimeChange}
                className="  text-center text-black  rounded-md  "
                style={{
                    background: "rgba(255, 255, 255, 1)",
                    borderRadius: "16px",
                    boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 1)",
                    
                }}
            />
            <input 
                type="text" 
                value={item.end_time} 
                onChange={handleEndTimeChange}
                className="  text-center text-black  rounded-md  "
                style={{
                    background: "rgba(255, 255, 255, 1)",
                    borderRadius: "16px",
                    boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 1)",
                    
                }}            
            />
            <input 
                type="text" 
                value={item.content} 
                onChange={handleContentChange}
                className="  text-center text-black  rounded-md  "
                style={{
                    background: "rgba(255, 255, 255, 1)",
                    borderRadius: "16px",
                    boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 1)",
                    
                }}            
            />

        </div>
    )

}