"use client";
import { useState } from "react";
import SideMenu from "@/components/SideMenu/SideMenu";
import cls from "./page.module.css";
import Header from "@/app/header/page";

export default function Main({ children }) {
	const [active, setActive] = useState(false);

	const handelToggleActive = () => {
		setActive(!active);
	};

	return (
		<main className={cls.main}>
			<SideMenu active={active} />
			<div className={`${cls.banner} ${active ? cls.active : undefined}`}>
				<Header toggleActive={handelToggleActive} />
				<div className="container-fluid">{children}</div>
			</div>
		</main>
	);
}
