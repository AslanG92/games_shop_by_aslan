import cls from "./SideMenu.module.css";

export default function NavListItem({ item }) {
	return (
		<li>
			<a href="#">
				<i className={`bi ${item.icon}`}></i>
				<span className={cls.navName}>{item.name}</span>
			</a>
		</li>
	);
}
