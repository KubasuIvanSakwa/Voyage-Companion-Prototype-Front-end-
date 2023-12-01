import logo from '../../assets/logo.png'
import minimize from '../../assets/lessThan.svg'
import search from '../../assets/search.svg'
import notifications from '../../assets/notifications.svg'
import lightMode from '../../assets/lightmode.svg'
import preview from '../../assets/preview.jpeg'

function UpperNav() {


    return (
        <section className="bg-[#17151B] border-b border-[#2d2a31] h-[5rem] flex justify-between"> 
            <div className="w-[14%] border-r border-[#2d2a31] flex relative">
                <img src={logo} className="w-[6rem]"/>
                <img src={minimize} className="w-[1.4rem] opacity-10 hover:opacity-40 cursor-pointer relative right-[-4rem]"/>
            </div>

            <div className="w-[27%] flex justify-center items-center gap-3">
                <div className="w-10  p-2 h-10 rounded-full bg-slate-300/20 hover:bg-slate-300/30 cursor-pointer flex items-center justify-center">
                    <img src={search} className="w-5"/>
                </div>

                <div className="w-10  p-2 h-10 relative rounded-full bg-slate-300/20 hover:bg-slate-300/30 cursor-pointer flex items-center justify-center">
                    <img src={notifications} className="w-9"/>
                    <div className="bg-red-600 w-2 h-2 absolute top-[0.6rem] right-[0.7rem] rounded-full">

                    </div>
                </div>

                <div className="w-10 p-2 h-10 rounded-full bg-slate-300/20 hover:bg-slate-300/30 cursor-pointer flex items-center justify-center">
                    <img src={lightMode} className="w-9"/>
                </div>

                <div className="w-[3.5rem] border-2 border-[#6AF7D5] p-2 h-[3.5rem] rounded-lg relative right-[-4rem] bg-[url('/src/assets/preview.jpeg')] bg-cover">
        
                </div>
            </div>
        </section>
    )
}

export default UpperNav