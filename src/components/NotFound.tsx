import React, { Component } from "react";
import notfound from "../styles/assets/notfound.png";

class NotFound extends Component {
	render() {
		return (
			<div>
				<img src={notfound} />
			</div>
		);
	}
}

export default NotFound;
