import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CommunityText from "./components/CommunityText";

export default function Page() {
	return (
		<section>
			{/* Navbar component */}
			<Navbar />

			{/* hero container */}
			<Hero />

			{/* community text */}
			<CommunityText />
		</section>
	);
}
