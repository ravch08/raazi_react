import {
	Arrival1,
	Arrival11,
	Arrival2,
	Arrival22,
	Arrival3,
	Arrival33,
	Arrival4,
	Arrival44,
	Banner1,
	Banner2,
	Banner3,
	Blog1,
	Blog2,
	Blog3,
	Brand1,
	Brand2,
	Brand3,
	Brand4,
	Brand5,
	Brand6,
	Brand7,
	Seller1,
	Seller11,
	Seller2,
	Seller22,
	Seller3,
	Seller33,
	Seller4,
	Seller44,
	Seller5,
	Seller55,
} from "./helper";

export const bannerItems = [
	{
		id: 1,
		imgSrc: Banner1,
		title1: "Inspired By",
		title2: "Nature",
		btnText: "Shop Collection",
	},

	{
		id: 2,
		imgSrc: Banner2,
		title1: "Inspired By",
		title2: "Nature",
		btnText: "Shop Collection",
	},

	{
		id: 3,
		imgSrc: Banner3,
		title1: "Inspired By",
		title2: "Nature",
		btnText: "Shop Collection",
	},
];

export const blogItems = [
	{
		id: 1,
		imgSrc: Blog1,
		badge: "Sep 29, 2022",
		title: "So isn’t land signs greater void face",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt vitae error placeat molestiae...",
	},
	{
		id: 2,
		imgSrc: Blog2,
		badge: "Dec 01, 2022",
		title: "Sea good every which said first divide",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt vitae error placeat molestiae...",
	},
	{
		id: 3,
		imgSrc: Blog3,
		badge: "Dec 09, 2022",
		title: "The morning let you created every day.",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt vitae error placeat molestiae...",
	},
];

export const newArrivalItems = [
	{
		id: 1,
		imgSrc1: Arrival1,
		imgSrc11: Arrival11,
		badgeText: "SALE",
		category: "Kids",
		title: "Hiking Boots",
		price: "",
		priceRed: 44,
		priceCrossed: 77,
	},
	{
		id: 2,
		imgSrc1: Arrival2,
		imgSrc11: Arrival22,
		badgeText: "HOT",
		category: "Bags",
		title: "Cross Body Mini Bag",
		price: 40,
		priceRed: "",
		priceCrossed: "",
	},
	{
		id: 3,
		imgSrc1: Arrival3,
		imgSrc11: Arrival33,
		badgeText: "SALE",
		category: "Kids",
		title: "Travel Trifold Wallet",
		price: "",
		priceRed: 129,
		priceCrossed: 157,
	},
	{
		id: 4,
		imgSrc1: Arrival4,
		imgSrc11: Arrival44,
		badgeText: "HOT",
		category: "T-Shirt",
		title: "Wide Cotton Tunic",
		price: 250,
		priceRed: "",
		priceCrossed: "",
	},
	{
		id: 5,
		imgSrc1: Arrival2,
		imgSrc11: Arrival22,
		badgeText: "HOT",
		category: "Boots",
		title: "Gina Dress Sandals",
		price: 79,
		priceRed: "",
		priceCrossed: "",
	},
];

export const topSellerItems = [
	{
		id: 1,
		imgSrc1: Seller1,
		imgSrc11: Seller11,
		badgeText: "SALE",
		category: "Boots",
		title: "Clarks Women’s Step Cali",
		price: 45,
		priceRed: "",
		priceCrossed: "",
	},
	{
		id: 2,
		imgSrc1: Seller2,
		imgSrc11: Seller22,
		badgeText: "HOT",
		category: "Bags",
		title: "Geometric print Scarf",
		price: 23,
		priceRed: 3,
		priceCrossed: 50,
	},
	{
		id: 3,
		imgSrc1: Seller3,
		imgSrc11: Seller33,
		badgeText: "SALE",
		category: "Bags",
		title: "Cross Body Mini Bag",
		price: 40,
		priceRed: "",
		priceCrossed: "",
	},
	{
		id: 4,
		imgSrc1: Seller4,
		imgSrc11: Seller44,
		badgeText: "SALE",
		category: "Mens",
		title: "Yellow Reserved Hoodie",
		price: 123,
		priceRed: "",
		priceCrossed: 200,
	},
	{
		id: 5,
		imgSrc1: Seller5,
		imgSrc11: Seller55,
		badgeText: "SALE",
		category: "Dresses",
		title: "Tarot Garden Dress",
		price: 129,
		priceRed: "",
		priceCrossed: "",
	},
];

