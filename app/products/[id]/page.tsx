"use client";
import React, { FC, useState } from "react";
import { useGlobalContext } from "@/context/store";
import { Box, Typography, TextField, Button, Modal } from "@mui/material";
import Link from "next/link";
import { Metadata } from "next";

type ProductType = {
  params: { id: string };
};

export default function Page({ params }: ProductType) {
  const { dataProducts, lang, sheet } = useGlobalContext();
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [wilaya, setWilaya] = useState<string>("");
  const [adress, setAdress] = useState<string>("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmitOrder = (e: any) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("name", name);
      data.append("phone", phone);
      data.append("wilaya", wilaya);
      data.append("adress", adress);
      fetch(sheet, {
        method: "POST",
        body: data,
      });
      handleOpen();
    } catch (error) {
      console.log(error);
    }
  };

  const dataProduct = dataProducts.filter(
    (item) => item.id.toString() == params.id.toString()
  )[0];

  return (
    <Box>
      <div>
        <Modal open={open} onClose={handleClose}>
          <Box
            className="w-full lg:w-[650px]"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",

              bgcolor: "background.paper",
              borderRadius: "15px",
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography className="w-full text-center text-black text-xl">
              {lang
                ? "لقد تم استلام طلبك سنتصل بك للتأكيد في اقرب وقت"
                : "Votre demande a bien été reçue, nous vous contacterons pour confirmer dans les plus brefs délais"}
            </Typography>
            <Box className="mt-5 flex justify-center items-center">
              <Link href="/shop">
                {" "}
                <Button
                  className="block font-bold py-[8px] text-black hover:bg-[#dbeafe] bg-[#dbeafe] mx-[12px] "
                  variant="contained"
                >
                  {lang ? "تسوق الان" : "Achetez maintenant"}
                </Button>
              </Link>
            </Box>
          </Box>
        </Modal>
      </div>
      <Box
        width="100%"
        height={"80px"}
        className="bg-blue-400 my-5  flex justify-center items-center"
      >
        <Typography className="text-xl text-center font-bold w-full ">
          {lang
            ? "هل تريد المساعدة؟ اتصل بنا +213777651022"
            : "Veux tu aider? appelez-nous +213777651022"}
        </Typography>
      </Box>
      <Box className=" flex w-fit justify-center items-start px-5 md:px-14  lg:px-[200px] gap-5 flex-wrap lg:flex-nowrap">
        <Box className="border border-blue-300 border-solid rounded-md relative mr-4 mt-10  mb-5 lg:sticky lg:top-[80px] lg:left-0 w-full lg:w-[500px] flex items-center justify-end">
          <img
            className="rounded-lg w-full h-full "
            alt={dataProduct?.titleFr}
            src={dataProduct?.image}
          />
        </Box>
        <Box className=" w-full lg:w-[48%] ">
          <Box className="mb-5 w-full">
            {" "}
            <Typography className="text-3xl font-bold w-full mt-3">
              {!lang ? dataProduct?.titleFr : dataProduct?.titleAr}
            </Typography>
            <Typography className="text-[24px] font-bold w-full mt-3 text-blue-400">
              {dataProduct?.prix}
              {lang ? "دج" : "DA"}
            </Typography>
          </Box>
          <Box>
            <form
              onSubmit={handleSubmitOrder}
              className="border-3 border-blue-400 border-solid rounded-md p-5 shadow-xl my-10"
            >
              <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-2 ">
                <TextField
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang ? "الاسم الكامل" : "Full Name"}
                  label={lang ? "الاسم الكامل" : "Nom & Prenom"}
                  className="mb-3"
                />
                <TextField
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={lang ? "رقم الهاتف" : "Phone Number"}
                  label={lang ? "رقم الهاتف" : "Telephone"}
                />
              </Box>
              <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-2 mt-3">
                <TextField
                  onChange={(e) => setWilaya(e.target.value)}
                  placeholder={lang ? "الولاية" : "Wilaya"}
                  label={lang ? "الولاية" : "Wilaya"}
                  className="mb-3"
                />
                <TextField
                  placeholder={lang ? "العنوان" : "Adresse"}
                  label={lang ? "العنوان" : "Adresse"}
                  onChange={(e) => setAdress(e.target.value)}
                />
              </Box>
              <Button
                className="font-bold w-full mt-3 py-[8px] text-black hover:bg-[#dbeafe] bg-[#dbeafe] "
                variant="contained"
                type="submit"
              >
                {lang ? "اشتري الان" : "Acheter maintenant"}
              </Button>
            </form>
            <Box className="mt-8">
              {" "}
              <img
                src="/shipping.jpeg"
                alt="shipping"
                className="w-auto object-cover"
              />
            </Box>
            <Box className="w-full flex justify-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: lang
                    ? dataProduct?.descriptionAr
                    : dataProduct?.descriptionFr,
                }}
              />
            </Box>
            <form
              onSubmit={handleSubmitOrder}
              className="border-3 border-blue-400 border-solid rounded-md p-5 shadow-xl my-10"
            >
              <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-2 ">
                <TextField
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang ? "الاسم الكامل" : "Full Name"}
                  label={lang ? "الاسم الكامل" : "Nom & Prenom"}
                  className="mb-3"
                />
                <TextField
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={lang ? "رقم الهاتف" : "Phone Number"}
                  label={lang ? "رقم الهاتف" : "Telephone"}
                />
              </Box>
              <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-2 mt-3">
                <TextField
                  onChange={(e) => setWilaya(e.target.value)}
                  placeholder={lang ? "الولاية" : "Wilaya"}
                  label={lang ? "الولاية" : "Wilaya"}
                  className="mb-3"
                />
                <TextField
                  placeholder={lang ? "العنوان" : "Adresse"}
                  label={lang ? "العنوان" : "Adresse"}
                  onChange={(e) => setAdress(e.target.value)}
                />
              </Box>
              <Button
                className="font-bold w-full mt-3 py-[8px] text-black hover:bg-[#dbeafe] bg-[#dbeafe] "
                variant="contained"
                type="submit"
              >
                {lang ? "اشتري الان" : "Acheter maintenant"}
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
