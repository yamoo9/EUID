import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

// const handle = (props, ref) => <Comp {...props} forwardedRef={ref} />;
// const name = Comp.displayName || Comp.name;
// handle.displayName = `withForwardRef(${name})`;
// return forwardRef(handle);

const withHelmet = (Comp, title) => {
	const handle = (props) => (
		<Fragment>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<Comp {...props} />
		</Fragment>
	);
	const name = Comp.displayName || Comp.name;
	handle.displayName = `withHelmet(${name})`;
	return handle;
};

export default withHelmet;
