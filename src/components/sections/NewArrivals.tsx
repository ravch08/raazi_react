import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { newArrivalItems } from "../utils/data";
import { TopSellerItem } from "../utils/helper";

const NewArrivals = () => {
	const newArrivalItemsList = newArrivalItems.map((newArrivalItem) => (
		<SwiperSlide key={newArrivalItem.id}>
			<TopSellerItem
				price={newArrivalItem.price}
				title={newArrivalItem.title}
				imgSrc1={newArrivalItem.imgSrc1}
				imgSrc11={newArrivalItem.imgSrc11}
				category={newArrivalItem.category}
				priceRed={newArrivalItem.priceRed}
				badgeText={newArrivalItem.badgeText}
				priceCrossed={newArrivalItem.priceCrossed}
			/>
		</SwiperSlide>
	));

	return (
		<section id="newArrivals" aria-labelledby="New Arrivals">
			<div className="container">
				<div className="heading">
					<span>Newest of the New</span>
					<h2>New Arrivals</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore sunt voluptates
						laborum nulla reiciendis obcaecati facere.
					</p>
				</div>

				<Swiper
					init={true}
					loop={true}
					speed={2000}
					keyboard={true}
					spaceBetween={20}
					slidesPerView={4}
					grabCursor={true}
					centeredSlides={false}
					breakpoints={{
						350: {
							slidesPerView: 1,
						},
						800: {
							slidesPerView: 2,
						},
						991: {
							slidesPerView: 3,
						},
						1400: {
							slidesPerView: 4,
						},
					}}
				>
					{newArrivalItemsList}
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

export default NewArrivals;
