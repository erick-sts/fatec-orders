import * as Yup from "yup"

export const ProductEditValidater = () =>{
    return Yup.object().shape({
        description: Yup.string().required().min(3).max(100),
        brand: Yup.string().required().max(80),
        value: Yup.number().min(0.01).required(),
        weight: Yup.number().min(0.01),
        flavor: Yup.string().max(50),
    })
}