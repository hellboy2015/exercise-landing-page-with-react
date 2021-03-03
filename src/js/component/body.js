import React from "react";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";

export function MyBody() {
	const cardInfo = [
		[
			"https://picsum.photos/id/237/500/325",
			"https://picsum.photos/id/238/500/325",
			"https://picsum.photos/id/239/500/325",
			"https://picsum.photos/id/240/500/325"
		],
		["Title 1", "Title 2", "Title 3", "Title 4"],
		[
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisi.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisi.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisi.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisi."
		]
	];

	const badgeStyles = {
		//write the span styles here
		background: "red",
		color: "white"
	};

	const cards = [];

	for (let i = 0; i < 4; i++) {
		cards.push(
			<Card
				key={i}
				url={cardInfo[0][i]}
				title={cardInfo[1][i]}
				content={cardInfo[2][i]}
			/>
		);
	}

	return (
		<div>
			<Jumbotron />
			<div className="album py-5 bg-light">
				<div className="container">
					<div className="row">{cards}</div>
				</div>
			</div>
		</div>
	);
}
