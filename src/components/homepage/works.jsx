import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./TPLOGO.jpeg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Teleperformance</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">
								2022 to- Present
							</div>
						</div>
						<p>
							<strong>Having worked at Teleperformance for a year</strong>, I have
							gained invaluable experience in the field of
							customer service and developed strong interpersonal
							skills. My ability to effectively communicate and
							engage with customers has been a key factor in
							providing exceptional service. I take pride in my
							talent for building rapport with customers,
							understanding their needs, and delivering
							personalized solutions to ensure their satisfaction.
						</p>
						<p>
							Throughout my time at Teleperformance, I
							consistently demonstrated my dedication to
							delivering the highest level of service. I actively
							listen to customers, empathize with their concerns,
							and strive to exceed their expectations. My
							knowledge of the products and services offered by
							the company allows me to provide accurate and
							tailored information, enhancing the customer
							experience.
						</p>
						<p>
							Additionally, I am adept at handling challenging
							situations and resolving conflicts in a professional
							and diplomatic manner. I understand the importance
							of maintaining a calm and positive attitude, even in
							high-pressure situations, which contributes to
							creating a positive customer experience.
						</p>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
