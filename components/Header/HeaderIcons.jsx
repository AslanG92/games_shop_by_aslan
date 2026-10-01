"use client";
import { useState, useEffect } from "react";
import { useGameStore } from "@/store/useGameStore";
import cls from "@/components/Header/Header.module.css";
import userImg from "@/public/images/user.webp";
import Image from "next/image";

export default function UserItems() {
	const library = useGameStore((state) => state.library);
	const bag = useGameStore((state) => state.bag);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setIsMounted(true);
	}, []);

	return (
		<div className={cls.userItems}>
			<a href="#" className={cls.icon} aria-label="liked games">
				<i className="bi bi-heart-fill"></i>
				<span className={cls.like}>{isMounted ? library.length : 0}</span>
			</a>

			<a href="#" className={cls.icon} aria-label="shopping bag">
				<i className="bi bi-bag-check-fill"></i>
				<span className={cls.bag}>{isMounted ? bag.length : 0}</span>
			</a>

			<div className={cls.avatar}>
				<a href="#" aria-label="user profile">
					<Image src={userImg} alt="User avatar" width={40} height={40} unoptimized />
				</a>

				<div className={cls.user}>
					<span>Nate Drake</span>
					<a href="#">View Profile</a>
				</div>
			</div>
		</div>
	);
}
