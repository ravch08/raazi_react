const HamburgerMenu = (props) => {
	return (
		<div className="hamburger-menu" onClick={props.clickHandler}>
			<div className="line"></div>
		</div>
	);
};

export default HamburgerMenu;
