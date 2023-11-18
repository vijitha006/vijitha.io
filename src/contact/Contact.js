import { useState } from 'react';
import './contact.css';

const Contact=()=>{
    const [firstName, setFirstName]=useState("");
    const [email, setEmail]=useState("");
    const [error, setError]=useState(false);
   const submitForm=(e)=>{
    e.preventDefault();
    if(firstName.length==0 || email.length==0)
    {
        setError(true)
    }
    if(firstName && email)
    {
        console.log(firstName,email)
        window.location = 'mailto:vijitha006@gmail.com';

    }
        
    }
    
    return(
<section>
    <div>
<h1 className="heading1" id="contact">Contact Me</h1>
    </div>
    <div className="contact-form">
        <form className="form" onSubmit={submitForm}>
            <div>
            <label>First Name <span className='asterik'>*</span></label>
            <input type="text" className="input-text" onChange={e=>setFirstName(e.target.value)}></input>
           {error && firstName.length <=0 ? <label className='error'>Please Enter First name</label> : ""}
            </div>
            <div>
            <label>Email id <span className='asterik'>*</span></label>
            <input type="email" className="input-text" onChange={e=>setEmail(e.target.value)}></input>
            {error && email.length <=0 ? <label className='error'>Please Enter Your maid id</label> : ""}
            </div>
            <label>Your Meassage</label>
            <textarea className='textarea'></textarea>
            <div className='text-center mb-3'>
            <button type="submit" >Submit</button>
            </div>
        </form>
    </div>
</section>
    )
}
export default Contact;