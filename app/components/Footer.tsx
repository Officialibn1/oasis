import React from "react";
import "@/app/components/styles/Footer.css";
import { GiBlackHoleBolas } from "react-icons/gi";
import { FaGithubAlt, FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";

const footerIconLinks: { url: string; icon: React.ReactNode }[] = [
	{
		url: "https://twitter.com/__ibn1",
		icon: <FaXTwitter />,
	},
	{
		url: "https://www.linkedin.com/in/isah-ibn-muhammad-5046b125a/",
		icon: <SlSocialLinkedin />,
	},
	{
		url: "https://github.com/Officialibn1",
		icon: <FaGithubAlt />,
	},
	{
		url: "https://facebook.com/ibn0001",
		icon: <FiFacebook />,
	},
];

const Footer = () => {
	return (
		<footer className='sectionWrapper oasisFooter'>
			{/* footer logo */}
			<div className='oasisFooterLogo'>
				<span>
					<GiBlackHoleBolas />
				</span>
				<h1>asis</h1>
			</div>

			{/* footer social icons */}
			<div className='footerSocialIcons'>
				<ul>
					{footerIconLinks.map((icon, i) => (
						<li
							key={i}
							className='footerIcon'>
							<a
								href={icon.url}
								target='_blank'>
								{icon.icon}
							</a>
						</li>
					))}
				</ul>
			</div>

			<div className='footerCopyRight'>
				&copy; This website is a project by{" "}
				<a
					href='https://www.linkedin.com/in/isah-ibn-muhammad-5046b125a/'
					target='_blank'>
					ibn
				</a>{" "}
				and does not provide any financial information. the contents in this
				page might be similar with some resources online and the developer is
				not responsible for the content of those websites and expressly rejects
				any liability for damages of any kind resulting from the use, reference
				to, or reliance on any information contained within these websites. If
				you spot an error or issue on this website, please conatact me at{" "}
				<a
					href='https://www.linkedin.com/in/isah-ibn-muhammad-5046b125a/'
					target='_blank'>
					ibn
				</a>
				.
			</div>
		</footer>
	);
};

export default Footer;