export const brandItems = [
	{
		id: 1,
		link: "#!",
		imgSrc: Brand1,
		title: "Mang",
	},
	{
		id: 2,
		link: "#!",
		imgSrc: Brand2,
		title: "Zar",
	},
	{
		id: 3,
		link: "#!",
		imgSrc: Brand3,
		title: "Reebo",
	},
	{
		id: 4,
		link: "#!",
		imgSrc: Brand4,
		title: "aso",
	},
	{
		id: 5,
		link: "#!",
		imgSrc: Brand5,
		title: "stradivar",
	},
	{
		id: 6,
		link: "#!",
		imgSrc: Brand6,
		title: "adida",
	},
	{
		id: 7,
		link: "#!",
		imgSrc: Brand7,
		title: "bersh",
	},
];

export const featureItems = [
	{
		id: 1,
		link: "#!",
		title1: "Made from recycled",
		title2: "discarded textiles",
		svg: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="80"
				height="80"
				viewBox="0 0 80 80"
				fill="none"
			>
				<path
					d="M72.5751 10.8037C72.2005 10.6222 71.7626 10.626 71.3911 10.8143L65.6451 13.7287L61.1482 6.00418C59.6089 3.11899 56.599 1.32285 53.3291 1.33802H31.1075C27.7897 1.34602 24.716 3.08316 22.9977 5.92152L18.8648 12.6381C18.4828 13.2587 18.6698 14.071 19.2848 14.4619L33.9498 23.7942C34.1635 23.9301 34.4113 24.0021 34.6644 24.0022C34.7751 24.0024 34.8852 23.9884 34.9924 23.9609C35.3482 23.8707 35.6511 23.6378 35.8296 23.317L41.429 13.2421L47.5617 24.8408L41.9783 28.1911C41.488 28.4851 41.2397 29.059 41.361 29.6176C41.4818 30.1761 41.9451 30.5953 42.5129 30.6602L62.3547 32.9159C62.4047 32.9213 62.4551 32.9239 62.5054 32.9239C63.0163 32.9239 63.4825 32.632 63.7053 32.172L73.1936 12.5848C73.5145 11.922 73.2377 11.1246 72.5751 10.8037ZM34.1858 20.7837L21.8231 12.9179L25.2761 7.30787C26.5095 5.26359 28.7201 4.01123 31.1075 4.00423H36.5202L39.8239 10.6368L34.1858 20.7837ZM61.7175 30.1601L46.7218 28.4549L50.0161 26.4778C50.6225 26.1132 50.8385 25.3384 50.508 24.7127L39.5585 4.00423H53.3291C55.6446 4.00089 57.7699 5.28542 58.8431 7.3372L63.9732 16.1536C64.3294 16.7628 65.0984 16.989 65.7277 16.6695L69.0687 14.9764L61.7175 30.1601Z"
					fill="#111111"
				></path>
				<path
					d="M78.8329 38.6725L74.5241 30.0654C74.1951 29.4066 73.3944 29.1395 72.7356 29.4685C72.7091 29.4816 72.6831 29.4958 72.6576 29.5108L56.6593 38.8431C56.0324 39.2087 55.8133 40.0086 56.1661 40.6429L61.7281 50.6658H49.3295V45.3331C49.3298 44.5968 48.733 43.9997 47.9968 43.9994C47.621 43.9992 47.2625 44.1577 47.0097 44.4358L33.6778 59.1009C33.2434 59.579 33.2142 60.2998 33.6085 60.8114L46.9404 78.1428C47.3899 78.7259 48.2271 78.8343 48.8102 78.3848C49.1375 78.1325 49.3293 77.7429 49.3295 77.3296V73.33H58.6618C61.9491 73.411 64.9906 71.5957 66.4796 68.6639L75.8119 52.6736L78.585 48.1941C80.3786 45.2972 80.4734 41.6588 78.8329 38.6725ZM64.1612 67.352C63.134 69.4368 60.985 70.7308 58.6618 70.6637H47.9963C47.26 70.6637 46.6631 71.2606 46.6631 71.9968V73.41L36.3975 60.0701L46.6631 48.7807V51.999C46.6631 52.7353 47.26 53.3322 47.9963 53.3322H72.339L64.1612 67.352ZM76.3119 46.7969L73.9121 50.6632H64.7785L59.1284 40.4949L72.7709 32.5345L76.4705 39.9203C77.6647 42.0726 77.6041 44.702 76.3119 46.7969Z"
					fill="#111111"
				></path>
				<path
					d="M31.8754 40.7749L23.8763 23.4434C23.6463 22.9425 23.1319 22.6345 22.5818 22.6689L1.25073 24.002C0.515813 24.0477 -0.0429595 24.6803 0.00270223 25.4152C0.0295327 25.8465 0.263507 26.2381 0.630801 26.4658L0.632134 26.4684L7.22342 30.556L2.8239 39.3657C1.22924 42.2629 1.2384 45.777 2.84789 48.666L10.2671 61.478L14.324 68.5052C16.0663 71.4649 19.2315 73.2957 22.6658 73.33H27.9985C28.7348 73.33 29.3317 72.7331 29.3317 71.9968V53.3322C29.3317 52.596 28.7348 51.999 27.9985 51.999H18.0382L24.6882 40.4603L30.1863 42.5774C30.8735 42.8415 31.6449 42.4985 31.9091 41.8113C32.0382 41.4755 32.0261 41.1017 31.8754 40.7749ZM26.6653 54.6654V70.6637H22.6658C20.1814 70.6397 17.8911 69.3156 16.6304 67.1747L12.9708 60.8341L16.7464 54.6654H26.6653ZM24.5815 37.5619C23.9689 37.3266 23.2762 37.5719 22.9484 38.1405L11.4163 58.149L5.15564 47.3329C4.00477 45.2301 4.02193 42.682 5.20097 40.5949L10.1591 30.6573C10.4696 30.0397 10.2566 29.2873 9.66849 28.9242L5.59026 26.4018L21.8378 25.3899L28.0772 38.9084L24.5815 37.5619Z"
					fill="#111111"
				></path>
			</svg>
		),
	},
	{
		id: 2,
		link: "#!",
		title1: "Produced without water",
		title2: "& chemicals",
		svg: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="80"
				height="80"
				viewBox="0 0 80 80"
				fill="none"
			>
				<path
					d="M54.1169 40.9444L41.176 16.8275C40.7691 16.1788 39.9134 15.983 39.2649 16.3897C39.088 16.5007 38.9383 16.6504 38.8272 16.8275L25.8863 40.9444C23.2609 45.7827 23.3984 51.6505 26.2475 56.3607C30.8441 63.9569 40.7282 66.3884 48.3244 61.7919C50.547 60.4469 52.4106 58.5833 53.7556 56.3607C56.6046 51.6506 56.7422 45.7829 54.1169 40.9444ZM51.4695 54.9903C49.0639 59.0255 44.6993 61.4831 40.0016 61.4475C35.3052 61.4816 30.9426 59.0244 28.5377 54.9903C26.1757 51.0833 26.0621 46.2171 28.2391 42.2041L40.0016 20.2773L51.7681 42.2041C53.9451 46.2171 53.8314 51.0834 51.4695 54.9903Z"
					fill="#111111"
				></path>
				<path
					d="M79.3453 32.9673C78.7276 29.5782 77.6742 26.2835 76.2116 23.1648C75.9775 22.6734 75.4701 22.3718 74.9266 22.401C74.382 22.4331 73.9121 22.7939 73.7402 23.3114L72.2805 27.7104L68.4668 26.8039C67.7508 26.6324 67.0314 27.0737 66.8598 27.7897C66.7935 28.0664 66.8175 28.3574 66.9285 28.6195C68.4784 32.2548 69.2717 36.1675 69.2599 40.1194C69.1539 53.8276 59.6141 65.6544 46.2388 68.6592C45.9372 68.7262 45.6677 68.8953 45.4763 69.1378L41.6732 73.9779C41.2178 74.5563 41.3175 75.3944 41.896 75.8498C41.8963 75.8502 41.8968 75.8505 41.8971 75.8508L46.1361 79.1833C46.3711 79.3681 46.6612 79.4686 46.9599 79.4686C47.0406 79.4683 47.1209 79.4598 47.1999 79.4433C68.9105 75.4859 83.3025 54.6779 79.3453 32.9673ZM52.5966 75.2411C50.8712 75.859 49.1026 76.3487 47.3052 76.7066V76.7079L44.5925 74.5751L47.2812 71.1546C61.6492 67.6978 71.8143 54.897 71.9259 40.1194C71.9368 36.672 71.3851 33.2462 70.293 29.9765L72.8524 30.5843C73.5247 30.744 74.2077 30.363 74.4253 29.7072L75.1425 27.5451C82.0875 46.9417 71.9934 68.296 52.5966 75.2411Z"
					fill="#111111"
				></path>
				<path
					d="M70.3396 14.0641C62.7623 5.24142 51.7194 0.154309 40.0896 0.128815H40.0016C27.1853 0.156641 15.1535 6.30534 7.62267 16.6755C7.19044 17.2715 7.32341 18.105 7.91943 18.5372C8.14721 18.7024 8.42115 18.7912 8.70241 18.791H12.8454L13.3546 22.4888C13.4103 22.898 13.6526 23.2584 14.0105 23.4646L14.1944 23.5699C14.7913 23.9125 15.5508 23.7443 15.9473 23.182C21.443 15.3792 30.3871 10.7326 39.9309 10.7223H40.0016C48.5445 10.7431 56.6529 14.4917 62.2029 20.9865C62.4562 21.2826 62.8264 21.453 63.216 21.453H69.3279C70.064 21.453 70.6609 20.8562 70.6609 20.12V14.9333C70.6604 14.6147 70.5466 14.3066 70.3396 14.0641ZM67.9949 18.791H63.8172C57.7707 11.983 49.1071 8.07791 40.0016 8.05625H39.9296C30.5718 8.06758 21.6866 12.1689 15.6074 19.2829L15.3315 17.2834C15.2438 16.6197 14.6773 16.124 14.0078 16.125H11.4338C18.5304 7.69367 28.9812 2.81717 40.0016 2.79484H40.0829C50.7667 2.81817 60.9282 7.4189 67.9949 15.4318V18.791Z"
					fill="#111111"
				></path>
				<path
					d="M37.3915 69.2603C21.2694 67.8731 9.32426 53.6791 10.7113 37.5568C10.8974 35.3934 11.3234 33.2574 11.9816 31.188C12.0759 30.8939 12.0646 30.5762 11.9496 30.2896L9.81681 24.9575C9.54404 24.2737 8.76856 23.9406 8.08472 24.2134C8.08439 24.2135 8.08422 24.2135 8.08389 24.2137L2.97178 26.2626C2.61304 26.4064 2.33377 26.6978 2.2053 27.0624C-5.00764 47.921 6.05455 70.6777 26.9132 77.8905C29.7804 78.8819 32.751 79.5438 35.7679 79.863C35.8122 79.868 35.8567 79.8707 35.9012 79.871C36.6374 79.8712 37.2344 79.2745 37.2344 78.5382C37.2344 78.2764 37.1574 78.0205 37.013 77.8022L34.5709 74.1111L38.0127 71.8343C38.3856 71.5874 38.6099 71.1698 38.6099 70.7226V70.5893C38.6102 69.8973 38.081 69.3197 37.3915 69.2603ZM31.6113 74.4722C31.6113 74.4723 31.6114 74.4723 31.6114 74.4725V74.4658L33.1551 76.7999C12.9041 73.0342 -0.460062 53.5648 3.30554 33.3137C3.60796 31.6871 4.01837 30.0823 4.53391 28.51L7.83578 27.189L9.3021 30.8455C8.40581 33.8099 7.94642 36.889 7.93843 39.9859C7.98841 55.2754 18.7833 68.4216 33.7709 71.4451L31.9873 72.6248C31.3735 73.031 31.205 73.8581 31.6113 74.4722Z"
					fill="#111111"
				></path>
			</svg>
		),
	},
	{
		id: 3,
		link: "#!",
		title1: "Locally produced in a",
		title2: "closed chain",
		svg: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="80"
				height="80"
				viewBox="0 0 80 80"
				fill="none"
			>
				<g clipPath="url(#clip0)">
					<path
						d="M79.5108 38.3007L65.3329 26.7001V9.99809C65.3329 9.26172 64.7358 8.66469 63.9995 8.66469H53.3323C52.596 8.66469 51.9989 9.26172 51.9989 9.99809V16.557L40.8318 7.62332C40.3454 7.23547 39.6554 7.23547 39.169 7.62332L0.500683 38.2913C-0.0745083 38.7512 -0.167846 39.5904 0.292008 40.1654C0.544352 40.4809 0.926035 40.6651 1.33005 40.6661H11.9972V71.3341C11.9972 72.0705 12.5942 72.6675 13.3306 72.6675H66.6662C67.4026 72.6675 67.9996 72.0705 67.9996 71.3341V40.6661H78.6668C79.4031 40.6659 80 40.0689 80 39.3325C79.9998 38.9325 79.8203 38.5538 79.5108 38.3007ZM38.665 63.2564L34.8702 60.411C29.7471 56.5471 26.716 50.5175 26.6712 44.1009L38.665 57.1855V63.2564ZM38.665 53.2386L27.0018 40.5141C27.5412 37.4275 28.7769 34.5045 30.6153 31.967L38.665 41.1661V53.2386ZM38.665 37.1179L32.3394 29.8896C33.1178 29.0528 33.9653 28.2829 34.8729 27.5882L38.665 24.7427V37.1179ZM66.6662 37.9993C65.9299 37.9993 65.3329 38.5963 65.3329 39.3327V70.0007H41.3318V66.7446L46.932 62.5431C57.1733 54.8631 59.2496 40.3349 51.5696 30.0936C50.2514 28.3357 48.69 26.7743 46.932 25.4561L40.9011 20.9319C40.4271 20.5764 39.7751 20.5764 39.301 20.9319L33.2701 25.4561C23.0288 33.1361 20.9526 47.6642 28.6326 57.9055C29.9508 59.6634 31.5122 61.2248 33.2701 62.5431L38.665 66.5899V70.0007H14.664V39.3327C14.664 38.5963 14.0669 37.9993 13.3306 37.9993H5.15689L39.9984 10.3688L52.503 20.3692C53.0797 20.8272 53.9184 20.7312 54.3764 20.1545C54.5624 19.9205 54.6642 19.6307 54.6657 19.3318V11.3315H62.6661V27.3322C62.6661 27.7322 62.8457 28.111 63.1554 28.3642L74.9333 37.9993H66.6662ZM53.091 39.9007C53.3785 41.2483 53.5282 42.6217 53.5377 43.9996C53.5227 50.453 50.4857 56.5268 45.332 60.411L41.3318 63.4111V49.3078L53.091 39.9007ZM41.3318 45.8917V24.5881L45.332 27.5882C48.5411 30.0073 50.9722 33.3126 52.3256 37.0966L41.3318 45.8917Z"
						fill="#111111"
					></path>
				</g>
				<defs>
					<clipPath id="clip0">
						<rect width="80" height="80" fill="white"></rect>
					</clipPath>
				</defs>
			</svg>
		),
	},
];