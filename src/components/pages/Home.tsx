import {
	Banner,
	BestPicks,
	Blog,
	Brands,
	Collection,
	Features,
	InfoStrip,
	NewArrivals,
	TopSellers,
} from "../utils/helper";

const Home = () => {
	return (
		<main>
			<Banner />
			<InfoStrip />
			<BestPicks />
			<TopSellers />
			<Collection />
			<Features />
			<NewArrivals />
			<Blog />
			<Brands />
		</main>
	);
};

export default Home;
