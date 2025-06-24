import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React from "react";
import Multiple from "./multiple";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ModifiersMultiple({ e }: any) {
    return <Accordion
        sx={{
            boxShadow: "none",
            border: 0,
            backgroundColor: "transparent",
        }}
    >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            sx={{ borderBottom: 1, borderRadius: 0, width: "100%", borderColor: 'silver' }}
        >
            <Typography component="div">{e.title}</Typography>
        </AccordionSummary>
        <AccordionDetails
            sx={{
                border: 1,
                borderColor: "rgba(0, 0, 0, 0.12)",
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                gap: 1,
                p: 2,
            }}
        >
            {e.modifiers.map((l: any) => {
                return (
                    <div key={l.id}>
                        <div className="flex justify-between items-center">
                            <div>
                                <Typography component="span">{l.title}</Typography>
                            </div>
                            <div className="flex gap-3">
                                <Typography component="span">
                                    {l.weight} г / {l.price} ₴
                                </Typography>
                                <Multiple />
                            </div>
                        </div>
                    </div>
                );
            })}
        </AccordionDetails>
    </Accordion>
}