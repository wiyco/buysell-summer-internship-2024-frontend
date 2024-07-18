import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { PropsWithChildren } from "react";

export type FieldWrapperProps = PropsWithChildren<{
  label: string;
  errorMessage?: string;
}>;

export const FieldWrapper: React.FC<FieldWrapperProps> = ({
  label,
  errorMessage,
  children,
}) => {
  return (
    <FormControl fullWidth error={!!errorMessage}>
      <Typography sx={style.label}>{label}</Typography>
      {children}
      {errorMessage && (
        <Typography sx={style.error} color="error">
          {errorMessage}
        </Typography>
      )}
    </FormControl>
  );
};

const style = {
  label: {
    mb: "4px",
    fontSize: "14px",
    fontWeight: "bold",
    lineHeight: 1.2,
  },
  error: {
    mt: "4px",
    fontSize: "12px",
  },
};
