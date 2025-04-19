"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

import { BsFillBookmarksFill } from "react-icons/bs";

import Image from "next/image";
import { Button } from "../ui/Button";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<header className=" flex items-center justify-center">
			<div className="navbar w-full container flex items-center bg-white p-4 rounded-lg my-3">
				<div className="flex items-center  gap-6 flex-1">
					<div className="flex sm:hidden relative">
						<button
							type="button"
							tabIndex={0}
							onClick={() => setIsOpen((prev) => !prev)}
							className="cursor-pointer"
						>
							{isOpen ? (
								<IoMdClose className=" text-2xl" />
							) : (
								<IoIosMenu className=" text-2xl" />
							)}
						</button>
						<MobileMenu isOpen={isOpen} />
					</div>

					<Image
						src={
							"https://invitrocapital.com/wp-content/uploads/2024/10/white-01-svg.svg"
						}
						alt="logo"
						width={120}
						height={35}
						className="px-2 bg-blue-400 rounded-xl"
					/>

					<Navbar />
				</div>
				<div className="flex items-center gap-4">
					<Button>Contact Us</Button>
					<div className="p-2 cursor-pointer" title="Your Booking">
						<BsFillBookmarksFill />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
