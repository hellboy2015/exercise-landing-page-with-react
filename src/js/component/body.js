import React from "react";
import { Jumbotron } from "./jumbotron";
import { Card } from "./card";

export function MyBody() {
	const cardInfo = [
		"https://picsum.photos/id/",
		"Title ",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nisi."
	];

	const cardsToBuild = 30;

	const badgeStyles = {
		//write the span styles here
		background: "red",
		color: "white"
	};

	const cards = [];

	for (let i = 0; i < cardsToBuild; i++) {
		cards.push(
			<Card
				key={i}
				url={cardInfo[0] + i + "/500/325"}
				title={cardInfo[1] + (i + 1)}
				content={cardInfo[2]}
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
