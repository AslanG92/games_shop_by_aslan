"use client";
import { useState, useEffect } from "react";
import { useGameStore } from "@/store/useGameStore";
import Main from "@/app/main/page";
import GameCard from "@/components/Home/GameCard";
import cls from "./page.module.css";

export default function MyLibrary() {
	const library = useGameStore((state) => state.library);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setIsMounted(true);
	}, []);

	return (
		<Main>
			<section id="library" className={`${cls.section} ${cls.active}`}>
				<div className="container-fluid mt-2">
					<div className="row mb-4 mx-0">
						<div className="col-lg-12 d-flex justify-content-center">
							<h1 className={cls.sectionTitle}>My Library</h1>
						</div>
					</div>

					<div className="row gy-4 justify-content-center mx-0">
						{!isMounted ? (
							<div className="text-center w-100 my-5">
								<h4>Loading library...</h4>
							</div>
						) : library.length > 0 ? (
							library.map((game) => <GameCard key={game._id} game={game} />)
						) : (
							<div className={`${cls.empty} text-center w-100 my-5`}>
								<h4>Your library is empty...</h4>
								<p>Click the heart icon on any game to add it here!</p>
							</div>
						)}
					</div>
				</div>
			</section>
		</Main>
	);
}
