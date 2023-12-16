import React from "react";
import "@/app/components/styles/CommunityText.css";

const CommunityText = () => {
	return (
		<div className='communityText'>
			<div>
				<h3>COMMUNITY-OWNED AND OPERATED</h3>
				<h1>Enter a new metaverse of connected world&apos;s.</h1>

				<p>
					Cosmos apps and services connect using IBC, the Inter-Blockchain
					Communication protocol. This innovation enables you to freely exchange
					assets and data across sovereign,{" "}
					<abbr
						title="Live within miltiple world's at a time, while enjoying the
						freedom of movement and relation.">
						decentralized community.
					</abbr>
				</p>

				<div className='communityTextButtons'>
					<button>Explore World&apos;s</button>

					<button>Earn Token</button>
				</div>
			</div>
			<div>
				<div className='tokenNumber'>
					<h1>237+</h1>
					<p>Land&apos;s, Citie&apos;s & Estate&apos;s</p>
				</div>
				<div className='tokenNumber'>
					<h1>$47B+</h1>
					<p>Digital assets under management.</p>
				</div>
			</div>
		</div>
	);
};

export default CommunityText;
