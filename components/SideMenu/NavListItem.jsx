import cls from "./SideMenu.module.css";
import Link from "next/link";

export default function NavListItem({ item, isClicked, onClick, navOnClick }) {
	const pagePath = item.target === "home" ? "/" : `/${item.target}`;

	return (
		<li>
			<Link
				href={pagePath}
				onClick={() => {
					onClick();
					navOnClick(item._id);
					window.dispatchEvent(new Event("resetHeaderIcons"));
				}}
				className={`${cls.navLink} ${isClicked ? cls.clicked : undefined}`}
				aria-label="icon"
			>
				<i className={`bi ${item.icon}`}></i>
				<span className={cls.navName}>{item.name}</span>
			</Link>
		</li>
	);
}
