import cls from "./GameRating.module.css";

export default function GameRating({ rating }) {
	const fullStarsCount = Math.floor(rating);
	const hasHalfStar = rating % 1 >= 0.5;
	const fullStarsArray = Array.from({ length: fullStarsCount });

	return (
		<div className={cls.gameRating}>
			{fullStarsArray.map((_, index) => (
				<i key={`full-${index}`} className="bi bi-star-fill"></i>
			))}
			{hasHalfStar && <i className="bi bi-star-half"></i>}
		</div>
	);
}
