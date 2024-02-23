"use client";
import useSearch from "@/hooks/useSearch";
import useResult from "@/stores/useResult";
import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";

const SearchInput = () => {
  const [search, setSearch] = useState<string>("");
  const { getUser } = useSearch();
  const { isNotFound } = useResult();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getUser(search);
  };

  return (
    <form
      className="w-full bg-ctp-crust p-[10px] rounded-[15px] flex items-center"
      onSubmit={handleSubmit}
    >
      <div className="px-3">
        <RiSearch2Line className="text-2xl text-ctp-blue" />
      </div>
      <div className="w-full relative">
        <input
          type="text"
          className="bg-transparent outline-none border-none w-full"
          placeholder="Search Github username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {isNotFound && (
          <span className="font-bold text-[15px] absolute right-6 text-ctp-red">
            No results
          </span>
        )}
      </div>
      <button className="px-6 py-3 rounded-[10px] bg-ctp-blue font-bold text-ctp-base">
        Search
      </button>
    </form>
  );
};

export default SearchInput;
