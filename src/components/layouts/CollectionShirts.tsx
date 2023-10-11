import { Link } from "react-router-dom";
import { CollectionProps } from "../../types/types";

const CollectionShirts = (props: CollectionProps) => {
	return (
		<div className="collection-shirts">
			<img src={props.imgSrc} alt={props.title} />
			<div className="shirts-content">
				<h3>{props.title}</h3>
				<Link to="#!" className="btn-darkBlank">
					Shop Now
					<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 448 512">
						<path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
					</svg>
				</Link>
			</div>
		</div>
	);
};

export default CollectionShirts;
