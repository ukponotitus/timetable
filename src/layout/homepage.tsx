import { Box, Container } from "@mui/material";
import { PropsWithChildren } from "react";
import TableAppBar from "@/component/app/appbar";
import theme from "@/theme/Theme";
import Footer from "@/component/app/footer/footer";

export default function UserDashboardLayout({ children }: PropsWithChildren) {
  return (
    <Container disableGutters maxWidth={false} sx={{background:theme.palette.primary.main, minHeight:''}}>
        <TableAppBar />
      <Box >{children}</Box>
      <Box sx={{background:"black", mt:"10%"}}>
      <Footer />
      </Box>
      
    </Container>
  );
}