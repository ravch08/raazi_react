import { Link } from "react-router-dom";
import { FeatureProps } from "../../types/types";

const FeatureItem = (props: FeatureProps) => {
	return (
		<Link to={props.link} className="features-item">
			{props.svg}
			<p>
				<span>{props.title1}</span>
				<br />
				<span>{props.title2}</span>
			</p>
		</Link>
	);
};

export default FeatureItem;
