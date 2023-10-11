import { Link } from "react-router-dom";
import { brandItems } from "../utils/data";

const Brands = () => {
	return (
		<section id="brands" aria-labelledby="Brands">
			<div className="container">
				<div className="brands-wrapper">
					{brandItems.map((brandItem) => (
						<Link to={brandItem.link} key={brandItem.id}>
							<img src={brandItem.imgSrc} alt={brandItem.title} />
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default Brands;
