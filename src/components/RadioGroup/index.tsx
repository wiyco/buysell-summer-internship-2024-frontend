import FormControlLabel from "@mui/material/FormControlLabel";
import { FieldWrapper, FieldWrapperProps } from "../FieldWrapper";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { Radio, RadioGroup as MuiRadioGroup } from "@mui/material";
import { COLORS } from "@/styles";

export type RadioGroupProps<T extends FieldValues> = {
  options: { label: string; value: number }[];
} & UseControllerProps<T> &
  Pick<FieldWrapperProps, "label">;

export const RadioGroup = <T extends FieldValues>({
  label,
  options,
  ...props
}: RadioGroupProps<T>): JSX.Element => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController(props);

  return (
    <FieldWrapper label={label} errorMessage={error?.message}>
      <MuiRadioGroup
        row
        value={value}
        sx={{ padding: 0 }}
        onChange={(e) => onChange(parseInt(e.target.value, 10))}
      >
        {options.map(({ label, value }) => (
          <FormControlLabel
            key={value}
            label={label}
            value={value}
            control={<Radio sx={style.radio} />}
          />
        ))}
      </MuiRadioGroup>
    </FieldWrapper>
  );
};

const style = {
  radio: {
    paddingY: 0,
    "&.Mui-checked": {
      color: COLORS.primary.light,
    },
  },
};
