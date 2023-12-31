import React from 'react'
import Navbar2 from '../navbar2/Navbar2';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import "./Jobs.css";

const Jobs = () => {
	return (
		<div className="jobs-container">
			<Navbar2 />
			<div className="main-container-jobs">
				<div className="texts">
					<p
						className="titles"
						style={{ color: "white", marginLeft: "1rem" }}>
						Jobs and Oppurtunities
					</p>
				</div>
			</div>
			<div className="jobs">
				<Accordion
					sx={{
						maxWidth: 0.95,
						marginLeft: 5,
						marginBottom: 2,
						marginTop: 10,
					}}>
					<AccordionSummary aria-controls="panel1a-content">
						<Typography>Jobs</Typography>
					</AccordionSummary>
				</Accordion>
			</div>
		</div>
	);
};

export default Jobs