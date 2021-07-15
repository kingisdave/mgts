import React from 'react';

const classes = {
	smallRectangleLine: {
		height: '30px',
		width: '100%',
		background: '#E5E5E5',
		borderRadius: '5px',
	},
	smallCircle: {
		height: '30px',
		width: '30px',
		background: '#E5E5E5',
		borderRadius: '50%',
	},
	square: {
		height:'100px',
		width:'100px',
		background: '#E5E5E5',
		borderRadius: '5px',
	},
	rectangle: {
		height:'130px',
		width:'100%',
		background: '#E5E5E5',
		borderRadius: '5px',
	},
	verticalRectangle: {
		height:'250px',
		width:'100%',
		background: '#E5E5E5',
		borderRadius: '5px',
	}

}
const LazyLoader=(props)=>{ 

	React.useEffect(() => window.scrollTo(0, 0));
	return (
			<div className="" style={{height:'100vh'}}>
				<div className="row bg-white py-2">
					<div className="col-sm-12 col-md-5 col-lg-5 col-xl-5 d-md-block d-none">
						<div style={classes.smallRectangleLine}></div>
					</div>
					<div className="col-sm-12 col-md-5 col-lg-5 col-xl-5">
						<div style={classes.smallRectangleLine}></div>
					</div>
					<div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 d-md-block d-none"><div style={classes.smallCircle}></div></div>
				</div>
				<div className="row py-2">
					<div className="col-sm-12 col-md-2 col-lg-2 col-xl-2 d-md-block d-none">
						<div style={classes.square} className="mb-3"></div>
						<div style={classes.square} className="mb-3"></div>
						<div style={classes.square} className="mb-3"></div>
					</div>
					<div className="col-sm-12 col-md-10 col-lg-10 col-xl-10">
						<div style={classes.rectangle} className="mb-2"></div>
						<div className="d-flex justify-content-between mb-4">
							<div style={classes.smallRectangleLine} className="mb-2 mr-1"></div>
							<div style={classes.smallRectangleLine} className="mb-2"></div>
							<div style={classes.smallRectangleLine} className="mb-2 ml-1"></div>
						</div>
						<div className="row">
							<div className="col-sm-12 col-md-10 col-lg-10 col-xl-10">
								<div style={classes.rectangle} className="mb-2"></div>
								<div style={classes.rectangle} className="mb-4"></div>
								<div style={classes.rectangle} className="mb-1"></div>
								<div className="d-flex justify-content-between mb-1">
									<div style={classes.smallRectangleLine} className="mr-1"></div>
									<div style={classes.smallRectangleLine}></div>
									<div style={classes.smallRectangleLine} className="ml-1"></div>
								</div>
								<div className="d-flex justify-content-between mb-1">
									<div style={classes.smallRectangleLine} className="mr-1"></div>
									<div style={classes.smallRectangleLine}></div>
									<div style={classes.smallRectangleLine} className="ml-1"></div>
								</div>
								<div style={classes.verticalRectangle} className="mb-1"></div>
								<div className="d-flex justify-content-between mb-1 d-md-block d-none">
									<div style={classes.smallRectangleLine} className="mr-1"></div>
									<div style={classes.smallRectangleLine}></div>
								</div>
								<div className="d-flex justify-content-between mb-1">
									<div style={classes.smallRectangleLine} className="mr-1"></div>
									<div style={classes.smallRectangleLine}></div>
									<div style={classes.smallRectangleLine} className="ml-1"></div>
								</div>
							</div>
							<div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
								<div style={classes.smallRectangleLine} className="mb-2 rounded-pill"></div>
								<div style={classes.square} className="mb-2"></div>
								<div style={classes.square} className="mb-2"></div>
								<div style={classes.verticalRectangle} className="mb-2"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
	);
}

export default LazyLoader;