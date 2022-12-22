"use client";
import { useState } from "react";
import icon from "../../public/images/icon-complete.svg";
import Image from "next/image";

const Form = () => {
  const [enteredName, setEnteredName] = useState("");
  const [nameInputIsFalse, setNameInputIsFail] = useState<boolean>(false);
  const [enteredCardNumber, setEnteredCardNumber] = useState("");
  const [cardNumberInputIsFalse, setCardNumberInputIsFail] =
    useState<boolean>(false);
  const [enteredMonth, setEnteredMonth] = useState("");
  const [monthInputIsFalse, setMonthInputIsFail] = useState<boolean>(false);
  const [enteredYear, setEnteredYear] = useState("");
  const [yearInputIsFalse, setYearInputIsFail] = useState<boolean>(false);
  const [enteredCVC, setEnteredCVC] = useState("");
  const [CVCInputIsFalse, setCVCInputIsFail] = useState<boolean>(false);
  const [submitISValid, setSubmitIsValid] = useState<boolean>(false);

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (enteredName.trim() == "" || !enteredName) {
      setNameInputIsFail(true);
    } else {
      setNameInputIsFail(false);
    }

    if (enteredCardNumber.trim() == "" || !enteredCardNumber) {
      setCardNumberInputIsFail(true);
    } else {
      setCardNumberInputIsFail(false);
    }

    if (enteredMonth.trim() == "" || !enteredMonth) {
      setMonthInputIsFail(true);
    } else {
      setMonthInputIsFail(false);
    }

    if (enteredYear.trim() == "" || !enteredYear) {
      setYearInputIsFail(true);
    } else {
      setYearInputIsFail(false);
    }

    if (enteredCVC.trim() == "" || !enteredCVC) {
      setCVCInputIsFail(true);
    } else {
      setCVCInputIsFail(false);
    }

    if (
      !nameInputIsFalse &&
      !cardNumberInputIsFalse &&
      !monthInputIsFalse &&
      !yearInputIsFalse &&
      !CVCInputIsFalse
    ) {
      setSubmitIsValid(true);
    }
    console.log(
      submitISValid,
      yearInputIsFalse,
      nameInputIsFalse,
      monthInputIsFalse,
      enteredCVC,
      cardNumberInputIsFalse
    );
  };

  if (submitISValid) {
    return (
      <div className=" grid justify-items-center text-center">
        <Image
          src={icon}
          alt=""
          width={80}
          height={80}
          className="mb-[35px]"
        ></Image>
        <div className="mb-12 grid gap-y-4 text-very-dark-violet">
          <h1 className="text-[28px] tracking-[3.42px]">Thank you!</h1>
          <p className="text-lg text-dark-grayish-violet">
            We&apos;ve added your card details
          </p>
        </div>

        <button className="w-full rounded-lg bg-very-dark-violet py-[15px] text-lg leading-none text-white">
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="z-50 max-w-[381px] ">
      <form onSubmit={submitHandler}>
        <div className="mb-7 grid gap-y-5">
          {/* NAME */}
          <div className=" grid gap-y-[9px]">
            <label
              htmlFor="name"
              className=" block translate-x-[2px] text-xs font-medium uppercase text-very-dark-violet"
            >
              Cardholder Name
            </label>

            <input
              aria-disabled={nameInputIsFalse}
              type="text"
              id="name"
              value={enteredName}
              onChange={(e) => {
                setEnteredName(e.target.value);
              }}
              placeholder="e.g. Jane Appleseed"
              className=" focus:border-gradient w-full rounded-lg border border-light-grayish-violet py-[11px] pl-4 font-medium text-very-dark-violet placeholder:text-lg placeholder:font-medium placeholder:leading-normal placeholder:text-very-dark-violet placeholder:opacity-25  focus:outline-none aria-disabled:border-red"
            />
            {nameInputIsFalse && (
              <p className="text-xs font-medium text-red">{"Can't be blank"}</p>
            )}
          </div>
          {/* CARD */}
          <div className=" grid gap-y-[9px]">
            <label
              htmlFor="name"
              className=" block translate-x-[2px] text-xs font-medium uppercase text-very-dark-violet"
            >
              Cardholder Name
            </label>

            <input
              aria-disabled={cardNumberInputIsFalse}
              type="text"
              id="name"
              value={enteredCardNumber}
              onChange={(e) => {
                setEnteredCardNumber(e.target.value);
              }}
              maxLength={16}
              placeholder="e.g. 1234 5678 9123 0000"
              className=" focus:border-gradient w-full rounded-lg border border-light-grayish-violet py-[11px] pl-4 font-medium text-very-dark-violet placeholder:text-lg placeholder:font-medium placeholder:leading-normal placeholder:text-very-dark-violet placeholder:opacity-25  focus:outline-none aria-disabled:border-red"
            />
            {cardNumberInputIsFalse && (
              <p className="text-xs font-medium text-red">{"Can't be blank"}</p>
            )}
          </div>

          <div className="flex items-start space-x-[11px] md:space-x-[20px]">
            {/* DATE */}
            <div className=" grid max-w-[152px] gap-y-[9px]">
              <label
                htmlFor="month"
                className=" block translate-x-[2px] text-xs font-medium uppercase text-very-dark-violet"
              >
                EXP. DATE (MM/YY)
              </label>
              <div className="flex space-x-2 md:space-x-[10px]">
                <input
                  aria-disabled={monthInputIsFalse}
                  value={enteredMonth}
                  onChange={(e) => {
                    setEnteredMonth(e.target.value);
                  }}
                  type="text"
                  placeholder="MM"
                  maxLength={2}
                  pattern="\d{2}"
                  className=" focus:border-gradient w-full rounded-lg border border-light-grayish-violet py-[11px] pl-4 font-medium text-very-dark-violet placeholder:text-lg placeholder:font-medium placeholder:leading-normal placeholder:text-very-dark-violet placeholder:opacity-25  focus:outline-none aria-disabled:border-red"
                />
                <input
                  aria-disabled={yearInputIsFalse}
                  value={enteredYear}
                  onChange={(e) => {
                    setEnteredYear(e.target.value);
                  }}
                  type="text"
                  placeholder="YY"
                  maxLength={2}
                  pattern="\d{2}"
                  className=" focus:border-gradient w-full rounded-lg border border-light-grayish-violet py-[11px] pl-4 font-medium text-very-dark-violet placeholder:text-lg placeholder:font-medium placeholder:leading-normal placeholder:text-very-dark-violet placeholder:opacity-25  focus:outline-none aria-disabled:border-red"
                />
              </div>
              {(monthInputIsFalse || yearInputIsFalse) && (
                <p className="text-xs font-medium text-red">
                  {"Can't be blank"}
                </p>
              )}
            </div>
            {/* CVC */}
            <div className=" grid flex-1 gap-y-[9px]">
              <label
                htmlFor="month"
                className=" block translate-x-[2px] text-xs font-medium uppercase text-very-dark-violet"
              >
                CVC
              </label>

              <input
                aria-disabled={CVCInputIsFalse}
                type="text"
                value={enteredCVC}
                onChange={(e) => {
                  setEnteredCVC(e.target.value);
                }}
                placeholder="e.g. 123"
                maxLength={3}
                pattern="\d{3}"
                className=" focus:border-gradient w-full rounded-lg border border-light-grayish-violet py-[11px] pl-4 font-medium text-very-dark-violet placeholder:text-lg placeholder:font-medium placeholder:leading-normal placeholder:text-very-dark-violet placeholder:opacity-25  focus:outline-none aria-disabled:border-red"
              />

              {CVCInputIsFalse && (
                <p className="text-xs font-medium text-red">
                  {"Wrong format,numbers only"}
                </p>
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-very-dark-violet py-[15px] text-white"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Form;
