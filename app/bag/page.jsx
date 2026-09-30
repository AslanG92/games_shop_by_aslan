"use client";
import Main from "@/app/main/page";
import cls from "./page.module.css";

export default function MyBag() {
	return (
		<Main>
			<section id="bag" className={`${cls.section} ${cls.active}`}>
				<h1>My Bag</h1>
			</section>
		</Main>
	);
}
