import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const itemSchema = z.object({
  itemId: z.number().nullable(),
  formFields: z.object({
    CHECKBOX_GROUP: z.record(z.array(z.number())),
    RADIO_GROUP: z.record(z.number()),
    SELECT: z.record(z.number()),
    TEXT_INPUT: z.record(z.string()),
  }),
});

export type ItemInputSchema = z.input<typeof itemSchema>;
export type ItemOutputSchema = z.output<typeof itemSchema>;
export const resolver = zodResolver(itemSchema);
