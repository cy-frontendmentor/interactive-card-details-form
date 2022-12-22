"use client";
import { useEffect, useState } from "react";

const CardInput = () => {
  const [inputValue, setInputValue] = useState<any>("");
  // useEffect(() => {
  //   // setInputValue((inputValue: any) =>
  //   //   inputValue
  //   //     .replace(/[^\dA-Z]/g, "")
  //   //     .replace(/(.{4})/g, "$1 ")
  //   //     .trim()
  //   // );

  //   if (inputValue.length > 0) {
  //     // if (inputValue.split(" ").join("").length % 4 == 0) {
  //     setInputValue((v: any) => (v += " "));
  //     // }
  //   }
  //   // setInputValue((inputValue) =>
  //   //   inputValue
  //   //     .toString()
  //   //     .replace(/(.{4})/g, "$1 ")
  //   //     .trim()
  //   // );
  // }, [inputValue]);
  // console.log(inputValue);

  const handleChange = (event: any) => {
    setInputValue(
      event.target.value
        .replace(/[^\dA-Z]/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
    );

    console.log("value is:", event.target.value);
  };

  return (
    <div className=" grid gap-y-[9px]">
      <label
        htmlFor="name"
        className=" block translate-x-[2px] text-xs font-medium uppercase text-very-dark-violet"
      >
        Cardholder Name GG
      </label>

      <input
        aria-disabled={false}
        type="text"
        id="name"
        value={inputValue}
        onChange={handleChange}
        placeholder="e.g. 1234 5678 9123 0000"
        className=" focus:border-gradient w-full rounded-lg border border-light-grayish-violet py-[11px] pl-4 font-medium text-very-dark-violet placeholder:text-lg placeholder:font-medium placeholder:leading-normal placeholder:text-very-dark-violet placeholder:opacity-25  focus:outline-none aria-disabled:border-red"
      />
      {false && (
        <p className="text-xs font-medium text-red">
          {"Wrong format,numbers only"}
        </p>
      )}
    </div>
  );
};

export default CardInput;
