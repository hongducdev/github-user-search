import axios from "axios";
import React, { useEffect, useState } from "react";

import { BiSearchAlt } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { FaLink, FaTwitter, FaBuilding } from "react-icons/fa";

const App = () => {
    const [search, setSearch] = useState("");
    let [inputValue, setInputValue] = useState("");
    const [data, setData] = useState([]);
    const [noResult, setNoResult] = useState(false);

    // lấy giá trị từ input và thực hiện tìm kiếm khi ấn nút button search
    const handleSearch = (e) => {
        setInputValue(e.target.value);
    };

    const handleClick = () => {
        console.log(inputValue);
        setSearch(inputValue);
    };

    useEffect(() => {
        // khi ấn nút search thì mới thực hiện tìm kiếm
        if (search) {
            axios.get(`https://api.github.com/users/${search}`)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
                setNoResult(false);
            })
            .catch((err) => {
                console.log(err);
                setNoResult(true);
            });
        }
    }, [search]);

    return (
        <div className="bg-[#F2F2F2] w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-4">
            <div className="">
                <div className="search flex items-center justify-between bg-[#FEFEFE] shadow-lg w-[90vw] p-2 rounded-2xl lg:w-[1000px]">
                    <BiSearchAlt className="text-[#0079FF] text-3xl mx-3 lg:mx-6" />
                    <input
                        type="text"
                        className="outline-none border-none w-full caret-[#0079FF]"
                        placeholder="Search GitHub username…"
                        // lấy giá trị từ input và thực hiện tìm kiếm khi ấn nút button search
                        onChange={handleSearch}
                    />
                    {noResult === true && (
                        <p className="text-[#F74646] font-bold mx-6 whitespace-nowrap">
                            No results
                        </p>
                    )}
                    <button
                        className="bg-[#0079FF] px-4 py-3 rounded-xl text-white"
                        onClick={handleClick}>
                        Search
                    </button>
                </div>
            </div>

            <div className="bg-[#FEFEFE] shadow-lg w-[90vw] rounded-2xl  p-6 lg:p-12 lg:w-[1000px]">
                <div className="flex gap-9 flex-col lg:flex-row">
                    <img
                        src={
                            data.avatar_url ||
                            "https://source.unsplash.com/random"
                        }
                        alt=""
                        className="rounded-full w-[117px] h-[117px] bg-cover bg-center border-[1px] border-[#0079FF] mr-10"
                    />
                    <div className="w-full">
                        <div className="flex justify-between flex-col gap-2 lg:flex-row lg:gap-0">
                            <div className="">
                                <h3 className="font-bold text-2xl">
                                    {data.name || "username"}
                                </h3>
                                <p className="text-[#0079FF] mt-2">
                                    @{data.login || "name"}
                                </p>
                            </div>
                            <div className="">
                                <p className="text-[#697C9A]">
                                    Joined{" "}
                                    {data.created_at
                                        ?.split("-")[2]
                                        .slice(0, 2) || "dd"}
                                    -{data.created_at?.split("-")[1] || "mm"}-
                                    {data.created_at?.split("-")[0] || "yyyy"}
                                </p>
                            </div>
                        </div>
                        <p className="text-[#4B6A9B] mt-3">
                            {data.bio || "Empty"}
                        </p>
                        <div className="bg-[#F6F8FF] py-4 px-8 rounded-[10px] mt-6 lg:mt-8 flex items-center justify-between">
                            <div className="">
                                <p className="text-[#4B6A9B] text-sm mb-2">
                                    Repos
                                </p>
                                <span className="text-[#2B3442] font-bold text-2xl">
                                    {data.public_repos || "0"}
                                </span>
                            </div>
                            <div className="">
                                <p className="text-[#4B6A9B] text-sm mb-2">
                                    Followers
                                </p>
                                <span className="text-[#2B3442] font-bold text-2xl">
                                    {data.followers || "0"}
                                </span>
                            </div>
                            <div className="">
                                <p className="text-[#4B6A9B] text-sm mb-2">
                                    Following
                                </p>
                                <span className="text-[#2B3442] font-bold text-2xl">
                                    {data.following || "0"}
                                </span>
                            </div>
                        </div>
                        <div className="text-[#4B6A9B] mt-6 lg:mt-9 flex items-center gap-0 flex-col lg:gap-5 lg:flex-row">
                            <div className="flex flex-col gap-0 lg:gap-3">
                                <span className="flex items-center gap-5">
                                    <IoLocationSharp />
                                    <span className="w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
                                        {data.location || "Not Available"}
                                    </span>
                                </span>
                                <span className="flex items-center gap-5">
                                    <FaLink />
                                    <a
                                        href={data.blog}
                                        className="w-[300px] whitespace-nowrap overflow-hidden text-ellipsis hover:underline">
                                        {data.blog || "Not Available"}
                                    </a>
                                </span>
                            </div>
                            <div className="flex flex-col gap-0 lg:gap-3">
                                <span className="flex items-center gap-5">
                                    <FaTwitter />
                                    <span className="w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
                                        @
                                        {data.twitter_username ||
                                            "Not Available"}
                                    </span>
                                </span>
                                <span className="flex items-center gap-5">
                                    <FaBuilding />
                                    <span className="w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">
                                        {data.company || "Not Available"}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
