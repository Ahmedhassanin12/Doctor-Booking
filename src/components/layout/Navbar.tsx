import { FRONTEND_ROUTES } from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
	const pathname = usePathname();

	return (
		<ul className="hidden sm:flex items-center gap-5">
			{FRONTEND_ROUTES.map((link) => (
				<li
					key={link.title}
					className={`${pathname === link.href ? "font-semibold  text-blue-400 border-b-3  border-blue-400" : "text-[#828282]"} `}
				>
					<Link href={link.href}>{link.title}</Link>
				</li>
			))}
		</ul>
	);
};

export default Navbar;
