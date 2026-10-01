"use client";
import { useState, useEffect } from "react";
import { useGameStore } from "@/store/useGameStore";
import Main from "@/app/main/page";
import BagGameCard from "@/components/Bag/BagGameCard"; // Путь к нашей новой компактной карточке
import cls from "./page.module.css";

export default function MyBag() {
	const bag = useGameStore((state) => state.bag);
	const getCartTotal = useGameStore((state) => state.getCartTotal);

	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setIsMounted(true);
	}, []);

	return (
		<Main>
			<section id="bag" className={`${cls.section} ${cls.active}`}>
				<div className="container-fluid mt-2">
					<div className="row mb-4">
						<div className="col-lg-12">
							<h1 className={cls.sectionTitle}>My Bag</h1>
						</div>
					</div>

					{!isMounted ? (
						<div className="text-center w-100 my-5">
							<h4 className="text-muted">Loading your bag...</h4>
						</div>
					) : bag.length > 0 ? (
						<div className="row align-items-start">
							<div className="col-lg-8">
								{bag.map((game) => (
									<BagGameCard key={game._id} game={game} />
								))}
							</div>

							<div className="col-lg-4 mt-4 mt-lg-0">
								<div className={`${cls.cartSummary} p-4 rounded-3`}>
									<h2 className="mb-4">Order Summary</h2>

									<div className={`${cls.gamesCount} d-flex justify-content-between mb-2`}>
										<span>Games count:</span>
										<span>{bag.length}</span>
									</div>

									<div className={`${cls.gamesTotal} d-flex justify-content-between align-items-center mb-4`}>
										<span className="fs-5">Total Price:</span>

										<span className={`${cls.totalPrice} fs-3`}>${getCartTotal().toFixed(2)}</span>
									</div>

									<button className={`${cls.checkoutBtn} w-100 py-2.5 rounded-3`}>Proceed to Checkout</button>
								</div>
							</div>
						</div>
					) : (
						<div className="text-center w-100 my-5">
							<h3>Your bag is empty...</h3>
							<p>Go to the shop and add some amazing games!</p>
						</div>
					)}
				</div>
			</section>
		</Main>
	);
}
