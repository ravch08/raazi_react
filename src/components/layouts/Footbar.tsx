const Footbar = (props: string) => {
	return (
		<div className="footbar">
			<div className="container">
				<div className="footbar-wrapper">
					<p>© 2021 All rights reserved.</p>
					<img src={props.imgSrc} alt="payments" />
				</div>
			</div>
		</div>
	);
};

export default Footbar;
