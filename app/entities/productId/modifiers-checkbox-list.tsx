"use client";

import { useShopStore } from "@/app/providers/store-provider";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { clear } from "console";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export interface Modifier {
  id: number;
  title: string;
  price: number;
  count?: number; // додаємо count
}
interface ModifiersCheckboxListProps {
  title: string;
  modifiers: Modifier[];
  productModifiers: Modifier[]; // якщо не потрібен — видалити
}

export default function ModifiersCheckboxList({
  title,
  modifiers,
}: ModifiersCheckboxListProps) {
  const pathname = usePathname();

  const selectedModifiers = useShopStore((state) => state.modifiers);
  const addModifier = useShopStore((state) => state.addModifier);
  const removeModifier = useShopStore((state) => state.removeModifier);
  const clearModifiers = useShopStore((state) => state.clearModifiers);

  useEffect(() => {
    return () => {
      clearModifiers();
    };
  }, [pathname]);

/*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Check if a modifier is selected by id
   * @param {number} modId modifier id
   * @returns {boolean} true if modifier is selected
   */
/*******  799954ae-dd6d-4035-9010-b007a369ea07  *******/
  const isSelected = (modId: number) =>
    selectedModifiers.some((m) => m.id === modId);

  const handleToggle = (mod: Modifier) => {
    if (isSelected(mod.id)) {
      removeModifier(mod.id);
    } else {
      addModifier(mod);
    }
  };

  return (
    <FormGroup sx={{ mt: 2 }}>
      <Typography variant="subtitle1">{title}:</Typography>
      {modifiers.map((mod) => (
        <FormControlLabel
          key={mod.id}
          control={
            <Checkbox
              checked={isSelected(mod.id)}
              onChange={() => handleToggle(mod)}
            />
          }
          label={`${mod.title} +${mod.price} ₴`}
        />
      ))}
    </FormGroup>
  );
}
