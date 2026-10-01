"use client";
import NavListItem from "./NavListItem";
import cls from "./SideMenu.module.css";
import { navListData } from "@/data/navListData";
import { navListSocialItem } from "@/data/navListSocialItem";
import NavListSocialItem from "./NavListSocialItem";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SideMenu({ active }) {
	const pathname = usePathname();

	return (
		<div className={`${cls.sideMenu} ${Boolean(active) ? cls.active : ""}`}>
			<Link href="/" className={cls.logo}>
				<i className="bi bi-controller"></i>
				<span className={cls.brand}>{"Play"}</span>
			</Link>

			<ul className={cls.nav}>
				{navListData.map((item) => {
					const itemPath = item.target === "home" ? "/" : `/${item.target}`;
					const isCurrentActive = pathname === itemPath;

					return <NavListItem key={item._id} item={item} isClicked={isCurrentActive} />;
				})}
			</ul>

			<ul className={cls.social}>
				{navListSocialItem.map((item) => (
					<NavListSocialItem key={item._id} item={item} />
				))}
			</ul>
		</div>
	);
}
