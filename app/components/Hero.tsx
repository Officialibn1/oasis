"use client";

import React from "react";
import "@/app/components/styles/Hero.css";
import { motion } from "framer-motion";
import { BitcoinOasisBall, EthereumOasisBall } from "./ui/OasisBalls";

const Hero = () => {
	return (
		<section>
			<div className='sectionContainer'>
				<motion.header className='heroSection'>
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
						ini={1100}
						ani={550}
					/>

					{/* each ball item */}
					<BitcoinOasisBall
						font={"text-[45px]"}
						height={"h-32"}
						width={"w-32"}
						ini={-180}
						ani={180}
					/>

					{/* each ball item */}
					<EthereumOasisBall
						font={"text-[50px]"}
						height={"h-16"}
						width={"w-16"}
						ini={1500}
						ani={700}
					/>
				</motion.header>
			</div>
		</section>
	);
};

export default Hero;
