import GameSwiper from "./GameSwiper";
import cls from "./Home.module.css";

export default function Home({ games }) {
	return (
		<section id="home" className={`${cls.home} ${cls.active}`}>
			<div className="container-fluid">
				<div className="row">
					<GameSwiper games={games} />
				</div>
				<div className="row">
					<div className="col-lg-6">
						<h2 className={cls.sectionTitle}>Games on Promotion:</h2>
					</div>

					<div className="col-lg-6 d-flex justify-content-end align-items-center">
						<a href="#" className={cls.viewMore} aria-label="view more games link">
							View More Games <i className="bi bi-arrow-bar-right"></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
