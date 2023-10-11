import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Footbar, LogoLight, Payment, ScrollToTop, SocialIcons } from "../utils/helper";

const Footer = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const handleFormSubmit = (data) => {
		console.log("Form Submitted: ", data);
		reset();
	};

	return (
		<footer>
			<div className="container">
				<div className="ftr-email">
					<h2>Want style Ideas and Treats?</h2>

					<form className="email" onSubmit={handleSubmit(handleFormSubmit)} noValidate>
						<input
							type="email"
							id="email"
							placeholder="Enter Email*"
							{...register("email", {
								required: {
									value: true,
									message: "Email is Required!",
								},
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: "Invalid Email Format",
								},
							})}
						/>
						<input type="submit" className="btn-subscribe" value="Subscribe" />
					</form>

					<p className="form-error">{errors.email?.message}</p>
				</div>

				<div className="footer-wrapper">
					<div className="ftr-cont">
						<Link to="/" className="ftr-logo">
							<img src={LogoLight} alt="logo" />
						</Link>
						<SocialIcons />
					</div>

					<div className="ftr-list">
						<Link to="#!" className="ftr-head">
							SUPPORT
						</Link>
						<Link to="#!" className="ftr-items">
							Contact Us
						</Link>
						<Link to="#!" className="ftr-items">
							FAQs
						</Link>
						<Link to="#!" className="ftr-items">
							Size Guide
						</Link>
						<Link to="#!" className="ftr-items">
							Shipping & Returns
						</Link>
					</div>
					<div className="ftr-list">
						<Link to="#!" className="ftr-head">
							SHOP
						</Link>
						<Link to="#!" className="ftr-items">
							Men's Shopping
						</Link>
						<Link to="#!" className="ftr-items">
							Women's Shopping
						</Link>
						<Link to="#!" className="ftr-items">
							Kid's Shopping
						</Link>
						<Link to="#!" className="ftr-items">
							Discount
						</Link>
					</div>
					<div className="ftr-list">
						<Link to="#!" className="ftr-head">
							COMPANY
						</Link>
						<Link to="#!" className="ftr-items">
							Our Story
						</Link>
						<Link to="#!" className="ftr-items">
							Career
						</Link>
						<Link to="#!" className="ftr-items">
							Terms & Conditions
						</Link>
						<Link to="#!" className="ftr-items">
							Privacy & Cookie Policy
						</Link>
					</div>
					<div className="ftr-list">
						<Link to="#!" className="ftr-head">
							CONTACT
						</Link>
						<Link to="#!" className="ftr-items">
							1-888-923-8044
						</Link>
						<Link to="#!" className="ftr-items">
							1-888-923-8055
						</Link>
						<Link to="#!" className="ftr-items">
							help@allbirds.com
						</Link>
						<Link to="#!" className="ftr-items">
							support@allbirds.com
						</Link>
					</div>
				</div>
			</div>

			<Footbar imgSrc={Payment} />

			<ScrollToTop />
		</footer>
	);
};

export default Footer;
