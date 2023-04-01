import { Button } from "@mui/material"

export const Login = () => {
    const handleLogin = () => {
        window.open('http://localhost:9090/auth/google', '_self')
    }
    return (
        <>
            <Button onClick={handleLogin} variant='contained'>Login</Button>
        </>
    )
}