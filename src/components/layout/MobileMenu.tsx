import { FRONTEND_ROUTES } from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = ({ isOpen }: { isOpen: boolean }) => {
	const pathname = usePathname();

	return isOpen ? (
		<ul className="absolute z-20  bottom-[-100px] left-0 bg-white border border-gray-200 rounded-md  rounded-box  w-52 p-2 shadow-sm">
			{FRONTEND_ROUTES.map((link) => (
				<li
					key={link.title}
					className={`${pathname === link.href ? "font-semibold  text-blue-400 border-b-3  border-blue-400" : "text-[#828282]"} `}
				>
					<Link href={link.href}>{link.title}</Link>
				</li>
			))}
		</ul>
	) : null;
};

export default MobileMenu;
