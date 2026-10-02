"use client";
import Main from "@/app/main/page";
import { useState } from "react";
import { filterListData } from "@/data/filterListData";
import gamesData from "@/data/gamesData.json";
import cls from "./page.module.css";
import GameCard from "@/components/Home/GameCard";

export default function CategoriesPage() {
	const [filters, setFilters] = useState(filterListData);
	const [data, setData] = useState(gamesData);

	const handleFilterGames = (category) => {
		setFilters(
			filters.map((filter) => ({
				...filter,
				active: filter.name === category,
			})),
		);
		let filtered = gamesData;
		if (category !== "all") {
			filtered = filtered.filter((game) => game.category.includes(category));
		}
		if (text.trim() !== "") {
			filtered = filtered.filter((game) => game.title.toLowerCase().includes(text.toLowerCase()));
		}

		setData(filtered);
	};

	const [text, setText] = useState("");

	const handleSearchGames = (e) => {
		const query = e.target.value;
		setText(query);
		const activeFilter = filters.find((f) => f.active);
		const currentCategory = activeFilter ? activeFilter.name : "all";

		let filtered = gamesData;
		if (currentCategory !== "all") {
			filtered = filtered.filter((game) => game.category.includes(currentCategory));
		}
		filtered = filtered.filter((game) => game.title.toLowerCase().includes(query.toLowerCase()));
		setData(filtered);
	};

	return (
		<Main>
			<section id="categories" className={`${cls.section} ${cls.active}`}>
				<div className="container-fluid mt-2">
					<div className="row mx-0">
						<div className="col-lg-12 d-flex justify-content-start">
							<ul className={cls.filters}>
								{filters.map((filter) => (
									<li
										key={filter._id}
										className={`${filter.active ? cls.active : undefined}`}
										onClick={() => handleFilterGames(filter.name)}
									>
										{filter.name}
									</li>
								))}
							</ul>
						</div>

						<div className="row mx-0">
							<div className="col-lg-12 d-flex justify-content-start mt-2 ps-0">
								<div className={cls.search}>
									<i className="bi bi-search"></i>
									<input
										type="text"
										name="search"
										value={text}
										placeholder="Search..."
										onChange={handleSearchGames}
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="row gy-4 justify-content-center mx-0">
						{data.map((game) => (
							<GameCard key={game._id} game={game} />
						))}

						{data.length === 0 && (
							<div className="text-center w-100 my-5">
								<h4>No games found...</h4>
							</div>
						)}
					</div>
				</div>
			</section>
		</Main>
	);
}
