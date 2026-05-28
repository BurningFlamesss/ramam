import { Link } from "@tanstack/react-router";

function Nav({ toggleOption = true }: { toggleOption?: boolean }) {
	return (
		<nav>
			<div className="logo">
				<div className="logo-container">
					<p className="menu">
						<Link to="/">R + P + A</Link>
					</p>
				</div>
			</div>
			{toggleOption ? (
				<div className="menu-toggle-btn">
					<ul className="menu-toggle-btn-wrapper">
						<li className="menu open-label">Menu</li>
						<li className="menu close-label">Close</li>
					</ul>
				</div>
			) : null}
		</nav>
	);
}

export default Nav;
