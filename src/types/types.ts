export type BannerProps = {
	id?: number;
	imgSrc: string;
	title1: string;
	title2: string;
	btnText: string;
};

export type BlogProps = {
	id?: number;
	badge: string;
	title: string;
	imgSrc: string;
	description: string;
};

export type TopSellerProps = {
	id?: number;
	imgSrc1: string;
	imgSrc11: string;
	badgeText: string;
	category: string;
	title: string;
	price: number | string;
	priceRed: number | string;
	priceCrossed: number | string;
};

export type CollectionProps = {
	imgSrc: string;
	title: string;
};

export type BrandProps = {
	id?: number;
	link: string;
	title: string;
	imgSrc: string;
};

export type FeatureProps = {
	id?: number;
	link: string;
	title1: string;
	title2: string;
	svg: JSX.Element;
};
