import React from "react";
import "@/app/components/styles/OasisTechnology.css";

const textMatrix: {
	title: string;
	metric: string;
	metText?: string;
	desc: string;
}[] = [
	{
		title: "PROOF-OF-STAKE",
		metric: "99%",
		metText: `lower carbon emission`,
		desc: "Blockchain tech that truly scales.",
	},
	{
		title: "LOW FEES",
		metric: "$0.01",
		desc: "Enjoy the lowest fees – almost zero.",
	},
	{
		title: "VAST INFRASTRUCTURES",
		metric: "90B+ Acre",
		desc: "Accomodate any size of Virtual Real Estate",
	},
];

const OasisTechnology = () => {
	return (
		<div className='sectionWrapper oasisTechnology'>
			<h3>TECHNOLOGY</h3>
			<h1>
				The most trusted way to <br /> build on the Metaverse.
			</h1>

			<div className='oasisTechnologyContent'>
				<div className='techText'>
					<p>
						<span>Oasis Builder</span> is a state-of-the-art blockchain
						framework that powers the Oasis Metaverse Hub and its rapidly
						expanding orbit of sovereign chains.
					</p>

					<p>
						With the Oasis Blockchain technology you&apos;re assures to build
						the best structures in the Metaverse world, ranging from simple
						Duplex houses to Real Estate sized buildings.
					</p>
				</div>

				{textMatrix.map((card, i) => (
					<div
						className='techMetrixCard'
						key={i}>
						<h3>{card.title}</h3>

						<div>
							<h1>{card.metric}</h1>

							<p>{card.metText}</p>
						</div>

						<p>{card.desc}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default OasisTechnology;
