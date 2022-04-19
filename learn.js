const express=require('express');

const app=express();

const PORT= process.env.PORT || 3306;

app.listen(PORT, ()=>console.log(`server started at ${PORT}`));