const Input = ({
  inputValue,
  getValue,
  inputStatus,
}: {
  inputValue: string;
  getValue: any;
  inputStatus: boolean;
}) => {
  return (
    <div className=" grid gap-y-[9px]">
      <label
        htmlFor="name"
        className=" block translate-x-[2px] text-xs font-medium uppercase text-very-dark-violet"
      >
        Cardholder Name
      </label>

      <input
        aria-disabled={inputStatus}
        type="text"
        id="name"
        value={inputValue}
        onChange={(e) => {
          getValue(e.target.value);
        }}
        placeholder="e.g. Jane Appleseed"
        className=" focus:border-gradient w-full rounded-lg border border-light-grayish-violet py-[11px] pl-4 font-medium text-very-dark-violet placeholder:text-lg placeholder:font-medium placeholder:leading-normal placeholder:text-very-dark-violet placeholder:opacity-25  focus:outline-none aria-disabled:border-red"
      />
      {inputStatus && (
        <p className="text-xs font-medium text-red">
          {"Wrong format,numbers only"}
        </p>
      )}
    </div>
  );
};

export default Input;
