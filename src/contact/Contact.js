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
            <input type="text" className="input-text"></input>
            <label>Last Name</label>
            <input type="text" className="input-text"></input>
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