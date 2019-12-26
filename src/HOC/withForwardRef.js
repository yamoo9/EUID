import React, { forwardRef } from 'react';

const withForwardRef = (Comp) => {
	const handle = (props, ref) => <Comp {...props} forwardedRef={ref} />;
	const name = Comp.displayName || Comp.name;
	handle.displayName = `withForwardRef(${name})`;
	return forwardRef(handle);
};

export default withForwardRef;
