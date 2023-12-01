import ChatHistorytab from './ChatHistorytab'
import NewChattab from './NewChattab'

function ChatHistoryNav() {
    return (
        <section className="bg-[#17151B] border-l border-[#2d2a31] w-[20rem] overflow-hidden">
            <NewChattab /> 
            <hr className="mt-3 mb-3 border-[#2d2a31]"/>
            <ChatHistorytab />
        </section>
    )
}

export default ChatHistoryNav