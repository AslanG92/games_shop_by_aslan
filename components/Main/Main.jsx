import SideMenu from "../SideMenu/SideMenu";
import cls from "./Main.module.css";

export default function Main() {
	return (
		<main className={cls.main}>
			<SideMenu />
			<div className={cls.banner}></div>
		</main>
	);
}
