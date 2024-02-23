import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const ResultSkeleton = () => {
  return (
    <section className="w-full p-12 rounded-[15px] bg-ctp-crust mt-6 flex gap-[37px]">
      <Skeleton className="h-[117px] w-[117px] rounded-full" />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <Skeleton className="w-[200px] h-[30px]" />
          <Skeleton className="w-[100px] h-[20px]" />
        </div>
        <Skeleton className="w-[100px] h-[20px] mt-2" />
        <Skeleton className="w-full h-[40px] mt-5" />
        <Skeleton className="w-full h-[80px] mt-5" />
        <div className="grid grid-cols-2 mt-[37px] gap-3">
          <div className="flex flex-col gap-5">
            <Skeleton className="w-full h-[30px]" />
            <Skeleton className="w-full h-[30px]" />
          </div>
          <div className="flex flex-col gap-5">
            <Skeleton className="w-full h-[30px]" />
            <Skeleton className="w-full h-[30px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultSkeleton;
