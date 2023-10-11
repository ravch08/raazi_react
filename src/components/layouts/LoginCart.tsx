import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginCart = () => {
	const [cartSidebar, setCartSidebar] = useState(false);

	const openCartSidebar = () => setCartSidebar(true);
	const closeCartSidebar = () => setCartSidebar(false);

	const cartSidebarClass = cartSidebar ? "sidebar-cart open" : "sidebar-cart";

	return (
		<React.Fragment>
			<div className="login-link cart" onClick={openCartSidebar}>
				<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 448 512">
					<path d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z" />
				</svg>
			</div>
			<div className={cartSidebarClass}>
				<div className="sidebar-head">
					<h2>Your Cart (0)</h2>
					<Link to="#!" id="close-sideCart" className="close" onClick={closeCartSidebar}>
						<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 352 512">
							<path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
						</svg>
					</Link>
				</div>

				<div className="cart-content">
					<span>Your Cart is Empty 🤔</span>

					<Link to="#!" className="btn-outline">
						Continue Shopping
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
};

export default LoginCart;
