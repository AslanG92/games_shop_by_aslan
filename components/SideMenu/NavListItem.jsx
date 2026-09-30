import cls from "./SideMenu.module.css";
import Link from "next/link";

export default function NavListItem({ item, isClicked }) {
	const pagePath = item.target === "home" ? "/" : `/${item.target}`;

	const handleLinkClick = () => {
		if (typeof window !== "undefined") {
			window.dispatchEvent(new Event("resetHeaderIcons"));
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
				<span className={cls.navName}>{item.name}</span>
			</Link>
		</li>
	);
}
