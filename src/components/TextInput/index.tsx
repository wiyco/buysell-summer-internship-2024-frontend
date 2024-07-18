import TextField from "@mui/material/TextField";
import { FieldWrapper, FieldWrapperProps } from "../FieldWrapper";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

export type TextInputProps<T extends FieldValues> = UseControllerProps<T> &
  Pick<FieldWrapperProps, "label">;

export const TextInput = <T extends FieldValues>({
  label,
  ...props
}: TextInputProps<T>): JSX.Element => {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  return (
    <FieldWrapper label={label} errorMessage={error?.message}>
      <TextField {...field} />
    </FieldWrapper>
  );
};
