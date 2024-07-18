import MuiButton from "@mui/material/Button";
import { useMemo } from "react";
import { COLORS } from "@/styles";

type ButtonProps = {
  variant?: "contained" | "outlined";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "contained",
  onClick,
  children,
}) => {
  const variantStyle = useMemo(
    () => (variant === "contained" ? style.contained : style.outlined),
    [variant],
  );

  return (
    <MuiButton
      variant={variant}
      onClick={onClick}
      sx={{ ...style.button, ...variantStyle }}
    >
      {children}
    </MuiButton>
  );
};

const style = {
  button: {
    px: "35px",
    py: "8px",
    boxShadow: "none",
    fontWeight: "bold",
    "&:hover": {
      boxShadow: "none",
    },
  },
  contained: {
    backgroundColor: COLORS.primary.dark,
  },
  outlined: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.black,
    color: COLORS.black,
    "&:hover": {
      backgroundColor: COLORS.white,
      borderColor: COLORS.black,
    },
  },
};
