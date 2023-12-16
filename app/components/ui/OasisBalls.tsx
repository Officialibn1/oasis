"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoLogoBitcoin } from "react-icons/io5";
import { LiaEthereum } from "react-icons/lia";
import { TbBrandBinance } from "react-icons/tb";
import { GiBlackHoleBolas } from "react-icons/gi";
import "@/app/components/styles/OasisBalls.css";

type BallProp = {
	font: string;
	height: string;
	width: string;
	ini: number;
	ani: number;
	className?: string;
};

export const BitcoinOasisBall = ({
	font,
	height,
	width,
	ini,
	ani,
}: BallProp) => {
	return (
		<motion.div
			className={`bitcoinOasisBall ${height} ${width} `}
			initial={{ x: ini, scale: 0.1 }}
			animate={{ x: ani, scale: 1 }}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={{ duration: 0.4, ease: "linear" }}>
			<IoLogoBitcoin className={font} />
		</motion.div>
	);
};

export const EthereumOasisBall = ({
	font,
	height,
	width,
	ini,
	ani,
}: BallProp) => {
	return (
		<motion.div
			className={`ethereumOasisBall ${height} ${width} `}
			initial={{ x: ini, opacity: 0 }}
			animate={{ x: ani, opacity: 1 }}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={{ duration: 0.6, ease: "linear" }}>
			<LiaEthereum className={font} />
		</motion.div>
	);
};

export const BNBOasisBall = ({ font, height, width, ini, ani }: BallProp) => {
	return (
		<motion.div
			className={`bNBOasisBall ${height} ${width} `}
			initial={{ x: ini, opacity: 0 }}
			animate={{ x: ani, opacity: 1 }}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={{ duration: 0.6, ease: "linear" }}>
			<TbBrandBinance className={font} />
		</motion.div>
	);
};

export const TetherOasisBall = ({
	font,
	height,
	width,
	ini,
	ani,
}: BallProp) => {
	return (
		<motion.div
			className={`tetherOasisBall ${height} ${width} `}
			initial={{ x: ini, opacity: 0 }}
			animate={{ x: ani, opacity: 1 }}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={{ duration: 0.6, ease: "linear" }}>
			<GiBlackHoleBolas className={font} />
		</motion.div>
	);
};
