import FeatureItem from "../layouts/FeatureItem";
import { featureItems } from "../utils/data";

const Features = () => {
	return (
		<section id="features" aria-labelledby="Features">
			<div className="container">
				<div className="features-wrapper">
					{featureItems.map((featureItem) => (
						<FeatureItem
							key={featureItem.id}
							svg={featureItem.svg}
							link={featureItem.link}
							title1={featureItem.title1}
							title2={featureItem.title2}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
