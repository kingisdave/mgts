import React, { Component } from 'react';

class Footer extends Component {
	render() {
		return (
			<div className="w-100 pt-1 text-center sticky-bottom footer">
				<p>Copyright &copy;{new Date().getFullYear()} </p>
			</div>
		);
	}
}

export default Footer;