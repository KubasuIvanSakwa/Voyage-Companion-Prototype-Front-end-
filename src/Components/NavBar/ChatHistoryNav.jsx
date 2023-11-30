import ChatHistorytab from './ChatHistorytab'
import NewChattab from './NewChattab'

function ChatHistoryNav() {
    return (
        <section className="bg-[#17151B] border-l border-[#2d2a31] w-[20rem] overflow-hidden">
            <NewChattab /> 
            <ChatHistorytab />
        </section>
    )
}

export default ChatHistoryNav