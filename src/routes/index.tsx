import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div>
			<div className="transition">
				<div className="transition-overlay overlay-1"></div>
				<div className="transition-overlay overlay-2"></div>
				<div className="transition-overlay overlay-3"></div>
				<div className="transition-overlay overlay-4"></div>
				<div className="transition-overlay overlay-5"></div>
			</div>

			<div className="page home-page">
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
                <p className="menu">
                  Find Me
                </p>
              </div>
              <div className="nav-footer-item-links">
                <p className="menu">
                  <Link to="/" target="_blank">Facebook</Link>
                </p>
              </div>
            </li>
            <li className="nav-footer-item">
              <div className="nav-footer-item-links">
                <p className="menu">
                </p>
              </div>
            </li>
            <li className="nav-footer-item">
              <div className="nav-footer item-header">
                <p className="menu">
                  Get in Touch
                </p>
              </div>
              <div className="nav-footer-item-links">
                <p className="menu">
                  <Link to="/" target="_blank">rpa@gmail.com</Link>
                </p>
              </div>
            </li>
          </ul>
        </div>
			</div>
		</div>
	);
}
