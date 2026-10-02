"use client";
import { useState, useEffect } from "react";
import cls from "./SideMenu.module.css";
import Link from "next/link";
import { useGameStore } from "@/store/useGameStore";

export default function NavListItem({ item, isClicked }) {
	const pagePath = item.target === "home" ? "/" : `/${item.target}`;
	const toggleMenu = useGameStore((state) => state.toggleMenu);
	const isMenuCollapsed = useGameStore((state) => state.isMenuCollapsed);

	const [isMounted, setIsMounted] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setIsMounted(true);

		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const handleLinkClick = () => {
		if (typeof window !== "undefined") {
			window.dispatchEvent(new Event("resetHeaderIcons"));
			if (window.innerWidth <= 768) {
				toggleMenu();
			}
		}
	};

	return (
		<li>
			<Link
				href={pagePath}
				onClick={handleLinkClick}
				className={`${cls.navLink} ${isClicked ? cls.clicked : ""}`}
				aria-label={item.name}
			>
				<i className={`bi ${item.icon}`}></i>

				{isMounted && (isMobile || !isMenuCollapsed) && <span className={cls.navName}>{item.name}</span>}
			</Link>
		</li>
	);
}
