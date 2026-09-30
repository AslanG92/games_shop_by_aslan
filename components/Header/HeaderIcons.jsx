"use client";
import cls from "../../app/header/page.module.css";
import userImg from "../../public/images/user.webp";

export default function UserItems() {
	return (
		<div className={cls.userItems}>
			<a href="#" className={cls.icon}>
				<i className="bi bi-heart-fill"></i>
				<span className={cls.like}>0</span>
			</a>

			<a href="#" className={cls.icon}>
				<i className="bi bi-bag-check-fill"></i>
				<span className={cls.bag}>0</span>
			</a>

			<div className={cls.avatar}>
				<a href="#">
					<img src={userImg.src} alt="User avatar" />
				</a>

				<div className={cls.user}>
					<span>User Name</span>
					<a href="#">View Profile</a>
				</div>
			</div>
		</div>
	);
}
