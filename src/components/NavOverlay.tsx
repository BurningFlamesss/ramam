import { Link } from "@tanstack/react-router";

function NavOverlay() {
	return (
		<div className="nav-overlay">
			<ul className="nav-items">
				<li className="nav-item active">
					<p>
						<Link to="/">Home</Link>
					</p>
				</li>
				<li className="nav-item">
					<p>
						<Link to="/">Contact</Link>
					</p>
				</li>
			</ul>

			<ul className="nav-footer">
				<li className="nav-footer-item">
					<div className="nav-footer-item-header">
						<p className="menu">Find Me</p>
					</div>
					<div className="nav-footer-item-links">
						<p className="menu">
							<Link to="/" target="_blank">
								Facebook
							</Link>
						</p>
					</div>
				</li>
				<li className="nav-footer-item">
					<div className="nav-footer-item-links">
						<p className="menu"></p>
					</div>
				</li>
				<li className="nav-footer-item">
					<div className="nav-footer item-header">
						<p className="menu">Get in Touch</p>
					</div>
					<div className="nav-footer-item-links">
						<p className="menu">
							<Link to="/" target="_blank">
								rpa@gmail.com
							</Link>
						</p>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default NavOverlay;
