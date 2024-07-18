import { FormField } from "@/types/formField";
import { ItemInputSchema } from "./schema";
import { Control } from "react-hook-form";
import { LIQUOR_CONDITIONS, RANKS, WATCH_BRANDS } from "@/constants";

export const useFormFields = (
  control: Control<ItemInputSchema>,
): FormField<ItemInputSchema>[] => [
  {
    id: 1,
    itemId: 1,
    type: "SELECT",
    props: {
      control,
      name: "formFields.SELECT.brand",
      label: "ブランド",
      options: WATCH_BRANDS,
    },
  },
  {
    id: 2,
    itemId: 1,
    type: "TEXT_INPUT",
    props: {
      control,
      name: "formFields.TEXT_INPUT.model",
      label: "モデル",
    },
  },
  {
    id: 3,
    itemId: 1,
    type: "RADIO_GROUP",
    props: {
      control,
      name: "formFields.RADIO_GROUP.rank",
      label: "ランク",
      options: RANKS,
    },
  },
  {
    id: 4,
    itemId: 1,
    type: "TEXT_INPUT",
    props: {
      control,
      name: "formFields.TEXT_INPUT.sellingPrice",
      label: "販売価格",
    },
  },
  {
    id: 5,
    itemId: 2,
    type: "TEXT_INPUT",
    props: {
      control,
      name: "formFields.TEXT_INPUT.length",
      label: "身丈",
    },
  },
  {
    id: 6,
    itemId: 2,
    type: "TEXT_INPUT",
    props: {
      control,
      name: "formFields.TEXT_INPUT.sleeveLength",
      label: "袖丈",
    },
  },
  {
    id: 7,
    itemId: 2,
    type: "RADIO_GROUP",
    props: {
      control,
      name: "formFields.RADIO_GROUP.rank",
      label: "ランク",
      options: RANKS,
    },
  },
  {
    id: 8,
    itemId: 2,
    type: "TEXT_INPUT",
    props: {
      control,
      name: "formFields.TEXT_INPUT.sellingPrice",
      label: "販売価格",
    },
  },
  {
    id: 9,
    itemId: 3,
    type: "TEXT_INPUT",
    props: {
      control,
      name: "formFields.TEXT_INPUT.name",
      label: "商品名",
    },
  },
  {
    id: 10,
    itemId: 3,
    type: "CHECKBOX_GROUP",
    props: {
      control,
      name: "formFields.CHECKBOX_GROUP.condition",
      label: "状態",
      options: LIQUOR_CONDITIONS,
    },
  },
  {
    id: 11,
    itemId: 3,
    type: "RADIO_GROUP",
    props: {
      control,
      name: "formFields.RADIO_GROUP.rank",
      label: "ランク",
      options: RANKS,
    },
  },
  {
    id: 12,
    itemId: 3,
    type: "TEXT_INPUT",
    props: {
      control,
      name: "formFields.TEXT_INPUT.sellingPrice",
      label: "販売価格",
    },
  },
];
