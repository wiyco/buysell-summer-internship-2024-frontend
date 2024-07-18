import { useForm } from "react-hook-form";
import { ItemInputSchema, ItemOutputSchema } from "./schema";
import { useCallback, useMemo } from "react";
import Stack from "@mui/material/Stack";
import { Select } from "@/components/Select";
import { FormFactory } from "@/components/FormFactory";
import { useFormFields } from "./hooks";
import Box from "@mui/material/Box";
import { Button } from "@/components/Button";

type ItemFormProps = {
  items: { id: number; name: string }[];
};

export const ItemForm: React.FC<ItemFormProps> = ({ items }) => {
  const { control, watch, reset, handleSubmit } = useForm<ItemInputSchema>({});

  const formFields = useFormFields(control);

  const selectedItemId = watch("itemId");

  const itemOptions = useMemo(
    () =>
      items.map(({ id, name }) => ({
        value: id,
        label: name,
      })),
    [items],
  );

  const itemFormFields = useMemo(
    () => formFields.filter(({ itemId }) => itemId === selectedItemId),
    [formFields, selectedItemId],
  );

  const handleReset = useCallback(() => reset(), [reset]);

  const onSubmit = useCallback((data: ItemOutputSchema) => {
    alert(JSON.stringify(data, null, 2));
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>商材登録ページ</h1>
      <Stack gap={2} minHeight={200} mb={5}>
        <Select
          control={control}
          name="itemId"
          label="商材"
          options={itemOptions}
        />
        {itemFormFields.map((field) => (
          <FormFactory<ItemInputSchema> {...field} />
        ))}
      </Stack>
      <Box display="flex" justifyContent="center" gap={10}>
        <Button variant="outlined" onClick={handleReset}>
          リセット
        </Button>
        <Button onClick={handleSubmit(onSubmit)}>登録</Button>
      </Box>
    </form>
  );
};
