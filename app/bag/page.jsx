"use client";
import { useState, useEffect } from "react";
import { useGameStore } from "@/store/useGameStore";
import Main from "@/app/main/page";
import BagGameCard from "@/components/Bag/BagGameCard";
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
					<div className="row mb-4 mx-0">
						<div className="col-lg-12 d-flex justify-content-center">
							<h1 className={cls.sectionTitle}>My Bag</h1>
						</div>
					</div>

					{!isMounted ? (
						<div className="text-center w-100 my-5">
							<h4 className="text-muted">Loading your bag...</h4>
						</div>
					) : bag.length > 0 ? (
						<div className="row gy-4 justify-content-center mx-0">
							<div className="col-lg-12">
								<div className="row gy-3 justify-content-center">
									{bag.map((game) => (
										<div key={game._id} className="col-lg-12">
											<BagGameCard game={game} />
										</div>
									))}
								</div>
							</div>

							<div className={cls.summaryWrapper}>
								<div className={`${cls.cartSummary} p-4 rounded-3`}>
									<h2>Your order:</h2>

									<div className={`${cls.gamesCount} d-flex justify-content-between mb-2`}>
										<span>Quantity:</span>
										<span className={cls.gamesCountNumber}>{bag.length}</span>
									</div>

									<div className={`${cls.gamesTotal} d-flex justify-content-between mb-4`}>
										<span className="fs-5">Amount:</span>
										<span className={`${cls.totalPrice} fs-3`}>${getCartTotal().toFixed(2)}</span>
									</div>

									<button className={`${cls.checkoutBtn} w-100 py-2.5 rounded-3`}>Proceed to Checkout</button>
								</div>
							</div>
						</div>
					) : (
						<div className={`${cls.empty} text-center w-100 my-5`}>
							<h3>Your bag is empty...</h3>
							<p>Go to the shop and add some amazing games!</p>
						</div>
					)}
				</div>
			</section>
		</Main>
	);
}
