import { Link } from "@tanstack/react-router";

function Contact() {
	return (
        <section className="contact-cta">
            <div className="contact-button">
                <Link to="/"></Link> 
                <div className="contact-text-small">
                    <p>Let's Collaborate together</p>
                </div>
                <div className="contact-text-large">
                    <h1>Get in touch</h1>
                </div>
            </div>
        </section>
    )
}

export default Contact;
