/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import Collapse from "@mui/material/Collapse";
import CardHeader from "@mui/material/CardHeader";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import IconButton from "@mui/material/IconButton";
import { cardStyle, cardHeaderStyle, iconStyle } from "./ProductSpecsStyle";
import styles from "./ProductSpecs.module.css";

const ProductSpecs = ({ title, productData }) => {
  const specsDisplay = productData.map(({ key, values }) => (
    <div className={styles.specs_item} key={key}>
      <p className={styles.specs_title}>{key}</p>
      <p className={styles.specs_value}>{values}</p>
    </div>
  ));

  const [open, setOpen] = useState(false);

  return (
    <>
      <Card sx={cardStyle}>
        <CardHeader
          title={title}
          sx={cardHeaderStyle}
          onClick={() => setOpen(!open)}
          action={
            <IconButton
              onClick={() => setOpen(!open)}
              aria-label="expand"
              sx={iconStyle}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          }
        ></CardHeader>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CardContent sx={{ padding: "0" }}>
            <Container
              sx={{
                lineHeight: 2,
              }}
            >
              <div className={styles.specs_container}>{specsDisplay}</div>
            </Container>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default ProductSpecs;
