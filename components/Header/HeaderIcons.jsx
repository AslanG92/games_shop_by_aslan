"use client";
import cls from "./Header.module.css";
import userImg from "../../public/images/user.webp";

export default function UserItems({ activeIcon, handleIconClick, userImage }) {
	return (
		<div className={cls.userItems}>
			<a
				href="#"
				className={`${cls.icon} ${activeIcon === "heart" ? cls.clicked : undefined}`}
				onClick={(e) => handleIconClick(e, "heart")}
			>
				<i className="bi bi-heart-fill"></i>
				<span className={cls.like}>0</span>
			</a>

			<a
				href="#"
				className={`${cls.icon} ${activeIcon === "bag" ? cls.clicked : undefined}`}
				onClick={(e) => handleIconClick(e, "bag")}
			>
				<i className="bi bi-bag-check-fill"></i>
				<span className={cls.bag}>0</span>
			</a>

			<div className={`${cls.avatar} ${activeIcon === "avatar" ? cls.clicked : undefined}`}>
				<a href="#" onClick={(e) => handleIconClick(e, "avatar")}>
					<img src={userImg.src} alt="User avatar" />
				</a>
				<div className={cls.user}>
					<span>User Name</span>
					<a href="#" onClick={(e) => handleIconClick(e, "avatar")}>
						View Profile
					</a>
				</div>
			</div>
		</div>
	);
}
