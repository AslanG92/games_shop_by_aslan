import GameSwiper from "./GameSwiper";
import cls from "./Home.module.css";

export default function Home({ games }) {
	return (
		<section id="home" className={`${cls.home} ${cls.active}`}>
			<div className="container-fluid">
				<div className={cls.row}>
					<GameSwiper games={games} />
				</div>
			</div>
		</section>
	);
}
