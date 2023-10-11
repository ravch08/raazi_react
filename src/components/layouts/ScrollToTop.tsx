import { useEffect, useState } from "react";

const ScrollToTop = () => {
	const [scrollTop, setScrollTop] = useState("");

	const setScroller = () => {
		const scrollPoint = window.scrollY;
		const scrollClass = scrollPoint >= 250 ? "show" : "";
		setScrollTop(scrollClass);
	};

	useEffect(() => {
		window.addEventListener("scroll", setScroller);
		return () => window.removeEventListener("scroll", setScroller);
	}, []);

	const scrollingClass = `${scrollTop} scrollTop`;

	const ScrollTopHandler = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className={scrollingClass} onClick={ScrollTopHandler}>
			<svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 320 512">
				<path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z" />
			</svg>
		</div>
	);
};

export default ScrollToTop;
