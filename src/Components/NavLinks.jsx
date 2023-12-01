
function NavLinks({image, title, active }) {
    return (
        <div className={`${active} flex w-full p-2 items-center cursor-pointer hover:bg-slate-400/10`}>
            <img src={image} className="w-6 opacity-60 ml-3 mr-4"/>
            <h5 className="text-sm ml-[-0.4rem] font-bold text-slate-400/70">{title}</h5>
        </div>
    )
}

export default NavLinks