import styled from "@emotion/styled";
import {  Button } from "@mui/material"
type styling ={
    background: string ;
    RoundButton: string | number;
}
const RoundButton = styled(Button)(({ variant })=>{
    const style = {
        borderRadius: "8px",
        boxShadow: "none",
        background:"#064415",
      }
      if (variant == "contained") {
        style.background = "#064415" 
      }
      return style

})
export default RoundButton;