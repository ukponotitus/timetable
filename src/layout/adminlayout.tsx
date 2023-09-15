import { Box, Container } from "@mui/material";
import { PropsWithChildren } from "react";
import TableAppBar from "@/component/app/appbar";
import theme from "@/theme/Theme";
import Footer from "@/component/app/footer/footer";
import { ITimetableFilter } from "@/lib/interfaces/filter";

interface  Props extends  PropsWithChildren{
 setFilter: React.Dispatch<React.SetStateAction<ITimetableFilter>>
}
export default function AdminDashboardLayout({ children, setFilter }: Props) {
  return (
    <Container disableGutters maxWidth={false} sx={{background:theme.palette.primary.main, minHeight:''}}>
        <TableAppBar setFilter={setFilter} home={"Home"} logout={"Logout"} login={"Login"} />
      <Box >{children}</Box>
      <Box sx={{background:"black", mt:"10%"}}>
      <Footer />
      </Box>
      
    </Container>
  );
}