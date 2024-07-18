import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Link } from "@tanstack/react-router";

export const Home: React.FC = () => {
  return (
    <Stack sx={style.stack}>
      <Typography variant="h1" fontWeight="bold" color="primary">
        BuySell Technologies Summer Internship 2024
      </Typography>
      <Typography variant="h2">
        人を超え、時を超え、
        <br />
        たいせつなものをつなぐ架け橋となる。
      </Typography>
      <Box sx={style.linkBox}>
        <Link to="/formParts" style={style.link}>
          フォームパーツ
        </Link>
        <Link to="/itemForm" style={style.link}>
          商材登録フォーム
        </Link>
      </Box>
    </Stack>
  );
};

const style = {
  stack: {
    gap: 5,
  },
  linkBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 3,
  },
  link: {
    fontSize: 30,
  },
};
