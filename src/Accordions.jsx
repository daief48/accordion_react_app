import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion(props) {
  const heada1 = `panel${props.id}a-header`;
  const headc1 = `panel${props.id}a-content`;
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={headc1}
          id={heada1}
        >
          <Typography>{props.ans}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.que}
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}