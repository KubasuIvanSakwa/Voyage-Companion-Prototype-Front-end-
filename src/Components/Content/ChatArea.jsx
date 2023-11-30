
import Reply from './Reply';
import Textbox from './Textbox';
function ChatArea() {
    return (
        <section className="w-[54rem] overflow-hidden p-1"> 
            <section className="content-area h-full overflow-auto relative bg-[#17151B]">
                <Reply />
                <Textbox />
            </section>
        </section>
    )
}

export default ChatArea