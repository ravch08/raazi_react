import { Best1, Best2, CollectionBags, CollectionShirts } from "../utils/helper";

const BestPicks = () => {
	return (
		<section id="bestPicks" aria-labelledby="Best Picks of 2021">
			<div className="container">
				<div className="heading">
					<span>NEW COLLECTION</span>
					<h2>Best Picks 2021</h2>
					<p>
						A conscious collection made entirely from food crop waste, recycled cotton, other more
						sustainable materials.
					</p>
				</div>

				<div className="collections">
					<CollectionBags imgSrc={Best1} title="Bags Collection" />
					<CollectionShirts imgSrc={Best2} title="Printed Men's Shirt" />
				</div>
			</div>
		</section>
	);
};

export default BestPicks;
