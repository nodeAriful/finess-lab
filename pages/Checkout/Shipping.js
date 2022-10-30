import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container, Stack } from "@mui/system";
import { Button, Typography } from "@mui/material";

export default function Shipping() {
  return (
    <Box sx={{ padding: "24px" }}>
      <Typography
        marginBottom
        sx={{ paddingBottom: "10px", borderBottom: "1px solid #F3F4F6" }}
        variant="h5"
        color="gray.700"
      >
        Shipping
      </Typography>

      <Typography variant="subtitle1">Shipping address</Typography>
      <Typography variant="subtitle1">Akib Ahmad</Typography>
      <Typography variant="subtitle1">01763489672</Typography>
      <Typography variant="subtitle1">
        Block-K, Plot-11 Rd No 17, Dhaka 1213
      </Typography>
      <Typography>Banani, Dhaka, Dhaka</Typography>
      <Stack direction="row">
        <Button variant="text" sx={{ color: "#D23F57", textTransform: "none" }}>
          Change address
        </Button>
        <Button sx={{ color: "#374151", textTransform: "none" }} variant="text">
          Add new address
        </Button>
      </Stack>
    </Box>
  );
}