"use client";
import cls from "./Header.module.css";
import HeaderIcons from "@/components/Header/HeaderIcons";

export default function Header({ toggleActive }) {
	return (
		<header className={cls.header}>
			<a href="#" className={cls.menu} onClick={toggleActive} aria-label="menu">
				<i className="bi bi-sliders"></i>
			</a>

			<HeaderIcons />
		</header>
	);
}
