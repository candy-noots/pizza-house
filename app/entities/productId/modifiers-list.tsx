'use client'

import { useShopStore } from "@/app/providers/store-provider";
import React from "react";
import ModifiersItem from "./modifiers-item";
import { Box } from "@mui/material";

export default function ModifiersList() {
    const modifiers = useShopStore(state => state.modifiers)
    return (
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 1, my: 2 }}>
            {modifiers.map(mod => <ModifiersItem key={mod.id} modifier={mod} />)}
        </Box>
    );
}