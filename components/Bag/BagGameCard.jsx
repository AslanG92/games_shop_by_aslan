"use client";
import { useGameStore } from "@/store/useGameStore";
import cls from "./BagGameCard.module.css";

export default function BagGameCard({ game }) {
	const removeFromBag = useGameStore((state) => state.removeFromBag);
	const finalPrice = game.discount ? game.price * (1 - game.discount) : game.price;
	const platformIcons = {
		pc: "bi bi-steam",
		playstation: "bi bi-playstation",
		xbox: "bi bi-xbox",
	};

	const platformsArray = game.platform ? Array.from(new Set(game.platform.split(" "))) : [];

	return (
		<div className={`${cls.bagCard} d-flex align-items-center justify-content-between mb-3`}>
			<div className="d-flex align-items-center gap-3">
				<img src={game.img} alt={game.title} className={cls.bagImg} />

				<div>
					<h1 className={`${cls.bagTitle} mb-1`}>{game.title}</h1>

					<div className="d-flex gap-2 mt-1">
						{platformsArray.map((plat) => {
							const cleanPlat = plat.toLowerCase();
							const iconClass = platformIcons[cleanPlat];

							if (!iconClass) return null;

							return (
								<span key={cleanPlat} className={cls.bagPlatform} title={plat}>
									<i className={iconClass}></i>
								</span>
							);
						})}
					</div>
				</div>
			</div>

			<div className="d-flex align-items-center gap-4">
				<div className="text-end">
					{game.discount ? (
						<div className="d-flex flex-column">
							<span className={cls.currentPrice}>${finalPrice.toFixed(2)}</span>

							<span className={cls.prevPrice}>${game.price.toFixed(2)}</span>
						</div>
					) : (
						<span className={cls.currentPrice}>${game.price.toFixed(2)}</span>
					)}
				</div>

				<button className={cls.deleteBtn} onClick={() => removeFromBag(game._id)} aria-label="Remove game from bag">
					<i className="bi bi-trash3-fill"></i>
				</button>
			</div>
		</div>
	);
}
