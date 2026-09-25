"use client";
import { useState } from "react";
import NavListItem from "./NavListItem";
import cls from "./SideMenu.module.css";
import { navListData } from "@/data/navListData";
import { navListSocialItem } from "@/data/navListSocialItem";
import NavListSocialItem from "./NavListSocialItem";

export default function SideMenu() {
	const [navData, setNavData] = useState(navListData);
	const [navSocialData, setNavSocialData] = useState(navListSocialItem);
	return (
		<div className={cls.sideMenu}>
			<a href="#" className={cls.logo}>
				<i className="bi bi-controller"></i>
				<span className={cls.brand}>{"Let's Play"}</span>
			</a>

			<ul className={cls.nav}>
				{navData.map((item) => (
					<NavListItem key={item._id} item={item} />
				))}
			</ul>

			<ul className={cls.social}>
				{navSocialData.map((item) => (
					<NavListSocialItem key={item._id} item={item} />
				))}
			</ul>
		</div>
	);
}
