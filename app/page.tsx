import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CommunityText from "./components/CommunityText";
import OasisHeart from "./components/ui/OasisHeart";

export default function Page() {
	return (
		<section>
			{/* Navbar component */}
			<Navbar />

			{/* hero container */}
			<Hero />

			{/* community text */}
			<CommunityText />

			{/* cosmos heart text */}
			<OasisHeart />
		</section>
	);
}
