import { CheckboxGroup } from "@/components/CheckboxGroup";
import { RadioGroup } from "@/components/RadioGroup";
import { Select } from "@/components/Select";
import { TextInput } from "@/components/TextInput";
import { Button } from "@/components/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  textInput: z.string().min(2, { message: "2文字以上入力してください" }),
  select: z
    .number()
    .nullable()
    .refine((val) => val !== null, {
      message: "入力してください",
    }),
  checkboxGroup: z.array(z.number()),
  radioGroup: z
    .number()
    .nullable()
    .refine((val) => val !== null, {
      message: "入力してください",
    }),
});

type FormSchema = z.input<typeof formSchema>;

export const FormParts: React.FC = () => {
  const { control, handleSubmit, reset } = useForm<FormSchema>({
    defaultValues: {
      textInput: "",
      select: null,
      checkboxGroup: [],
      radioGroup: null,
    },
    resolver: zodResolver(formSchema),
  });

  const options = [
    { label: "選択肢1", value: 1 },
    { label: "選択肢2", value: 2 },
    { label: "選択肢3", value: 3 },
  ];

  const handleReset = useCallback(() => {
    reset();
  }, [reset]);

  const onSubmit: SubmitHandler<FormSchema> = useCallback((data) => {
    alert(JSON.stringify(data));
  }, []);

  return (
    <Box sx={style.box}>
      <Typography component="h1" variant="h4" fontWeight="bold">
        フォームパーツ
      </Typography>
      <Stack spacing={2}>
        <TextInput control={control} name="textInput" label="TextInput" />
        <Select
          control={control}
          name="select"
          label="Select"
          options={options}
        />
        <CheckboxGroup
          control={control}
          name="checkboxGroup"
          label="CheckboxGroup"
          options={options}
        />
        <RadioGroup
          control={control}
          name="radioGroup"
          label="RadioGroup"
          options={options}
        />
      </Stack>
      <Box sx={style.buttonBox}>
        <Button variant="outlined" onClick={handleReset}>
          リセット
        </Button>
        <Button onClick={handleSubmit(onSubmit)}>登録</Button>
      </Box>
    </Box>
  );
};

const style = {
  box: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  buttonBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
};
