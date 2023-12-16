"use client";

import React from "react";
import "@/app/components/styles/Hero.css";
import { motion } from "framer-motion";
import { BitcoinOasisBall, EthereumOasisBall } from "./ui/OasisBalls";

const Hero = () => {
	return (
		<section>
			<div className='sectionContainer'>
				<motion.header
					className='heroSection'
					transition={{ delayChildren: 0.6 }}>
					{/* each ball item */}
					<BitcoinOasisBall
						font={"text-[80px]"}
						height={"h-48"}
						width={"w-48"}
						ini={-200}
						ani={80}
					/>

					{/* each ball item */}
					<EthereumOasisBall
						font={"text-[50px]"}
						height={"h-16"}
						width={"w-16"}
						ini={-70}
						ani={350}
					/>

					{/* each ball item */}
					<BitcoinOasisBall
						font={"text-[45px]"}
						height={"h-32"}
						width={"w-32"}
						ini={-180}
						ani={180}
					/>
				</motion.header>
			</div>
		</section>
	);
};

export default Hero;
