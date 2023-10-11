import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { topSellerItems } from "../utils/data";
import { TopSellerItem } from "../utils/helper";

const TopSellers = () => {
	const topSellerItemsList = topSellerItems.map((topSellerItem) => (
		<SwiperSlide key={topSellerItem.id}>
			<TopSellerItem
				price={topSellerItem.price}
				title={topSellerItem.title}
				imgSrc1={topSellerItem.imgSrc1}
				imgSrc11={topSellerItem.imgSrc11}
				category={topSellerItem.category}
				priceRed={topSellerItem.priceRed}
				badgeText={topSellerItem.badgeText}
				priceCrossed={topSellerItem.priceCrossed}
			/>
		</SwiperSlide>
	));

	return (
		<section id="topSellers" aria-labelledby="Top Sellers">
			<div className="container">
				<div className="heading">
					<span>Best of the Best</span>
					<h2>Top Sellers</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sunt voluptates
						laborum nulla reiciendis obcaecati facere.
					</p>
				</div>

				<Swiper
					init={true}
					loop={false}
					speed={2000}
					keyboard={true}
					spaceBetween={20}
					slidesPerView={4}
					grabCursor={true}
					centeredSlides={false}
				>
					{topSellerItemsList}
				</Swiper>

				<div className="text-center">
					<Link to="#!" type="button" className="btn btn-dark">
						Shop All Products
					</Link>
				</div>
			</div>
		</section>
	);
};

export default TopSellers;
