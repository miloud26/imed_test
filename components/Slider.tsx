"use client";
import { Box, Typography } from "@mui/material";
import { useGlobalContext } from "@/context/store";

const Slider = () => {
  const { lang } = useGlobalContext();
  return (
    <Box className="w-full p-0 lg:p-6 overBg">
      <video className="w-full" src="video.mp4" autoPlay muted loop></video>
      <Box className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-20 text-white">
        {lang ? (
          <Box>
            <Typography className="text-sm  lg:text-lg xl:text-3xl font-bold text-center mb-5">
              من لحظة الولادة الى كل يوم
            </Typography>
            <Typography className="text-sm  lg:text-lg xl:text-3xl font-bold text-center">
              رحلتنا معا من حنان الامومة الى حظن متجرنا
            </Typography>
          </Box>
        ) : (
          <Box>
            <Typography className="text-sm  lg:text-lg xl:text-3xl font-bold text-center mb-5 letter tracking-wider">
              Bébé dés sa naissance, chaque jour est un voyage
            </Typography>
            <Typography className="text-sm  lg:text-lg xl:text-3xl font-bold text-center letter tracking-wider">
              de la tendresse maternelle a la l'étreinte de notre boutique
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Slider;
