"use client";
import { useState, useEffect } from "react";
import { useGameStore } from "@/store/useGameStore";
import cls from "./GameCard.module.css";
import GameRating from "./GameRating";

export default function GameCard({ game }) {
	const toggleLike = useGameStore((state) => state.toggleLike);
	const isGameLiked = useGameStore((state) => state.isGameLiked(game._id));

	const addToBag = useGameStore((state) => state.addToBag);
	const isGameInBag = useGameStore((state) => state.isGameInBag(game._id));

	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setIsMounted(true);
	}, []);

	const platformIcons = {
		pc: "bi bi-steam",
		playstation: "bi bi-playstation",
		xbox: "bi bi-xbox",
	};

	const platformsArray = game.platform ? Array.from(new Set(game.platform.split(" "))) : [];

	const handleLikeClick = (e) => {
		e.preventDefault();
		toggleLike(game);
	};

	const handleBagClick = (e) => {
		e.preventDefault();
		addToBag(game);
	};

	const showLiked = isMounted && Boolean(isGameLiked);
	const showInBag = isMounted && Boolean(isGameInBag);

	return (
		<div className="col-xl-3 col-lg-4 col-md-6">
			<div className={cls.gameCard}>
				<img src={game.img} alt={game.title} className="img-fluid" />

				<div className={cls.gameFeature}>
					<div className={cls.platformsList}>
						{platformsArray.map((plat) => {
							const cleanPlat = plat.toLowerCase();
							const iconClass = platformIcons[cleanPlat];

							if (!iconClass) return null;

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
								<i>{Math.round(game.discount * 100)}%</i>
							</span>
						</>
					)}

					<span className={game.discount ? cls.prevPrice : cls.price}>${game.price.toFixed(2)}</span>
				</div>

				<a href="#" className={`${cls.like} ${showLiked ? cls.active : ""}`} onClick={handleLikeClick} aria-label="like">
					<i className="bi bi-heart-fill"></i>
				</a>

				<a href="#" className={`${cls.addBag} ${showInBag ? cls.active : ""}`} onClick={handleBagClick} aria-label="bag">
					<i className={showInBag ? "bi bi-bag-check-fill" : "bi bi-bag-plus-fill"}></i>
				</a>
			</div>
		</div>
	);
}
