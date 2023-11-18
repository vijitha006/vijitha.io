import './contact.css';

const Contact=()=>{
    return(
<section>
    <div>
<h1 className="heading1" id="contact">Contact Me</h1>
    </div>
    <div className="contact-form">
        <form className="form">
            <label>First Name</label>
            <input type="text" className="input-text" required></input>
            <label>Email id </label>
            <input type="email" className="input-text" required></input>
            <label>Your Meassage</label>
            <textarea className='textarea'></textarea>
            <div className='text-center mb-3'>
            <button type="submit" onClick={() => window.location = 'mailto:vijitha006@gmail.com'} >Submit</button>
            </div>
        </form>
    </div>
</section>
    )
}
export default Contact;