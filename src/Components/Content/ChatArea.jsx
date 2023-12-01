import { useState } from 'react'
import Reply from './Reply';
import Textbox from './Textbox';

function ChatArea() {
    const [userText, setUserText] = useState(
        {
            textArea: ''
        }
    )

    function handleUserText(e) {
        const { name, value } = e.target
        setUserText({
            ...userText,
            [name]: value
        })
    }

    function handleClick(e) {
        const textArea =  document.querySelector('textarea')
        if (e) {
            e.preventDefault()
        }

        textArea.value = ''
    }
    


    return (
        <section className="w-[54rem] overflow-hidden p-1"> 
            <section className="content-area h-full overflow-auto relative bg-[#17151B]">
                <Reply userChat={userText}/> 
                <Textbox userText={userText} handleUserText={handleUserText} handleClick={handleClick}/>
            </section>
        </section>
    )
}

export default ChatArea