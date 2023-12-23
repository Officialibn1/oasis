import React from "react";
import { FaLink } from "react-icons/fa";
import { IoDiamondSharp } from "react-icons/io5";
import { PiCoins } from "react-icons/pi";
import "@/app/components/styles/OasisInterchain.css";

type InterchainCard = {
	title: string;
	icon?: React.ReactNode;
	desc: string;
	text: string;
};

const interchainCards: InterchainCard[] = [
	{
		title: "INTERCHAIN LINK",
		icon: <IoDiamondSharp />,
		desc: "One account can connect with miltiple chain networks.",
		text: "Coming soon",
	},
	{
		title: "DECENTRALIZED TOKEN",
		icon: <PiCoins />,
		desc: "Swap Tokens Securely & Privately",
		text: "Coming soon",
	},
	{
		title: "WRAPPED ASSETS",
		desc: "+BITCOIN",
		text: "Coming soon",
	},
	{
		title: "LIQUIDITY FARMING",
		desc: "Provide Liquidity & Earn.",
		text: "Coming soon",
	},
];

const OasisInterchain = () => {
	return (
		<div className='sectionWrapper oasisInterchain'>
			<h1>
				Oasis Interchain{" "}
				<span className='text-violet-400/60'>
					<FaLink />
				</span>
			</h1>

			<h3 className='mt-5'>How Oasis Network Inter-Connects</h3>

			<div className='oasisInterchainContents'>
				{interchainCards.map((card, i) => (
					<div
						className='oasisInterchainCard'
						key={i}>
						{/* card title */}
						<h3>{card.title}</h3>
						{/* Card Icon */}
						{card.icon && (
							<div className='secureIcon'>
								<span>{card.icon}</span>
							</div>
						)}

						<h1>{card.desc}</h1>

						<p>{card.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default OasisInterchain;
