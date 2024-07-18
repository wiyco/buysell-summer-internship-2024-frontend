import { FieldValues } from "react-hook-form";
import { CheckboxGroupProps } from "@/components/CheckboxGroup";
import { RadioGroupProps } from "@/components/RadioGroup";
import { SelectProps } from "@/components/Select";
import { TextInputProps } from "@/components/TextInput";

export type FormField<T extends FieldValues> = {
  id: number;
  itemId: number;
} & (
  | {
      type: "CHECKBOX_GROUP";
      props: CheckboxGroupProps<T>;
    }
  | {
      type: "RADIO_GROUP";
      props: RadioGroupProps<T>;
    }
  | {
      type: "SELECT";
      props: SelectProps<T>;
    }
  | {
      type: "TEXT_INPUT";
      props: TextInputProps<T>;
    }
);
