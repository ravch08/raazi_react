import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import {
	HamburgerMenu,
	Login,
	LoginCart,
	LoginSearch,
	LoginWishlist,
	LogoDark,
	SocialIcons,
} from "../utils/helper";

const Navbar = () => {
	const { pathname } = useLocation();

	const [sticky, setSticky] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const [sidebar, setSidebar] = useState(false);

	const makeSticky = () => {
		const stickyClass = window.scrollY >= 80 ? "stickyTop" : "";
		setSticky(stickyClass);
	};

	const openSidebar = () => setSidebar(true);
	const closeSidebar = () => setSidebar(false);

	useEffect(() => setIsOpen(true), [pathname]);

	useEffect(() => {
		window.addEventListener("scroll", makeSticky);
		return () => window.removeEventListener("scroll", makeSticky);
	}, []);

	const stickyTop = `navbar ${sticky}`;

	return (
		<div className={stickyTop}>
			<div className="container">
				<nav className="navbar-wrapper">
					<Link to="/" className="nav-brand">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="84.032"
							height="23.52"
							viewBox="0 0 84.032 23.52"
						>
							<path
								d="M2.336-21.344V0H7.264V-8.416L13.024,0H19.04L12.48-8.736a6.716,6.716,0,0,0,2.976-1.632A5.839,5.839,0,0,0,17.12-14.72a6.435,6.435,0,0,0-1.856-4.768,7.635,7.635,0,0,0-5.44-1.856ZM7.264-17.5H8.416a4.815,4.815,0,0,1,2.72.672,2.59,2.59,0,0,1,.992,2.176,2.873,2.873,0,0,1-.8,2.08,4.053,4.053,0,0,1-2.944.928H7.264ZM31.84-12.672a5.354,5.354,0,0,0-4.48-2.08A6.881,6.881,0,0,0,22.4-12.8a8.127,8.127,0,0,0-2.208,5.76A7.552,7.552,0,0,0,22.272-1.7,6.764,6.764,0,0,0,27.616.48,4.756,4.756,0,0,0,31.84-1.728V0h4.608V-14.272H31.84Zm-3.328,1.888a3.856,3.856,0,0,1,2.56.992,3.619,3.619,0,0,1,1.056,2.624,3.625,3.625,0,0,1-1.12,2.688,3.413,3.413,0,0,1-2.4.992,3.785,3.785,0,0,1-2.72-1.12,3.681,3.681,0,0,1-.96-2.56A3.566,3.566,0,0,1,25.984-9.76,3.633,3.633,0,0,1,28.512-10.784Zm25.312-3.488H39.744v3.84h6.3L38.624,0h14.56V-3.84H46.432Zm15.968,0H55.712v3.84h6.3L54.592,0h14.56V-3.84H62.4Zm2.5,0V0H76.9V-14.272Zm-.384-6.08a2.663,2.663,0,0,0,2.688,2.688,2.663,2.663,0,0,0,2.688-2.688,2.663,2.663,0,0,0-2.688-2.688A2.663,2.663,0,0,0,71.9-20.352ZM80.544-2.9A2.88,2.88,0,0,0,83.456.01,2.88,2.88,0,0,0,86.368-2.9a2.88,2.88,0,0,0-2.912-2.91A2.88,2.88,0,0,0,80.544-2.9Z"
								transform="translate(-2.336 23.04)"
							></path>
						</svg>
					</Link>

					<ul className="nav-list">
						<li className="nav-item">
							<NavLink to="/" className="nav-link">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/about" className="nav-link">
								About Us
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/blogPage" className="nav-link">
								Blog
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/product" className="nav-link">
								Products
								<svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 320 512">
									<path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
								</svg>
							</NavLink>
							<ul className="dropdown-menu">
								<li className="dropdown-item">
									<Link to="#!" className="dropdown-link">
										Boots
									</Link>
								</li>
								<li className="dropdown-item">
									<Link to="#!" className="dropdown-link">
										Bags
									</Link>
								</li>
								<li className="dropdown-item">
									<Link to="#!" className="dropdown-link">
										Dresses
									</Link>
								</li>
								<li className="dropdown-item">
									<Link to="#!" className="dropdown-link">
										Tunic
									</Link>
								</li>
								<li className="dropdown-item">
									<Link to="#!" className="dropdown-link">
										T-Shirts
									</Link>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<NavLink to="/contact" className="nav-link">
								Contact Us
							</NavLink>
						</li>
					</ul>

					<div className="nav-right">
						<div className="login">
							<LoginSearch />
							<Login />
							<LoginWishlist />
							<LoginCart />
						</div>

						<span className="nav-divider"></span>

						<HamburgerMenu clickHandler={openSidebar} />
					</div>
				</nav>

				<div className={sidebar ? "overlay show" : "overlay"} onClick={closeSidebar}></div>

				<div className={sidebar ? "sidebar-navigation open" : "sidebar-navigation"}>
					<div className="sidebar-head">
						<Link to="/">
							<img src={LogoDark} alt="logo" />
						</Link>
						<Link to="#!" id="close-sideNavbar" className="close" onClick={closeSidebar}>
							<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 352 512">
								<path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
							</svg>
						</Link>
					</div>

					<ul className="sidebar-nav">
						<li className="nav-item">
							<Link to="/" className="nav-link" onClick={isOpen ? closeSidebar : null}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="about" className="nav-link" onClick={isOpen ? closeSidebar : null}>
								About Us
							</Link>
						</li>
						<li className="nav-item">
							<Link to="blog-page" className="nav-link" onClick={isOpen ? closeSidebar : null}>
								Blog
							</Link>
						</li>
						<li className="nav-item">
							<Link to="product" className="nav-link" onClick={() => {}}>
								Products
								<svg xmlns="http://www.w3.org/2000/svg" width="10" viewBox="0 0 320 512">
									<path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
								</svg>
							</Link>
							<ul className="dropdown-menu">
								<li className="dropdown-item">
									<Link to="#!" className="dropdown-link" onClick={isOpen ? closeSidebar : null}>
										Boots
									</Link>
								</li>
								<li className="dropdown-item">
									<Link to="#!" className="dropdown-link" onClick={isOpen ? closeSidebar : null}>
										Bags
									</Link>
								</li>
								<li className="dropdown-item">
									<Link to="#!" className="dropdown-link" onClick={isOpen ? closeSidebar : null}>
										Dresses
									</Link>
								</li>
								<li className="dropdown-item">
									<Link to="#!" className="dropdown-link" onClick={isOpen ? closeSidebar : null}>
										Tunic
									</Link>
								</li>
								<li className="dropdown-item">
									<Link to="#!" className="dropdown-link" onClick={isOpen ? closeSidebar : null}>
										T-Shirts
									</Link>
								</li>
							</ul>
						</li>
						<li className="nav-item" onClick={isOpen ? closeSidebar : null}>
							<Link to="contact" className="nav-link">
								Contact Us
							</Link>
						</li>
					</ul>

					<SocialIcons />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
