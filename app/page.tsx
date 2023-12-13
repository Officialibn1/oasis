"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "./components/Navbar";

export default function Page() {
	const [move, setMove] = useState(false);

	return (
		<section>
			{/* Navbar component */}
			<Navbar />
		</section>
	);
}
