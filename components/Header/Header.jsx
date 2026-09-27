"use client";
import { useState, useEffect } from "react";
import cls from "./Header.module.css";
import userImage from "../../public/images/user.webp";
import HeaderIcons from "./HeaderIcons";

export default function Header({ toggleActive }) {
	const [activeIcon, setActiveIcon] = useState(null);

	useEffect(() => {
		const reset = () => setActiveIcon(null);
		window.addEventListener("resetHeaderIcons", reset);
		return () => window.removeEventListener("resetHeaderIcons", reset);
	}, []);

	const handleIconClick = (e, iconName) => {
		e.preventDefault();
		setActiveIcon(iconName);
		window.dispatchEvent(new Event("resetSidebarMenu"));
	};

	return (
		<header className={cls.header}>
			<a href="#" className={cls.menu} onClick={toggleActive}>
				<i className="bi bi-sliders"></i>
			</a>

			<HeaderIcons activeIcon={activeIcon} handleIconClick={handleIconClick} userImage={userImage} />
		</header>
	);
}
