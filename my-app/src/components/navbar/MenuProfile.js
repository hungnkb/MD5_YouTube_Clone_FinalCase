import { Stack, Typography } from "@mui/material";

export const MenuProfile = (props) => {
    const title = props.title

    return (
        <>
            <Typography>
                {title}
            </Typography>
        </>
    )
}