import React from 'react'
import "./Contact.css"
import {MdCall} from "react-icons/md"
import {BsFillChatDotsFill} from "react-icons/bs"


const Contact = () => {
    return (
        <>
            <section className='contact-wrapper'>
                <div className="contact-body">
                    <div className="left">
                        <span className='orange'>Our Contact</span>
                        <br />
                        <span className='blue'>Easy Way to Contact-us</span>
                        <br />

                        <span> We always ready to Helps by providing the best servies</span>
                        <div className="contact-ditiles">
                        <div className="call">
                       {<MdCall size={50} color='blue'/>}
                       <span>Call</span>

                        </div>
                        <div className="message">
                        <BsFillChatDotsFill size={50} color='blue'/>
                        <span>Message</span>
                        </div>


                        </div>
                        
                        <div className="btn">
                        <button>Chat</button>
                        
                        </div>
                    </div>
                    <div className="right">
                        <div className="contact-image">
                            <img src="./contact.jpg" alt="Contact" />

                        </div>

                    </div>


                </div>


            </section>
        </>
    )
}

export default Contact