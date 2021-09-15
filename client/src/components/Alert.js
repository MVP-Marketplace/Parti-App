//Ask Joe what this is being used for (we deleted Alert1 because it wasn't being used)

import React, { useState, useEffect } from 'react';

export default function Alert({ msg, type }) {
	const [show, setShow] = useState(false);
	useEffect(() => {
		if (msg) {
			setShow(true);
			setInterval(() => {
				setShow(false);
			}, 2000);
		}
	}, [msg]);
	return <>{show && <div className={`alert alert-${type}`}>{msg}</div>}</>;
}
