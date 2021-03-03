import React from "react";
import { Navbar } from "./navbar.js";
import { MyBody } from "./body.js";
import { Footer } from "./footer.js";
//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<MyBody />
			<Footer />
		</div>
	);
}
