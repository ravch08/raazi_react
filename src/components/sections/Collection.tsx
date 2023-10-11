import { Link } from "react-router-dom";
import { Collection1, Collection2 } from "../utils/helper";

const Collection = () => {
	return (
		<section id="collection" aria-labelledby="Collections">
			<div className="container">
				<div className="collection-wrapper">
					<Link to="#!" className="collection-card">
						<figure>
							<img src={Collection1} alt="Women Shirt Collection" />
						</figure>
						<h3>
							Women Shirt <br /> Collection
						</h3>
					</Link>

					<Link to="#!" className="collection-card">
						<figure>
							<img src={Collection2} alt="Mens Coats Collection" />
						</figure>
						<h3>
							Mens Coats <br /> Collection
						</h3>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Collection;
