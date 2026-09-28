"use client";
import { useEffect, useState } from "react";
import NavListItem from "./NavListItem";
import cls from "./SideMenu.module.css";
import { navListData } from "@/data/navListData";
import { navListSocialItem } from "@/data/navListSocialItem";
import NavListSocialItem from "./NavListSocialItem";

export default function SideMenu({ active }) {
	const [navData, setNavData] = useState(navListData);
	const [navSocialData, setNavSocialData] = useState(navListSocialItem);
	const [activeLinkId, setActiveLinkId] = useState(null);

	useEffect(() => {
		const resetMenu = () => setActiveLinkId(null);
		window.addEventListener("resetSidebarMenu", resetMenu);
		return () => window.removeEventListener("resetSidebarMenu", resetMenu);
	}, []);

	return (
		<div className={`${cls.sideMenu} ${active ? cls.active : undefined}`}>
			<a
				href="#"
				className={cls.logo}
				onClick={(e) => {
					e.preventDefault();
					setActiveLinkId(null);
					window.dispatchEvent(new Event("resetHeaderIcons"));
				}}
				aria-label="logo"
			>
				<i className="bi bi-controller"></i>
				<span className={cls.brand}>{"Play"}</span>
			</a>

			<ul className={cls.nav}>
				{navData.map((item) => (
					<NavListItem
						key={item._id}
						item={item}
						isClicked={item._id === activeLinkId}
						onClick={() => setActiveLinkId(item._id)}
					/>
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
