import React, { useState, useEffect, useRef } from 'react'

export function useComponentVisible(initialIsVisible, userDetails) {
	const [isComponentVisible, setIsComponentVisible] = useState(
		initialIsVisible
	);
	const ref = useRef(null);

	// const handleHideDropdown = (event: KeyboardEvent) => {
	// 	if (event.key === "Escape") {
	// 		setIsComponentVisible(false);
	// 	}
	// };

	const test = () => {

	}

	const handleClickOutside = e => {
		if(ref.current && ref.current.contains(e.target)) {
			setIsComponentVisible(true);
		}
		if(ref.current && !ref.current.contains(e.target)) {
			setIsComponentVisible(false);
		}
	};

	useEffect(() => {
		// document.addEventListener("keydown", handleHideDropdown, true);
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			// document.removeEventListener("keydown", handleHideDropdown, true);
			document.removeEventListener("click", handleClickOutside, true);
		};
	});

	return { ref, isComponentVisible, setIsComponentVisible };
}