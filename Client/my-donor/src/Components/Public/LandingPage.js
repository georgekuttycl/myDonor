import React from "react";

// core components
import ExamplesNavbar from "./ExamplesNavbar";
import LandingPageHeader from "./LandingPageHeader";
import DemoFooter from "./DemoFooter";
import { Outlet } from "react-router-dom";

function LandingPage() {
	document.documentElement.classList.remove("nav-open");
	React.useEffect(() => {
		document.body.classList.add("profile-page");
		return function cleanup() {
		document.body.classList.remove("profile-page");
		};
	});
	return (
		<div >
		<ExamplesNavbar />
		<div className="main">
			<Outlet/>
		</div>
		<DemoFooter />
		</div>
	);
}

export default LandingPage;
