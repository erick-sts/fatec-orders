'use client'
import Layout from "@/components/UI/organisms/Layout";
import { IProduct } from "@/interface/IProducts";
import { ProductEditValidater } from "@/validators/ProductEditValidator";
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";

interface ProductEditProps {
  params: { slug: string };
}

const ProductEdit: React.FC<ProductEditProps> = ({ params }) => {
  const formik = useFormik<IProduct>({
    initialValues: {
      brand: "",
      description: "",
      flavor: "",
      weight: 0,
      value: 0,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: ProductEditValidater,
  });

  const { handleSubmit, values, handleChange, setFieldValue } = formik;

  return (
    <Layout>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          name="description"
          label="Descrição"
          fullWidth
          value={values.description}
          onChange={handleChange}
        />
        <TextField
          name="brand"
          label="Marca"
          fullWidth
          value={values.brand}
          onChange={handleChange}
        />
        <TextField
          name="value"
          label="Valor"
          fullWidth
          value={values.value}
          onChange={handleChange}
        />
        <TextField
          name="weight"
          label="Peso (g)"
          fullWidth
          value={values.weight}
          onChange={handleChange}
        />

        <Select
          name="flavor"
          label="Sabor"
          fullWidth
          value={values.flavor}
          onChange={(e) => setFieldValue("flavor", e.target.value)}
        >
          <MenuItem value="abacaxi_ao_vinho">Abacaxi ao vinho</MenuItem>
          <MenuItem value="frutas_vermelhas">Frutas Vermelhas</MenuItem>
          <MenuItem value="menta">Menta</MenuItem>
          <MenuItem value="">-- NÃO INFORMADO --</MenuItem>
        </Select>

        <Button variant="outlined" color="secondary">
          Cancelar
        </Button>
        <Button variant="contained" color="primary" type="submit">
          Atualizar
        </Button>
      </Box>
    </Layout>
  );
};

export default ProductEdit;
