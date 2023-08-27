"use client";
import React, { useState, useEffect } from "react";

import {
  Box,
  Typography,
  TextField,
  Button,
  Modal,
  FormControlLabel,
  Radio,
  FormControl,
  RadioGroup,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Review from "@/components/Rev";

const dataProduct = {
  title: "First Product",
  desc: "Description",
  price: "3200",
  image:
    "https://i.discogs.com/wzG_cKpaFNQN0cblHYAvTDC5Z41ZNcbWY3NXsnSH1BA/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIxNjkw/MjYyLTE2NDE4ODM1/MjQtNjE3My5qcGVn.jpeg",
};

export default function Page() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [wilaya, setWilaya] = useState("");
  const [adress, setAdress] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [model, setModel] = useState("");
  const [prixDelevred, setPrixDelevred] = useState(500);

  useEffect(() => {
    if (quantity > 1) {
      setPrixDelevred(0);
    } else {
      setPrixDelevred(500);
    }
  }, [quantity]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    deleteOrder();

    try {
      const data = new FormData();
      data.append(
        "date",
        `${new Date().getDate()}/${
          new Date().getMonth() + 1
        } - ${new Date().getHours()}H : ${new Date().getMinutes()}M`
      );
      data.append("name", name);
      data.append("phone", phone);
      data.append("wilaya", wilaya);
      data.append("adress", adress);
      data.append("product", dataProduct.titleFr);
      data.append("quantity", quantity.toString());
      data.append("model", model);
      data.append(
        "prix",
        (+dataProduct.prix * +quantity + prixDelevred).toString()
      );
      data.append("upsell", timeDeffrent <= 5 * 60 * 60 * 1000 ? "1" : "");

      await fetch(sheet, {
        method: "POST",
        body: data,
      });
      handleOpen();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Box className="fixed bottom-0 left-0 w-full mb-2  flex justify-center items-center btn-buynow">
        <Button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0 });
          }}
          className="  lg:text-xl w-[80%] h-[20px] py-6 font-bold lg:py-[30px] text-black hover:bg-[#91b7e9] bg-[#91b7e9] mx-[12px] flex justify-center items-center"
          variant="contained"
        >
          اشتري الان
        </Button>
      </Box>
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
            <Box>
              <Typography className="text-3xl text-center font-bold w-full mb-6">
                title
              </Typography>
            </Box>

            <Box
              flexDirection={"column"}
              className="mt-5 flex justify-center items-center w-full"
            >
              <Typography className="text-center text-lg mb-6">
                لقد تم استلام طلبك سنتصل بك للتأكيد في اقرب وقت
              </Typography>
              <Link href="/">
                {" "}
                <Button
                  onClick={handleClose}
                  className="block font-bold w-full py-[8px] text-black hover:bg-[#dbeafe] bg-[#dbeafe] mx-[12px] "
                  variant="contained"
                >
                  موافق
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
          هل تريد المساعدة؟ اتصل بنا +213777651022
        </Typography>
      </Box>
      <Box className=" flex w-fit justify-center items-start px-5 md:px-14  lg:px-[200px] gap-5 flex-wrap lg:flex-nowrap">
        <Box className="border border-blue-300 border-solid rounded-md relative mr-4 mt-10  mb-5 lg:sticky lg:top-[80px] lg:left-0 w-full lg:w-[500px] flex items-center justify-end">
          <img
            className="rounded-lg w-full h-full "
            alt={dataProduct?.title}
            src={dataProduct?.image}
          />
        </Box>
        <Box className=" w-full lg:w-[48%] ">
          <Box className="mb-5 w-full">
            {" "}
            <Typography className="text-3xl font-bold w-full mt-3">
              {dataProduct.title}
            </Typography>
            <Typography className="text-[24px] font-bold w-full mt-3 text-blue-400">
              {dataProduct?.price}دج
            </Typography>
          </Box>
          <Box>
            <form
              onSubmit={handleSubmitOrder}
              className="border-3 border-blue-400 border-solid rounded-md p-5 shadow-xl my-10"
            >
              <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-2 ">
                <TextField
                  onChange={(e) => {
                    setName(e.target.value);
                    updateOrder();
                  }}
                  placeholder="الاسم الكامل"
                  label="الاسم الكامل"
                  className="mb-3"
                />
                <TextField
                  onChange={(e) => {
                    setPhone(e.target.value);
                    updateOrder();
                  }}
                  placeholder="رقم الهاتف"
                  label="رقم الهاتف"
                />
              </Box>
              <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-2 mt-3">
                <TextField
                  onChange={(e) => {
                    setWilaya(e.target.value);
                    updateOrder();
                  }}
                  placeholder="الولاية"
                  label="الولاية"
                  className="mb-3"
                />
                <TextField
                  placeholder="البلدية"
                  label="البلدية"
                  onChange={(e) => {
                    setAdress(e.target.value);
                    updateOrder();
                  }}
                />
              </Box>
              <Box className="my-6 w-full p-4  bg-[#dbeafe] rounded-lg">
                <Box className="w-fulll flex justify-between items-center mb-7">
                  <Typography className="font-bold text-xl">
                    سعر المنتج
                  </Typography>
                  <Typography className="font-bold text-xl">
                    {dataProduct?.prix} دج
                  </Typography>
                </Box>
                <Box className="w-fulll flex justify-between items-center mb-7">
                  <Typography className="font-bold text-xl">الكمية</Typography>
                  <Typography className="font-bold text-xl">
                    {quantity}
                  </Typography>
                </Box>
                <Box className="w-fulll flex justify-between items-center mb-7">
                  <Typography className="font-bold text-xl">
                    سعر التوصيل
                  </Typography>
                  <Typography className="font-bold text-xl">
                    {prixDelevred} دج
                  </Typography>
                </Box>
                <Box className="w-fulll flex justify-between items-center ">
                  <Typography className="font-bold text-xl">المجموع</Typography>
                  <Typography className="font-bold text-xl">
                    {(+dataProduct?.prix * quantity + prixDelevred).toString()}{" "}
                    دج
                  </Typography>
                </Box>
              </Box>
              <Box className="my-6 w-full p-4  bg-[#dbeafe] rounded-lg mt-5">
                {" "}
                <Box className="w-fulll flex justify-between items-center ">
                  <FormControl>
                    <RadioGroup>
                      <FormControlLabel
                        onClick={() => {
                          setQuantity(1);
                          setPrixDelevred(500);
                        }}
                        value="female"
                        control={<Radio />}
                        label={
                          <Typography className="font-bold text-xl">
                            قطعة واحدة و التوصيل 500 دج
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        onClick={() => {
                          setQuantity(2);
                          setPrixDelevred(0);
                        }}
                        value="male"
                        control={<Radio />}
                        label={
                          <Typography className="font-bold text-xl">
                            اشتري اثنين واحصل على توصيل مجاني
                          </Typography>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Box>
              <Box className="w-full flex justify-between items-center ">
                <Button
                  className="font-bold w-[60%] ml-1 mt-3 py-[8px] text-black hover:bg-[#dbeafe] bg-[#dbeafe] "
                  variant="contained"
                  type="submit"
                >
                  اشتري الان
                </Button>
                <Box className="w-[40%] flex justify-between items-center  rounded-lg p-4">
                  <Button
                    className="font-bold flex justify-between items-center w-[100%] mt-3 py-[8px] text-black hover:bg-[#dbeafe] bg-[#dbeafe] "
                    variant="contained"
                  >
                    <Typography
                      className="font-bold "
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Typography>
                    <Typography className="font-bold">{quantity}</Typography>
                    <Typography
                      className="font-bold "
                      onClick={() => {
                        if (quantity == 1) {
                          setQuantity(quantity);
                          setPrixDelevred(500);
                        } else {
                          setQuantity(quantity - 1);
                          setPrixDelevred(0);
                        }
                      }}
                    >
                      -
                    </Typography>
                  </Button>
                </Box>
              </Box>
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
                  __html: dataProduct?.desc,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Review />
    </Box>
  );
}
