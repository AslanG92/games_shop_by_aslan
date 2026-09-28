import cls from "./SideMenu.module.css";

export default function NavListItem({ item, isClicked, onClick }) {
	return (
		<li>
			<a
				href="#"
				onClick={(e) => {
					e.preventDefault();
					onClick();
					window.dispatchEvent(new Event("resetHeaderIcons"));
				}}
				className={`${cls.navLink} ${isClicked ? cls.clicked : undefined}`}
				aria-label="icon"
			>
				<i className={`bi ${item.icon}`}></i>
				<span className={cls.navName}>{item.name}</span>
			</a>
		</li>
	);
}
