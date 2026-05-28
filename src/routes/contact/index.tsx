import { createFileRoute } from "@tanstack/react-router";
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
					</div>
				</section>
			</div>
		</div>
	);
}
