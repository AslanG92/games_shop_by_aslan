import cls from "./SideMenu.module.css";

export default function NavListSocialItem({ item }) {
	return (
		<li>
			<a href="#" aria-label="social links">
				<i className={`bi ${item.icon}`}></i>
			</a>
		</li>
	);
}
