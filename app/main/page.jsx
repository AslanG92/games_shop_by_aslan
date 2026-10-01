"use client";
import { useGameStore } from "@/store/useGameStore";
import SideMenu from "@/components/SideMenu/SideMenu";
import cls from "@/app/main/page.module.css";
import Header from "@/components/Header/Header";

export default function Main({ children }) {
	const isMenuCollapsed = useGameStore((state) => state.isMenuCollapsed);
	const toggleMenu = useGameStore((state) => state.toggleMenu);

	return (
		<main className={cls.main}>
			<SideMenu active={isMenuCollapsed} />

			<div className={`${cls.banner} ${isMenuCollapsed ? cls.active : ""}`}>
				<Header toggleActive={toggleMenu} />
				<div className="container-fluid">{children}</div>
			</div>
		</main>
	);
}
