"use client";
import Main from "@/app/main/page";
import cls from "./page.module.css";

export default function CategoriesPage() {
	return (
		<Main>
			<section id="categories" className={`${cls.section} ${cls.active}`}>
				<h1>Categories</h1>
			</section>
		</Main>
	);
}
