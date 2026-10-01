import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useGameStore = create(
	persist(
		(set, get) => ({
			library: [],
			toggleLike: (game) => {
				const currentLibrary = get().library;
				const isExist = currentLibrary.some((item) => item._id === game._id);

				if (isExist) {
					set({ library: currentLibrary.filter((item) => item._id !== game._id) });
				} else {
					set({ library: [...currentLibrary, game] });
				}
			},

			isGameLiked: (gameId) => {
				return get().library.some((item) => item._id === gameId);
			},

			bag: [],
			addToBag: (game) => {
				const currentBag = get().bag;
				const isExist = currentBag.some((item) => item._id === game._id);

				if (!isExist) {
					set({ bag: [...currentBag, game] });
				}
			},

			removeFromBag: (gameId) => {
				const currentBag = get().bag;
				set({ bag: currentBag.filter((item) => item._id !== gameId) });
			},

			isGameInBag: (gameId) => {
				return get().bag.some((item) => item._id === gameId);
			},

			getCartTotal: () => {
				const currentBag = get().bag;
				return currentBag.reduce((total, game) => {
					const finalPrice = game.discount ? game.price * (1 - game.discount) : game.price;
					return total + finalPrice;
				}, 0);
			},

			isMenuCollapsed: false,

			toggleMenu: () =>
				set((state) => ({
					isMenuCollapsed: !state.isMenuCollapsed,
				})),
		}),
		{
			name: "game-shop-storage",
			storage: createJSONStorage(() => (typeof window !== "undefined" ? window.localStorage : null)),
		},
	),
);
