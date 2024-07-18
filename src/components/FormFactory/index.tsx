import { CheckboxGroup, CheckboxGroupProps } from "@/components/CheckboxGroup";
import { RadioGroup, RadioGroupProps } from "@/components//RadioGroup";
import { Select, SelectProps } from "@/components/Select";
import { TextInput, TextInputProps } from "@/components/TextInput";
import { FieldValues } from "react-hook-form";

export type FormFactoryProps<T extends FieldValues> =
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
    };

export const FormFactory = <T extends FieldValues>({
  type,
  props,
}: FormFactoryProps<T>) => {
  switch (type) {
    case "CHECKBOX_GROUP":
      return <CheckboxGroup {...props} />;
    case "RADIO_GROUP":
      return <RadioGroup {...props} />;
    case "SELECT":
      return <Select {...props} />;
    case "TEXT_INPUT":
      return <TextInput {...props} />;
    default:
      return null;
  }
};
