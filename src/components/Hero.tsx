import { Link } from "@tanstack/react-router";

function Hero() {
	return (
		<section className="hero">
			<header className="hero-header-wrapper">
				<div className="hero-header hero-header-1">
					<h1>Ram</h1>
				</div>
				<div className="hero-header hero-header-2">
					<h1>Prasad</h1>
				</div>
			</header>
			<ul className="hero-footer">
				<li className="hero-footer-symbols">
					<img src="" alt="" />
				</li>
				<li className="hero-footer-scroll-down">
					<p className="menu">
						<Link to="/" target="_blank" className="resume-link">
							Get {"//"} Resume
						</Link>
					</p>
				</li>
				<li className="hero-footer-tags">
					<p className="menu">Light Mode: ON</p>
				</li>
			</ul>
		</section>
	);
}

export default Hero;
