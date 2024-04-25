import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";
import { grayColor } from "../constants/color";

const Home = () => {
  return (

    <Box bgcolor={grayColor} height={"100%"}>
      <div className="flex flex-col  justify-center items-center h-[80vh]   ">

        <h1 className=" text-5xl font-bold ">

          Select a friend to chat

        </h1>
        <p>
          (or refresh the page as it is deployed on free server )

        </p>
      </div>
    </Box>
  );
};

export default AppLayout()(Home);
