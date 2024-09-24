"use client";

import axios from "axios";
import { env } from "@/config/env";
import { useEffect, useState } from "react";
import Layout from "@/components/UI/organisms/Layout";
import { Box } from "@mui/material";
import CustomTable from "@/components/UI/organisms/CustomTable";


const Orders = () => {

    const [rows, setRows] = useState([])

    useEffect(() => {
        const fetchOrders = async () => {
            const response = await axios.get(`${env.apiBaseUrl}/pedidos`);


            const orders = response.data.pedidos.map((order: any) => ({
                id: order.id,
                description: order.descricao,
                value: order.valor,
                dateOfCreation: order.data

            }));

            setRows(orders)
        };

        fetchOrders();

    }, []);



    const headCells = [
        {
            id: "description",
            numeric: false,
            disablePadding: false,
            label: "Descrição",
        },

        {
            id: "value",
            numeric: true,
            disablePadding: false,
            label: "Valor",
        },

        {
            id: "dateOfCreation",
            numeric: true,
            disablePadding: false,
            label: "Data"
        }
    ]


    return (
        <Layout>
            <Box> Lista de Pedidos</Box>
            <CustomTable rows={rows} headCells={headCells}></CustomTable>
        </Layout>
    )
}




export default Orders