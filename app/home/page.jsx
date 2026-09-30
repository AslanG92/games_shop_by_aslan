"use client";
import GameCard from "@/components/Home/GameCard";
import GameSwiper from "@/components/Home/GameSwiper";
import cls from "./page.module.css";
import gamesData from "@/data/gamesData.json";

export default function Home() {
	const promoGames = gamesData.filter((game) => game.discount);

	return (
		<section id="home" className={`${cls.home} ${cls.active}`}>
			<div className="container-fluid">
				<div className="row">
					<GameSwiper games={gamesData} />
				</div>

				<div className="row mb-4 mt-4">
					<div className="col-lg-6">
						<h2 className={cls.sectionTitle}>
							Hot Sale <i className="bi bi-fire"></i>
						</h2>
					</div>

					<div className="col-lg-6 d-flex justify-content-end align-items-center">
						<a href="#" className={cls.viewMore} aria-label="view more games link">
							View More Games <i className="bi bi-arrow-bar-right"></i>
						</a>
					</div>
				</div>

				<div className="row">
					{promoGames.map((game) => (
						<GameCard key={game._id} game={game} />
					))}
				</div>
			</div>
		</section>
	);
}
