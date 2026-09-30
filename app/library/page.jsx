"use client";
import Main from "@/app/main/page";
import cls from "./page.module.css";

export default function MyLibrary() {
	return (
		<Main>
			<section id="library" className={`${cls.section} ${cls.active}`}>
				<h1>My Library</h1>
			</section>
		</Main>
	);
}
