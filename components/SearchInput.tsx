import React from "react";
import { RiSearch2Line } from "react-icons/ri";

const SearchInput = () => {
  return (
    <section className="w-full bg-ctp-crust p-[10px] rounded-[15px] flex items-center">
      <div className="px-3">
        <RiSearch2Line className="text-2xl text-ctp-blue" />
      </div>
      <input
        type="text"
        className="bg-transparent outline-none border-none w-full"
        placeholder="Search Github username..."
      />
      <button className="px-6 py-3 rounded-[10px] bg-ctp-blue font-bold text-ctp-base">
        Search
      </button>
    </section>
  );
};

export default SearchInput;
