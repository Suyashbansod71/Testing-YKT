import React, {useState} from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import "./contactus.scss"

const ContactUs = () => {

    
  const [activeTab, setActiveTab] = useState('contact');

  return (
    <div>
   <Header activeTab={activeTab}/>
 
      <h1>Contact Us</h1>
       <div className="contact-container">
      <div className="info-container">
      
        <p>
        Whether you're a seasoned practitioner or a curious beginner, yoga unfolds as a journey where each 
        breath carries you closer to your true self. Join this ancient practice, embark on a voyage of 
        self-discovery, and let the essence of yoga illuminate your path to a balanced and fulfilling life. Namaste.
        </p>
    
          <div className='con'> Email Address: yogawithkavitatripathi@gmail.com</div>
          <div className='con'>Phone No: +91-8953279337</div>
          <div className='con'>Address:Other offices - A207, Ganga Aria, Near Bharat Dhabha, Dhanori, Pune, Maharashtra 411015</div>
      

     {/* WhatsApp button with logo */}
     <a href="https://wa.me/918953279337" class="whatsapp-button" target="_blank">
  <div class="whatsapp-icon-container">
    <i class="fa fa-whatsapp whatsapp-icon" style={{ fontSize: '1.8em', color: '#15eb80' }}></i>
    <img src='./whatsappLogo.png' alt='WhatsApp Logo' ></img>
    <span class="chat-text">Chat with us</span>
  </div>
</a>
      </div>

      <div className="form-container">
        <img src='./class-yoga6u.jpg' alt=''></img>
      
          <a href="https://forms.gle/XPYBtXvA22TXvigV8" target="_blank" rel="noopener noreferrer" className='contact-button'>
          BOOK NOW
        </a>
      </div>


    </div>
      <Footer/>
      </div>
  )
}

export default ContactUs