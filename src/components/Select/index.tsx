import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import { FieldWrapper, FieldWrapperProps } from "../FieldWrapper";
import { Select as MuiSelect, MenuItem } from "@mui/material";

export type SelectProps<T extends FieldValues> = {
  options: { label: string; value: number }[];
} & UseControllerProps<T> &
  Pick<FieldWrapperProps, "label">;

export const Select = <T extends FieldValues>({
  label,
  options,
  ...props
}: SelectProps<T>): JSX.Element => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController(props);

  return (
    <FieldWrapper label={label} errorMessage={error?.message}>
      <MuiSelect
        value={value ?? null}
        size="small"
        sx={{ minWidth: 84 }}
        onChange={onChange}
      >
        {options.map(({ label, value }) => (
          <MenuItem key={label} value={value}>
            {label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FieldWrapper>
  );
};
