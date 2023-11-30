
import ChatArea from './Content/ChatArea'
import ChatHistoryNav from './NavBar/ChatHistoryNav'
import SideNav from './NavBar/SideNav'
import UpperNav from './NavBar/UpperNav'
function AllComponents() {
    return (
        <section>
            <UpperNav />
            <section className="bg-[#17151B] flex h-[87.9vh] pb-[0.1rem]">
                <SideNav />
                <ChatArea />
                <ChatHistoryNav />
            </section>
        </section>
    )
}

export default AllComponents