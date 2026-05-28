import { Link } from "@tanstack/react-router";

function Footer() {
	return (
		<footer>
			<ul className="footer-container">
				<li className="footer-symbols footer-symbols-1">
					<img src="/logo512.png" alt="" />
					<img src="/logo512.png" alt="" />
				</li>
				<li className="footer-symbols footer-symbols-2">
					<img src="/logo512.png" alt="" />
					<img src="/logo512.png" alt="" />
				</li>
				<h1 className="footer-header">Ram Prasad</h1>
				<ul className="footer-row">
					<li className="footer-col">
						<p>Explore</p>
						<p>
							<Link to="/">Home</Link>
						</p>
						<p>
							<Link to="/">Contact</Link>
						</p>
					</li>
					<li className="footer-col">
						<p>Certificates</p>
						<p>
							<Link to="/" target="_blank">
								BOD
							</Link>
						</p>
					</li>
					<li className="footer-col">
						<p>Connect</p>
						<p>
							<Link to="/" target="_blank">
								Facebook
							</Link>
						</p>
					</li>
					<li className="footer-col">
						<p>Extra</p>
						<p>
							<Link to="/" target="_blank">
								Resume
							</Link>
						</p>
					</li>
				</ul>
				<li className="copyright-info">
					<p className="menu">
						&copy; - RPA {"//"} {new Date().getFullYear()}
					</p>
					<p className="menu"></p>
				</li>
				<li className="explosion-container"></li>
			</ul>
		</footer>
	);
}

export default Footer;
