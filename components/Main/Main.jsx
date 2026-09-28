"use client";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import cls from "./Main.module.css";
import Header from "../Header/Header";
import Home from "../Home/Home";

import gamesData from "@/data/gamesData.json";

export default function Main() {
	const [active, setActive] = useState(false);
	// const [games, setGames] = useState([]);

	const handelToggleActive = () => {
		setActive(!active);
	};

	// const fetchData = () => {
	// 	fetch("http://localhost:3000/data/gamesData.json")
	// 	.then(res => res.json())
	// 	.then(data => {setGames(data)})
	// };

	return (
		<main className={cls.main}>
			<SideMenu active={active} />
			<div className={`${cls.banner} ${active ? cls.active : undefined}`}>
				<Header toggleActive={handelToggleActive} />
				<div className="container-fluid">
					<Home games={gamesData} />
				</div>
			</div>
		</main>
	);
}
