import React from "react";
import "@/app/components/styles/OasisHeart.css";

// card icon imports
import { TbSunMoon } from "react-icons/tb";
import { GiMoonOrbit, GiShieldEchoes, GiBarbedSun } from "react-icons/gi";
import { IoPlanetSharp } from "react-icons/io5";

type HeartCard = {
	id: string;
	icon: React.ReactNode;
	title: string;
	body: string;
	cardBg: string;
	color: string;
};

const heartCard: HeartCard[] = [
	{
		id: "xaeui3",
		icon: <TbSunMoon />,
		title: "Oasis MarketVerse",
		body: "Set to operate a next-gen decentralized exchange, swapping digital assets from across the Interchain, with very low fees and instant transaction confirmation.",
		cardBg: "bg-[#5d4db87f]",
		color: "text-[rgb(196,185,233)]",
	},
	{
		id: "qedqkj",
		icon: <GiShieldEchoes />,
		title: "Oasis Security",
		body: "With the forthcoming Interchain Security feature, Oasis will soon be ensuring the security of various chains, in return for extra staking rewards.",
		cardBg: "bg-[#ca5e797f]",
		color: "text-[rgb(236,140,79)]",
	},
	{
		id: "an3o233n",
		icon: <IoPlanetSharp />,
		title: "Oasis Costodian",
		body: "Located at the crossroads of the Interchain, the Hub is extremely secure, the best place to hold digital assets and manage accounts across many chains.",
		cardBg: "bg-[#5d4db87f]",
		color: "text-[rgb(196,185,233)]",
	},
	{
		id: "iuhq732",
		icon: <GiMoonOrbit />,
		title: "Miltichain-Verse",
		body: "A core mission of the Hub – to connect chains by establishing IBC connections with compatible chains and operating decentralized bridges with chains like Ethereum and Bitcoin.",
		cardBg: "bg-[#4edff07f]",
		color: "text-[rgb(117,207,247)]",
	},
];

const OasisHeart = () => {
	return (
		<div className='sectionWrapper oasisHeart'>
			<h3>ENTER THE OASIS HUB</h3>

			<h1>
				The heart of the <br />
				Oasis Interchain.
			</h1>

			<div className='oasisHeartContent'>
				<p>
					Functioning as the economic hub of the Interchain, the Oasis Hub is a
					blockchain platform that delivers essential ecosystem services.
				</p>

				<div className='oasisHeartCards'>
					{heartCard.map((card) => (
						<div
							className='oasisHeartCard'
							key={card.id}>
							<div className={`cardIconDiv ${card.cardBg} ${card.color}`}>
								{card.icon}
							</div>

							<div className='heartCardText'>
								<h2>{card.title}</h2>

								<p>{card.body}</p>
							</div>
						</div>
					))}

					<div className='oasisHeartCardsButton'>
						<button>
							Oasis-Verse{" "}
							<span>
								<GiBarbedSun />
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OasisHeart;
