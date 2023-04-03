import React, {useEffect, useState} from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import axios from "axios";
import Subscribe from "./subscribe/Subscribe";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
    const isLogined = useSelector(state => state.auth.isLogined);
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: "auto",
                height: {sx: "auto", md: "95%"},
                flexDirection: {md: "column"},
            }}
        >
            {categories.map((category) => (
                <button
                    className="category-btn"
                    onClick={() => setSelectedCategory(category.name)}
                    style={{
                        background: category.name === selectedCategory && "#FC1503",
                        color: "black",
                    }}
                    key={category.name}
                >
        <span style={{color: category.name === selectedCategory ? "white" : "black", marginRight: "15px"}}>
          {category.icon}
        </span>
                    <span style={{color: 'black', opacity: category.name === selectedCategory ? "1" : "0.8"}}>
          {category.name}
        </span>
                </button>
            ))}
            {
                isLogined ? <Subscribe/> : null
            }
        </Stack>
    )
}

export default Categories;
