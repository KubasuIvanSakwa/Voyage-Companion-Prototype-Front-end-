
import ChatArea from './Content/ChatArea'
import ChatHistoryNav from './NavBar/ChatHistoryNav'
import SideNav from './NavBar/SideNav'
import UpperNav from './NavBar/UpperNav'
function AllComponents() {
    return (
        <section>
            <UpperNav />
            <SideNav />
            <ChatHistoryNav />
            <ChatArea />
        </section>
    )
}

export default AllComponents