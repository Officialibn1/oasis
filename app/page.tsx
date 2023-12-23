import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CommunityText from "./components/CommunityText";
import OasisHeart from "./components/ui/OasisHeart";
import OasisTechnology from "./components/OasisTechnology";
import OasisInterchain from "./components/OasisInterchain";
import JoinOasis from "./components/JoinOasis";

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

			{/* Oasis technology section */}
			<OasisTechnology />

			{/* Oasis Interchain section */}
			<OasisInterchain />

			{/* Join Oasis section */}
			<JoinOasis />
		</section>
	);
}
