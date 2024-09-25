import React,{useRef} from 'react';
import emailjs from '@emailjs/browser';
import './Join.css';


const Join = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_gym(lift&press)', 'template_gym(lift&press)', form.current, 'H_yBkR5lEt_dSXmy7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const routeChange = () =>{ 
        let path = 'https://mail.google.com'; 
        window.location.href = path;
    };

  return (
    <div className='join-us' id='join-us'>
        <div className='left-j'>
            <div></div>
            <div>
                <span className='stroke-text'>READY TO </span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY </span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className='right-j'>
            <form ref={form} onSubmit={sendEmail} className='email-container'>
                <input type='email' name='user_email' placeholder='Enter your Email Address' />
                <button onClick={routeChange} className='btn btn-j'>JOIN</button>
            </form>
        </div>
    </div>
  )
}

export default Join