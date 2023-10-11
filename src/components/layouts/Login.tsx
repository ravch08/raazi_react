import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="login-link user">
			<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 448 512">
				<path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
			</svg>

			<div className="sidebar-login">
				<div className="sidebar-head">
					<h2>Sign In</h2>
					<Link to="#!" id="close-sideLogin" className="close">
						<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 352 512">
							<path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
						</svg>
					</Link>
				</div>

				<div className="login-content">
					<form action="#!" method="post">
						<input type="text" name="username" placeholder="Username" className="input-username" />
						<input
							type="password"
							name="password"
							placeholder="Password"
							className="input-password"
						/>

						<span className="input-eye">
							<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 576 512">
								<path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z" />
							</svg>
						</span>

						<div className="form-row">
							<div className="checkbox">
								<input type="checkbox" name="rememberme" className="input-checkbox" />
								<span className="checkbox-label">Remember me</span>
							</div>
							<span>Lost your password?</span>
						</div>

						<button type="submit" className="btn-submit">
							Sign in
						</button>
						<button className="btn-outline">Create An Account</button>

						<button className="btn-facebook">
							<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 512 512">
								<path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
							</svg>
							<span>Continue with Facebook</span>
						</button>
						<button className="btn-google">
							<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 488 512">
								<path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
							</svg>
							<span>Continue with Google</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
