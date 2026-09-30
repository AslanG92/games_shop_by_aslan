import cls from "./GameCard.module.css";
import GameRating from "./GameRating";

export default function GameCard({ game }) {
	const platformIcons = {
		pc: "bi bi-steam",
		playstation: "bi bi-playstation",
		xbox: "bi bi-xbox",
	};

	const platformsArray = game.platform ? game.platform.split(" ") : [];

	return (
		<div className="col-xl-3 col-lg-4 col-md-6">
			<div className={cls.gameCard}>
				<img src={game.img} alt={game.title} className="img-fluid" />

				<div className={cls.gameFeature}>
					<div className={cls.platformsList}>
						{platformsArray.map((plat) => {
							const cleanPlat = plat.toLowerCase();
							const iconClass = platformIcons[cleanPlat];
							return (
								<span key={cleanPlat} className={cls.gamePlatform} title={plat}>
									<i className={iconClass}></i>
								</span>
							);
						})}
					</div>

					<GameRating rating={game.rating} />
				</div>

				<div className={`${cls.gameTitle} mt-4 mb-3`}>{game.title}</div>

				<div className={cls.gamePrice}>
					{game.discount && (
						<>
							<span className={cls.currentPrice}>${((1 - game.discount) * game.price).toFixed(2)}</span>

							<span className={cls.discount}>
								<i>{game.discount * 100}%</i>
							</span>
						</>
					)}

					<span className={game.discount ? cls.prevPrice : cls.price}>${game.price.toFixed(2)}</span>
				</div>

				<a href="#" className={cls.like} aria-label="like">
					<i className="bi bi-heart-fill"></i>
				</a>

				<a href="#" className={cls.addBag} aria-label="bag">
					<i className="bi bi-bag-plus-fill"></i>
				</a>
			</div>
		</div>
	);
}
