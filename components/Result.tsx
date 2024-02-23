"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  RiMapPin2Fill,
  RiLinkM,
  RiTwitterFill,
  RiBuilding4Fill,
} from "react-icons/ri";
import Link from "next/link";
import useSearch from "@/hooks/useSearch";
import useResult from "@/stores/useResult";
import ResultSkeleton from "./ResultSkeleton";
import { formatTime } from "@/utils/formatTime";

const Result = () => {
  const { isLoading } = useSearch();
  const { user } = useResult();

  return (
    <>
      {isLoading ? (
        <ResultSkeleton />
      ) : (
        <section className="w-full p-12 rounded-[15px] bg-ctp-crust mt-6 flex gap-[37px]">
          <div className="">
            <Avatar className="w-[117px] h-[117px]">
              <AvatarImage src={user.avatar_url} alt={user.login} />
              <AvatarFallback>GH</AvatarFallback>
            </Avatar>
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center px-[6px]">
              <h2 className="text-[26px] font-bold">
                {user.name || user.login || "The Octocat"}
              </h2>
              <p className="text-[15px]">
                {user.created_at
                  ? formatTime(user.created_at)
                  : "Joined 25 Jan 2011"}
              </p>
            </div>
            <span className="text-base text-ctp-blue">
              @{user.login || "octocat"}
            </span>
            <p className="mt-5 text-[15px] text-ctp-subtext0">
              {user.bio ||
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros."}
            </p>
            <div className="py-[15px] px-8 rounded-[10px] w-full bg-ctp-base mt-8 flex items-center justify-between">
              <div className="">
                <h6 className="text-[13px]">Repos</h6>
                <span className="font-bold text-[22px]">
                  {user.public_repos || 0}
                </span>
              </div>
              <div className="">
                <h6 className="text-[13px]">Followers</h6>
                <span className="font-bold text-[22px]">
                  {user.followers || 0}
                </span>
              </div>
              <div className="">
                <h6 className="text-[13px]">Following</h6>
                <span className="font-bold text-[22px]">
                  {user.following || 0}
                </span>
              </div>
            </div>
            <div className="w-full my-[37px] grid grid-cols-2 gap-5 text-[15px]">
              <div className="w-full flex flex-col gap-5">
                <div className="w-full flex items-center gap-5">
                  <RiMapPin2Fill className="text-xl" />
                  <span className="">{user.location || "Not Available"}</span>
                </div>
                <div className="w-full flex items-center gap-5">
                  <RiLinkM className="text-xl" />
                  <Link
                    href={user.blog || "#"}
                    className="hover:underline line-clamp-1 flex-1"
                  >
                    {user.blog || "Not Available"}
                  </Link>
                </div>
              </div>
              <div className="w-full flex flex-col gap-5">
                <div className="w-full flex items-center gap-5">
                  <RiTwitterFill className="text-xl" />
                  <span className="">
                    {user.twitter_username || "Not Available"}
                  </span>
                </div>
                <div className="w-full flex items-center gap-5">
                  <RiBuilding4Fill className="text-xl" />
                  <span className="line-clamp-1 flex-1">
                    {user.company || "Not Available"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Result;
