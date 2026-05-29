import { createFileRoute, Link } from "@tanstack/react-router";
import Nav from "#/components/Nav.tsx";
import Transition from "#/components/Transition.tsx";

export const Route = createFileRoute("/contact/")({
	component: ContactPage,
});

function ContactPage() {
	return (
		<div>
			<Transition />

			<div className="page home-page">
				<Nav toggleOption={false} />

				<section className="contact trail-container">
					<div className="floating-elements"></div>

					<div className="contact-left">
						<div className="contact-card-header-main">
							<h1>Let's Connect</h1>
							<p>
								Got a community task? Need a excellent communicator? Or just
								want to geek out over leadership and collaboration? I'm all in.
								Drop me a line, and let's revolutionalize the world together.
							</p>
						</div>
						<div className="contact-info">
							<div className="contact-info-item">
								<p className="label">Work Inquiries</p>
								<p>
									<Link to="/" target="_blank">
										rpa@gmail.com
									</Link>
								</p>
							</div>

							<div className="contact-info-item">
								<p className="label">Quick Chat</p>
								<p>
									<Link to="/" target="_blank">
										@rpa
									</Link>
								</p>
							</div>
						</div>
					</div>

					<div className="contact-form-container">
						<div className="form-header">
							<h2>Start a Discussion</h2>
							<p>Tell me about your vision and let's make it reality</p>
						</div>
						<form className="contact-form" id="contactForm">
							<div className="form-row">
								<div className="form-group">
									<input
										type="text"
										name="firstName"
										id="firstName"
										placeholder="Your first name"
										required
									/>
									<label htmlFor="firstName">First Name</label>
								</div>
								<div className="form-group">
									<input
										type="text"
										name="lastName"
										id="lastName"
										placeholder="Your last name"
										required
									/>
									<label htmlFor="lastName">Last Name</label>
								</div>
							</div>
							<div className="form-row">
								<div className="form-group">
									<input
										type="text"
										name="email"
										id="email"
										placeholder="your@gmail.com"
										required
									/>
									<label htmlFor="email">Email Address</label>
								</div>
								<div className="form-group">
									<input
										type="tel"
										name="phone"
										id="phone"
										placeholder="9800000000"
										required
									/>
									<label htmlFor="phone">Phone Number</label>
								</div>
							</div>
							<div className="form-group full-width">
								<select name="projectType" id="projectType" required>
									<option value="">Select Project Type</option>
									<option value="communication">Communication</option>
									<option value="leadership">Leadership</option>
									<option value="other">Other</option>
								</select>
								<label htmlFor="projectType">Project Type</label>
							</div>
							<div className="form-group full-width">
								<textarea name="message" id="message" placeholder="Tell me about your projects, idea, and vision" required></textarea>
								<label htmlFor="message">Project Details</label>
							</div>
							<button type="submit" className="submit-btn">
								Send Message
							</button>
							<div className="success-message" id="successMessage">
								<p>Thanks! Your message has been sent. I'll get back to you soon</p>
							</div>
						</form>
					</div>
				</section>
			</div>
		</div>
	);
}
