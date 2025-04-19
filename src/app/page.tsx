"use client";
import { Button } from "@/components/ui/Button";
import BG from "../../public/images/heroBg.png";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();

	return (
		<div
			style={{
				backgroundImage: `url(${BG.src})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "100% 100%",
			}}
			className="grid items-center justify-items-center h-[calc(100vh-93px)]    font-[family-name:var(--font-geist-sans)]"
		>
			<main className="flex flex-col items-center">
				<h1 className="text-[50px] md:text-[120px] lg:text-[200px] tracking-wider	 font-bold text-blue-400">
					Healthcare
				</h1>
				<p className="text-lg m:text-xl lg:text-2xl font-bold text-gray-800 px-2">
					Because Your Health Deserves More Than Just Treatment – It Deserves
					Genuine Care, Innovation, and Dedication.
				</p>
				<p className="text-md md:text-lg lg:text-xl font-bold text-gray-800 py-2">
					Caring for You Like Family
				</p>
				<Button
					size="large"
					className="m-3"
					onClick={() => router.push("/doctors")}
				>
					Discover our Doctors
				</Button>
			</main>
		</div>
	);
}
