import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function Clock() {
	const [time, setTime] = useState(new Date());

	const tick = () => {
		setTime(new Date());
	};

	useEffect(() => {
		const timerID = setInterval(tick, 1000);
		return () => {
			clearInterval(timerID);
		};
	});

	return <h1 className='display-3'>{moment(time).format('hh:mm:ss a')}</h1>;
}
