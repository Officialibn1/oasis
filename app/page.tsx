import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Page() {
	return (
		<section>
			{/* Navbar component */}
			<Navbar />

			{/* hero container */}
			<Hero />
		</section>
	);
}
