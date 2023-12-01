import home from '../../assets/home.svg'
import group from '../../assets/group.svg'
import user from '../../assets/user.svg'
import chat from '../../assets/chat.svg'
import pricing from '../../assets/pricing.svg'
import faq from '../../assets/faq.svg'
import logOut from '../../assets/log-out.svg'
import NavLinks from '../NavLinks'


function SideNav() {

    const links = [
        {id: 1, image: `${home}`, title: 'Home'},
        {id: 2, image: `${group}`, title: 'Community Feed'},
        {id: 3, image: `${user}`, title: 'Personal Feed'}
        
    ]


    const supprtLinks = [
        {id: 1, image: `${pricing}`, title: 'Pricing'},
        {id: 2, image: `${faq}`, title: 'FAQ & Help'},
        {id: 3, image: `${logOut}`, title: 'Log Out'}
        
    ]


    return (
        <section className="bg-[#17151B] border-r border-[#2d2a31] w-[12rem] overflow-hidden">
            <section>
                <h4 className="p-3 mt-4 text-lg text-white/50">Start here</h4>
                {links.map(item => (
                    <NavLinks key={item.id} image={item.image} title={item.title} />
                ))}
                
            </section>
            <section>
                <h4 className="p-3 mt-4 text-lg text-white/50">User Tools</h4>
                <NavLinks image={chat} title="AI Chat Bot" active={'bg-slate-400/10'}/>
            </section>
            <section>
                <h4 className="p-3 mt-4 text-lg text-white/50">Support</h4>
                {supprtLinks.map(item => (
                    <NavLinks key={item.id} image={item.image} title={item.title} />
                ))}
            </section>

        </section>
    )
}

export default SideNav