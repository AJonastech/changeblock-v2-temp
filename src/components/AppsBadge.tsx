"use client";

import { AppsIcon } from "@/icons";
import useIsMounted from "@/lib/hooks/useIsMounted";

import { ArrowRight2 } from "iconsax-react";
import Link from "next/link";
import React from "react";
import { useLocation } from "react-use";

const AppsBadge = () => {
  const isMounted = useIsMounted();

  const location = useLocation();
  const currentPath = location?.pathname?.split("/")[1];
  const currentApp = currentPath?.split("-").join(" ");
  console.log({ location });
  return (
    <span className="flex gap-3 w-fit  justify-start items-center sm:gap-2">
      <span className="hover:cursor-pointer  rounded-full px-4 sm:px-3 sm:text-sm py-1.5 font-Satoshi font-normal bg-secondary fw-fit h-full">
        <Link
          className="flex justify-start items-center gap-2 hover:cursor-pointer"
          href="/"
        >
          <AppsIcon /> Apps
        </Link>
      </span>
      <ArrowRight2 size={18} />
      <p className="rounded-full py-1.5 font-Satoshi font-medium text-black-500 sm:text-sm capitalize">
        {currentApp as unknown as string}
      </p>
    </span>
  );
};

export default AppsBadge;
