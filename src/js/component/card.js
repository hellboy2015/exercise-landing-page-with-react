import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="col-md-3">
			<div className="card mb-4 box-shadow">
				<img
					className="card-img-top"
					src={props.url}
					alt={props.title}
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.content}</p>
					<div className="d-flex justify-content-between align-items-center">
						<div className="btn-group">
							<button
								type="button"
								className="btn btn-sm btn-outline-secondary">
								View
							</button>
							<button
								type="button"
								className="btn btn-sm btn-outline-secondary">
								Edit
							</button>
						</div>
						<small className="text-muted">9 mins</small>
					</div>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	url: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.string
};
