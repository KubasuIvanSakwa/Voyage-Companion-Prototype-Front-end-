import newChat from '../../assets/add.svg'

function NewChattab() {
    return (
        <section className="flex p-2 items-center  w-[90%] rounded-lg mt-3 ml-3 bg-slate-400/30 cursor-pointer">
            <img src={newChat} className="w-8 opacity-60 bg-slate-900/30 rounded-full"/>
            <p className="text-lg ml-3 text-white/60">New Chat</p>
        </section>
    )
}

export default NewChattab