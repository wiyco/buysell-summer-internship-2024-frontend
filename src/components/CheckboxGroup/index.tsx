import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FieldWrapper, FieldWrapperProps } from "../FieldWrapper";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { z } from "zod";
import { useCallback, useMemo } from "react";
import { COLORS } from "@/styles";

const numberArraySchema = z.array(z.number());

export type CheckboxGroupProps<T extends FieldValues> = {
  options: { label: string; value: number }[];
} & UseControllerProps<T> &
  Pick<FieldWrapperProps, "label">;

export const CheckboxGroup = <T extends FieldValues>({
  label,
  options,
  ...props
}: CheckboxGroupProps<T>): JSX.Element => {
  const {
    field: { value, onChange, ...field },
    fieldState: { error },
  } = useController(props);

  const formValue = useMemo(
    () => numberArraySchema.parse(value ?? []),
    [value],
  );

  const handleChange = useCallback(
    (value: number) => {
      const newValue = formValue.includes(value)
        ? formValue.filter((v) => v !== value)
        : [...formValue, value];
      onChange(newValue);
    },
    [formValue, onChange],
  );

  return (
    <FieldWrapper label={label} errorMessage={error?.message}>
      <FormGroup row>
        {options.map(({ label, value }) => (
          <FormControlLabel
            key={label}
            label={label}
            control={
              <Checkbox
                checked={formValue.includes(value)}
                onChange={() => handleChange(value)}
                sx={style.checkbox}
                {...field}
              />
            }
          />
        ))}
      </FormGroup>
    </FieldWrapper>
  );
};

const style = {
  checkbox: {
    paddingY: 0,
    "&.Mui-checked": {
      color: COLORS.primary.light,
    },
  },
};
