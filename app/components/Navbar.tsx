"use client";
import { GiBlackHoleBolas } from "react-icons/gi";
import { FaBarsProgress, FaForward, FaXTwitter } from "react-icons/fa6";
// import { IoCaretForward } from "react-icons/io5";
import "@/app/components/styles/Navbar.css";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
	const [showNav, setShowNav] = useState(false);

	const toggler = () => {
		setShowNav((prev) => !prev);
		console.log(showNav);
	};
	return (
		// Main navbar container
		<section>
			{/* utility navbar container */}
			<div className='sectionContainer'>
				{/* main nav tag wrapping all contents */}
				<nav>
					{/* navbar logo div */}
					<div className='navLogo'>
						<span>
							<GiBlackHoleBolas />
							asis
						</span>
					</div>

					{/* navbar links container */}
					<div className='desktopLinks'>
						<ul>
							<li>
								<Link href={"/"}>Home</Link>
							</li>
							<li>
								<Link href={"/"}>Community</Link>
							</li>
							<li>
								<Link href={"/"}>Hub</Link>
							</li>
							<li>
								<Link href={"/"}>Join Us</Link>
							</li>
						</ul>
					</div>

					{/* navbar icons container */}
					<div className='navIcons'>
						<span>
							<FaXTwitter />
						</span>
					</div>

					{/* Toggle navbar open button */}
					<div className='toggleBtn'>
						<button onClick={() => toggler()}>
							<FaBarsProgress />
						</button>
					</div>

					{/* mobile navbar */}
					<div
						className={`mobileNavbar ${showNav ? "right-0" : "-right-full"}`}>
						<div>
							{/* Toggle navbar close button */}
							<div
								className='toggleBtn'
								onClick={() => toggler()}>
								<button>
									<FaForward />
								</button>
							</div>
						</div>

						{/* mobile navbar links */}
						<ul>
							<li>
								<Link
									onClick={() => toggler()}
									href={"/"}>
									Home
								</Link>
							</li>
							<li>
								<Link
									onClick={() => toggler()}
									href={"/"}>
									Community
								</Link>
							</li>
							<li>
								<Link
									onClick={() => toggler()}
									href={"/"}>
									Hub
								</Link>
							</li>
							<li>
								<Link
									onClick={() => toggler()}
									href={"/"}>
									Join Us
								</Link>
							</li>
						</ul>

						{/* mobile nav icons */}
						<div className='navIcons'>
							<span onClick={() => toggler()}>
								<FaXTwitter />
							</span>
						</div>
					</div>
				</nav>
			</div>
		</section>
	);
};

export default Navbar;
