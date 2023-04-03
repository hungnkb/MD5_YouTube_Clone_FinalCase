import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export const Login = () => {
    const handleLogin = async () => {
        window.open('http://localhost:9090/auth/google', '_self');
    }
    return (
        <>
            <Button onClick={handleLogin} variant='contained'>Login</Button>
        </>
    )
}