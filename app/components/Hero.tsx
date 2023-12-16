"use client";

import React from "react";
import "@/app/components/styles/Hero.css";
import { motion } from "framer-motion";
import {
	BNBOasisBall,
	BitcoinOasisBall,
	EthereumOasisBall,
	TetherOasisBall,
} from "./ui/OasisBalls";

const Hero = () => {
	return (
		<section className='heroSection'>
			<div className='sectionContainer'>
				<motion.header className='heroSectionDesktop'>
					{/* oasis balls container */}
					<motion.div>
						{/* each ball item desktop */}
						<EthereumOasisBall
							font={"text-[40px]"}
							height={"h-20"}
							width={"w-20"}
							ini={1100}
							ani={700}
						/>
						{/* each ball item desktop */}
						<BitcoinOasisBall
							font={"text-[80px]"}
							height={"h-48"}
							width={"w-48"}
							ini={-200}
							ani={280}
						/>
						{/* each ball item desktop */}
						<EthereumOasisBall
							font={"text-[25px]"}
							height={"h-16"}
							width={"w-16"}
							ini={1100}
							ani={950}
						/>

						{/* each ball item desktop */}
						<BitcoinOasisBall
							font={"text-[45px]"}
							height={"h-32"}
							width={"w-32"}
							ini={-180}
							ani={620}
						/>

						{/* each ball item desktop */}
						<BNBOasisBall
							font={"text-[50px]"}
							height={"h-28"}
							width={"w-28"}
							ini={1500}
							ani={860}
						/>

						{/* each ball item desktop */}
						<TetherOasisBall
							font={"text-[50px]"}
							height={"h-28"}
							width={"w-28"}
							ini={1500}
							ani={400}
						/>
					</motion.div>

					{/* oasis header container */}
					<div className='heroText'>
						<h1>
							Build on the <br />
							Metaverse
						</h1>
					</div>
				</motion.header>
			</div>
		</section>
	);
};

export default Hero;
