"use client";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import cls from "./Main.module.css";
import Header from "../Header/Header";

export default function Main() {
	const [active, setActive] = useState(false);

	const handeToggleActive = () => {
		setActive(!active);
	};

	return (
		<main className={cls.main}>
			<SideMenu active={active} />
			<div className={`${cls.banner} ${active ? cls.active : undefined}`}>
				<Header toggleActive={handeToggleActive} />
			</div>
		</main>
	);
}
