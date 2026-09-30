"use client";
import { useEffect, useState } from "react";
import NavListItem from "./NavListItem";
import cls from "./SideMenu.module.css";
import { navListData } from "@/data/navListData";
import { navListSocialItem } from "@/data/navListSocialItem";
import NavListSocialItem from "./NavListSocialItem";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SideMenu({ active }) {
	const [navData, setNavData] = useState(navListData);
	const [navSocialData, setNavSocialData] = useState(navListSocialItem);
	const pathname = usePathname();

	const handleNavOnClick = (id) => {
		const newNavData = navData.map((nav) => {
			return {
				...nav,
				active: nav._id === id,
			};
		});
		setNavData(newNavData);
	};

	return (
		<div className={`${cls.sideMenu} ${active ? cls.active : undefined}`}>
			<Link href="/" className={cls.logo}>
				<i className="bi bi-controller"></i>
				<span className={cls.brand}>{"Play"}</span>
			</Link>

			<ul className={cls.nav}>
				{navData.map((item) => {
					const itemPath = item.target === "home" ? "/" : `/${item.target}`;
					const isCurrentActive = pathname === itemPath;
					return (
						<NavListItem
							key={item._id}
							item={item}
							isClicked={isCurrentActive}
							onClick={() => handleNavOnClick(item._id)}
							navOnClick={handleNavOnClick}
						/>
					);
				})}
			</ul>

			<ul className={cls.social}>
				{navSocialData.map((item) => (
					<NavListSocialItem key={item._id} item={item} />
				))}
			</ul>
		</div>
	);
}
