import React from 'react'
import '../dsa/Dsa.css'
import Navbar2 from '../navbar2/Navbar2'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const Dsa = () => {
  return (
		<div>
			<div className="main-container-dsa">
				<Navbar2 />
				<div className="main-content">
					<div className="text-content">
						<p
							className="title-text"
							style={{ color: "white" }}>
							Data Structure and Algorithms
						</p>
						<p
							className="text-title"
							style={{ color: "white" }}>
							This is the Briyani of Non-vegetarian Foods, its inevitable...
						</p>
					</div>
					<div className="tech-content">
						<div className="tech-content-structures">
							<p
								className="tech-content-structures-title"
								style={{ color: "white" }}>
								Structures
							</p>

							<Link
								to="/Array"
								style={{ color: "black", textDecoration: "none" }}>
								<Accordion
									sx={{ maxWidth: 0.95, marginLeft: 5, marginBottom: 2 }}>
									{/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
									<AccordionSummary
										// expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content">
										<Typography>Arrays</Typography>
									</AccordionSummary>
									{/* <AccordionDetails
									sx={{
										marginLeft: 5,
										alignContent: "space-between",
										display: "flex",
									}}>
									<Typography sx={{ marginLeft: 5 }}>
										The contents for arrays lie here..
									</Typography>
									<Link to="/Array">
										<button>Click here</button>
									</Link>
								</AccordionDetails> */}
								</Accordion>
							</Link>

							<Link
								to="/Linked_list"
								style={{ color: "black", textDecoration: "none" }}>
								<Accordion
									sx={{ maxWidth: 0.95, marginLeft: 5, marginBottom: 2 }}>
									{/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
									<AccordionSummary
										// expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content">
										<Typography>Linked List</Typography>
									</AccordionSummary>
									{/* <AccordionDetails sx={{ marginLeft: 5 }}>
									<Typography sx={{ marginLeft: 5 }}>
										The contents for Linked Lists lie here..
									</Typography>
									<Link to="/Linked_list">
										<button>Click here</button>
									</Link>
								</AccordionDetails> */}
								</Accordion>
							</Link>

							<Link
								to="/Stack"
								style={{ color: "black", textDecoration: "none" }}>
								<Accordion
									sx={{ maxWidth: 0.95, marginLeft: 5, marginBottom: 2 }}>
									{/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
									<AccordionSummary
										// expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content">
										<Typography>Stack</Typography>
									</AccordionSummary>
									{/* <AccordionDetails sx={{ marginLeft: 5 }}>
									<Typography sx={{ marginLeft: 5 }}>
										The contents for Stack lie here..
									</Typography>
									<Link to="/Stack">
										<button>Click here</button>
									</Link>
								</AccordionDetails> */}
								</Accordion>
							</Link>

							<Link
								to="/Queue"
								style={{ color: "black", textDecoration: "none" }}>
								<Accordion
									sx={{ maxWidth: 0.95, marginLeft: 5, marginBottom: 2 }}>
									{/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
									<AccordionSummary
										// expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content">
										<Typography>Queue</Typography>
									</AccordionSummary>
									{/* <AccordionDetails sx={{ marginLeft: 5 }}>
									<Typography sx={{ marginLeft: 5 }}>
										The contents for Queue lie here..
									</Typography>
									<Link to="/Queue">
										<button>Click here</button>
									</Link>
								</AccordionDetails> */}
								</Accordion>
							</Link>

							<Link
								to="/Tree"
								style={{ color: "black", textDecoration: "none" }}>
								<Accordion
									sx={{ maxWidth: 0.95, marginLeft: 5, marginBottom: 2 }}>
									{/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
									<AccordionSummary
										// expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content">
										<Typography>Tree</Typography>
									</AccordionSummary>
									{/* <AccordionDetails sx={{ marginLeft: 5 }}>
									<Typography sx={{ marginLeft: 5 }}>
										The contents for Tree lie here..
									</Typography>
									<Link to="/Tree">
										<button>Click here</button>
									</Link>
								</AccordionDetails> */}
								</Accordion>
							</Link>

							<Link
								to="/Graph"
								style={{ color: "black", textDecoration: "none" }}>
								<Accordion
									sx={{ maxWidth: 0.95, marginLeft: 5, marginBottom: 2 }}>
									{/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
									<AccordionSummary
										// expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content">
										<Typography>Graph</Typography>
									</AccordionSummary>
									{/* <AccordionDetails sx={{ marginLeft: 10 }}>
									<Typography sx={{ marginLeft: 10 }}>
										The contents for Graph lie here..
									</Typography>
									<Link to="/Graph">
										<button>Click here</button>
									</Link>
								</AccordionDetails> */}
								</Accordion>
							</Link>
						</div>
						<div className="tech-content-algorithms">
							<p
								className="tech-content-algorithms-title"
								style={{ color: "white" }}>
								Algorithms
							</p>

							<Link
								to="/Sorting"
								style={{ color: "black", textDecoration: "none" }}>
								<Accordion
									sx={{ maxWidth: 0.95, marginLeft: 5, marginBottom: 2 }}>
									{/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
									<AccordionSummary
										// expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content">
										<Typography>Sorting Algorithms</Typography>
									</AccordionSummary>
									{/* <AccordionDetails sx={{ marginLeft: 5 }}>
									<Typography sx={{ marginLeft: 5 }}>
										The contents for sorting algorithms lie here..
									</Typography>
									<Link to="/Array">
										<button>Click here</button>
									</Link>
								</AccordionDetails> */}
								</Accordion>
							</Link>

							<Link
								to="/Searching"
								style={{ color: "black", textDecoration: "none" }}>
								<Accordion
									sx={{ maxWidth: 0.95, marginLeft: 5, marginBottom: 2 }}>
									{/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
									<AccordionSummary
										// expandIcon={<ExpandMoreIcon />}
										aria-controls="panel1a-content">
										<Typography>Searching Algorithms</Typography>
									</AccordionSummary>
									{/* <AccordionDetails sx={{ marginLeft: 5 }}>
									<Typography sx={{ marginLeft: 5 }}>
										The contents for searching algorithms lie here..
									</Typography>
									<Link to="/Array">
										<button>Click here</button>
									</Link>
								</AccordionDetails> */}
								</Accordion>
							</Link>
						</div>
						<div className="tech-content-dsa-sheets">
							<p
								className="tech-content-dsa-sheets-title"
								style={{ color: "white" }}>
								DSA sheets
							</p>

							<Accordion
								sx={{ maxWidth: 0.95, marginLeft: 5, marginBottom: 2 }}>
								{/* <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" > */}
								<AccordionSummary
									// expandIcon={<ExpandMoreIcon />}
									aria-controls="panel1a-content">
									<Typography>Sheets</Typography>
								</AccordionSummary>
								{/* <AccordionDetails sx={{ marginLeft: 5 }}>
									<Typography sx={{ marginLeft: 5 }}>
										The contents for DSA sheets lie here..
									</Typography>
									<Link to="/Array">
										<button>Click here</button>
									</Link>
								</AccordionDetails> */}
							</Accordion>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dsa