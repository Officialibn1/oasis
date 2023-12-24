import React from "react";
import "@/app/components/styles/OasisNewsletter.css";
import { GrSend } from "react-icons/gr";

const OasisNewsletter = () => {
	return (
		<div className='sectionWrapper oasisNewsletter'>
			{/* side text */}
			<div>
				<h1>Recieve Event News</h1>
				<p>Stay up-to-date on the next big thing!</p>
			</div>

			<div>
				{/* email input */}
				<input
					className='focus:outline-none'
					type='text'
					name='subscribe'
					id='subscribe'
					placeholder='Enter Your Email. .'
				/>

				{/* send button */}
				<div>
					<GrSend />
				</div>
			</div>
		</div>
	);
};

export default OasisNewsletter;
