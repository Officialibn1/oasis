import React from "react";
import "@/app/components/styles/JoinOasis.css";
import { SiAtom } from "react-icons/si";
import { RiSeedlingFill } from "react-icons/ri";
import { PiBuildingsLight } from "react-icons/pi";

type JoinOasis = {
	title: string;
	heading: string;
	desc: string;
	icon: React.ReactNode;
};

const joinOasis: JoinOasis[] = [
	{
		title: "CONNECT",
		heading: "Connect World's",
		desc: "Grow a reality of your liking by connecting with different world's.",
		icon: <SiAtom />,
	},
	{
		title: "EVOLVE",
		heading: "Evolve as a Specie",
		desc: "Evolve you tribe as a specie as man has always been know to.",
		icon: <RiSeedlingFill />,
	},
	{
		title: "REVOLUTIONALIZE",
		heading: "Create a new Revolution",
		desc: "Create a new way of living, one that will speak in book's of history!.",
		icon: <PiBuildingsLight />,
	},
];

const JoinOasis = () => {
	return (
		<div className='sectionWrapper joinOasis'>
			<div>
				<h1 className='text-center'>Join the Oasis Metaverse</h1>
			</div>

			<div className='joinOasisCards'>
				{joinOasis.map((card, i) => (
					<div
						className='joinOasisCard'
						key={i}>
						<h3>{card.title}</h3>

						<h1>{card.heading}</h1>

						<p>{card.desc}</p>

						<div>
							<span>{card.icon}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default JoinOasis;
