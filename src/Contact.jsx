import React from 'react'
import "./Contact.css"
import logo from "./assets/logo.jpg"
import service from "./assets/pic.png"



function Contact() {
  return (
    <>
    <nav className='navbar'>
        <img src={logo} alt="" />
    </nav>
    <section className='contact-head'>
        <div className="con-main">
        <div className='con-t'>
        <h1 >Contact  US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eligendi ad a ducimus mollitia fugit repellat in ut sit alias! Temporibus, aspernatur fugit. Aut facilis voluptates recusandae ipsum sunt maiores.</p>
        </div>
        <div className="form-image">
            <div className="form">
            
                <div className='btns'>
                <button className='btn-1'> <i class="fa-solid fa-message"></i> Via support chat</button>
                <button className='btn-2'> <i class="fa-solid fa-phone"></i>via call</button>
                </div>
                <button className='btn-3'> <i class="fa-solid fa-message"></i> via email form</button>
                <input type="text" placeholder='NAME' className='inp-1' />
                <input type="text" placeholder='E-mail' className='inp-2'/>
                <textarea name="" id="" placeholder='Message' minLength={30}></textarea>
                <button className='sub'>submit</button>
            </div>
            <div className="image">
                <img src={service} alt="" />
            </div>
        </div>
        </div>
    </section>
    
    </>
  )
}

export default Contact