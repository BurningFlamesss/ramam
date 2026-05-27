import { Link } from "@tanstack/react-router";

function Nav() {
	return (
		<nav>
			<div className="logo">
				<div className="logo-container">
					<p className="menu">
						<Link to="/">R + P + A</Link>
					</p>
				</div>
			</div>
			<div className="menu-toggle-btn">
				<ul className="menu-toggle-btn-wrapper">
					<li className="menu open-label">Menu</li>
					<li className="menu open-label">Close</li>
				</ul>
			</div>
		</nav>
	);
}

export default Nav;
