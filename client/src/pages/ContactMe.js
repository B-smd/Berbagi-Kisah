import React from 'react';

const ContactMe = () => {
    return (
        <form className='contactme text-light'>
            <div className="form-group">
                <label for="nameinput">Name</label>
                <input type="text" className="form-control" id="nameinput" placeholder="name"/>
            </div>
            <div className="form-group">
                <label for="emailInput">Email address</label>
                <input type="email" className="form-control" id="emailInput" placeholder="name@example.com"/>
            </div>
            <div className="form-group">
            <label for="message">Message</label>
            <textarea className="form-control" id="comments" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            <a href="mailto:djaja@iinet.net.au?subject=message"><img src="https://img.icons8.com/fluent/48/000000/mail--v1.png" alt="Mail" className="icon" width={"56"}/></a>
            <a href="tel: +61 413 406 968"><img src="https://img.icons8.com/fluent/48/000000/mobile--v1.png" alt="Mobile" className="icon" width={"56"}/></a>

        </form>
    )
}

export default ContactMe