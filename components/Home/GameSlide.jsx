import { SwiperSlide } from "swiper/react";
import cls from "./GameSwiper.module.css";

export default function GameSlide({ game, active, toggleVideo }) {
	return (
		<SwiperSlide>
			<div className={cls.gameSlider}>
				<img src={game.img} alt="Game Poster" />
				<div className={`${cls.video} ${active ? "active" : undefined}`}>
					<iframe
						width="1280"
						height="720"
						title={game.title}
						allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						src={game.video}
					></iframe>
				</div>
				<div className={cls.content}>
					<h2>{game.title}</h2>
					<p>{game.description}</p>
					<div className={cls.buttons}>
						<a href="#" className={cls.orderBtn} aria-label="order btn link">
							Order Now
						</a>
						<a
							href="#"
							className={`${cls.playBtn} ${active ? "active" : undefined}`}
							onClick={toggleVideo}
							aria-label="play link"
						>
							<span className={cls.pause}>
								<i className="bi bi-pause-fill"></i>
							</span>

							<span className={cls.play}>
								<i className="bi bi-play-fill"></i>
							</span>
						</a>
					</div>
				</div>
			</div>
		</SwiperSlide>
	);
}
