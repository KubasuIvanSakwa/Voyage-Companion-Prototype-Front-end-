
function Reply({ userChat }) {
    const { textArea: userChatContent } = userChat

    return (
        <>
        {
            userChatContent && (

                <div className="relative border border-[#2d2a31]  rounded-lg w-[88%] h-fit p-2 ml-[4rem] mt-6 bg-black/20"> 
                    <div className="absolute top-[-0.6rem] left-4  bg-purple-500 p-1 rounded-full w-[4rem] flex justify-center items-center text-slate-300 text-bold text-[0.7rem] h-5">
                        YOU
                    </div>

                    <div className="w-fit h-fit p-2 text-slate-300">
                        {userChatContent}
                    </div>
                </div>
        )
        }
        
        <div className="relative border border-[#2d2a31]  rounded-lg w-[88%] h-fit p-2 ml-[4rem] mt-6"> 
            <div className="absolute top-[-0.6rem] left-4 bg-slate-500 p-1 rounded-full w-[4rem] flex justify-center items-center text-slate-300 text-bold text-[0.7rem] h-5">
                BOT
            </div>
            <div className="w-fit h-fit p-2 text-slate-300">
                Answer
            </div>
        </div>
        </>
    )
}

export default Reply