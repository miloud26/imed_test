import { Box, Button, Rating, Typography } from "@mui/material";
import React from "react";
import { useGlobalContext } from "@/context/store";

const Rev = ({
  name,
  rate,
  desc,
}: {
  name: string;
  rate: number;
  desc: string;
}) => {
  return (
    <Box className="bg-[#dbeafe] p-4 rounded-md m-2">
      <Typography className="text-center text-xl font-bold mb-5">
        {name}
      </Typography>
      <Typography className="text-center font-bold mb-5">
        <Rating readOnly name="simple-controlled" value={rate} />
      </Typography>

      <Typography className="text-center  text-lg ">{desc}</Typography>
    </Box>
  );
};

let reviews = [
  {
    name: "kader barouagui",
    rate: 5,
    desc: "Achetez-en deux et bénéficiez de la livraison gratuiteAchetez-en deux et bénéficiez de la livraison gratuite",
  },
  {
    name: "kader barouagui",
    rate: 5,
    desc: "Achetez-en deux et bénéficiez de la livraison gratuiteAchetez-en deux et bénéficiez de la livraison gratuite",
  },
  {
    name: "kader barouagui",
    rate: 5,
    desc: "Achetez-en deux et bénéficiez de la livraison gratuiteAchetez-en deux et bénéficiez de la livraison gratuite",
  },
  {
    name: "kader barouagui",
    rate: 5,
    desc: "Achetez-en deux et bénéficiez de la livraison gratuiteAchetez-en deux et bénéficiez de la livraison gratuite",
  },
  {
    name: "kader barouagui",
    rate: 5,
    desc: "Achetez-en deux et bénéficiez de la livraison gratuiteAchetez-en deux et bénéficiez de la livraison gratuite",
  },
  {
    name: "kader barouagui",
    rate: 5,
    desc: "Achetez-en deux et bénéficiez de la livraison gratuiteAchetez-en deux et bénéficiez de la livraison gratuite",
  },
];

const Review = () => {
  const { lang } = useGlobalContext();
  const [ShowAll, setShowAll] = React.useState(false);

  return (
    <>
      <Box className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-11 my-7">
        {(ShowAll ? reviews : reviews.slice(0, 3)).map((item, index) => {
          return <Rev key={index} {...item} />;
        })}
      </Box>
      <Box className="flex justify-center items-center w-full mb-3">
        <Button
          onClick={() => setShowAll(true)}
          className={` font-bold py-[8px] text-black hover:bg-[#dbeafe] bg-[#dbeafe] mx-[12px] ${
            ShowAll ? "hidden" : "block"
          }`}
          variant="contained"
        >
          {lang ? "كل التقييمات" : "Toutes les notes"}
        </Button>
      </Box>
    </>
  );
};

export default Review;
