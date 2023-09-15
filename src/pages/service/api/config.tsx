import axios from "axios";
axios.defaults.baseURL = "https://beeflash.pythonanywhere.com/"
axios.defaults.withCredentials=false;

export  function setToken(token: string |null): void{
    if(token){
        axios.defaults.headers.common.Authorization = token? `token ${token}` : "";
        // axios.defaults.headers.common.Token= token;
    }

}

// import express from 'express';
// import cors from 'cors';
// const app = express();

// app.use(cors());

