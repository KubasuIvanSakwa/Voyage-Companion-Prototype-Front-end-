import send from '../../assets/send.svg'

function Textbox() {
    return (
        <section className="flex fixed w-[45rem] ml-[4rem] h-[5rem] bottom-2 items-center border border-[#2d2a31] rounded-xl"> 
            <textarea
                placeholder="Good morning ..."
                className="resize-none w-[91%] h-[4rem] overflow-hidden p-2 rounded-lg bg-[#17151B]  outline-none text-white font-bold text-lg caret-slate-400 caret-bold"
            >

            </textarea>
            <div className="bg-[#2d2a31] absolute z-20 right-1 p-2 rounded-xl cursor-pointer hover:bg-[#3f3c42]">
                <img src={send} className="w-[3rem] opacity-50"/>
            </div>
        </section>
    )
}

export default Textbox