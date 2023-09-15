import { Box, Button, Stack, Typography } from "@mui/material";

interface Text{
    name:string,
    btn:string,
}

export default function EditText(props: Text){
return(
    <>
    <Stack>
        <Box>
            <Typography>{props.name}</Typography>
        </Box>
        <Box>
            <Button>{props.btn}</Button>
        </Box>
    </Stack>
    
    </>
)
}