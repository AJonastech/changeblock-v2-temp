"use client";
import { RiArchiveStackFill } from "react-icons/ri";
import { HiMiniCircleStack } from "react-icons/hi2";
import { BiSolidBarChartSquare } from "react-icons/bi";
import { FaHouse } from "react-icons/fa6";
import { PiChartLineFill } from "react-icons/pi";
import { GrCycle } from "react-icons/gr";
import { CgTrending } from "react-icons/cg";
import { VscThumbsupFilled } from "react-icons/vsc";
import { AiFillAppstore } from "react-icons/ai";
import { FaUnlockAlt, FaLock } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { SlReload } from "react-icons/sl";
import { BsPersonPlus } from "react-icons/bs";
import { BsChatSquare } from "react-icons/bs";
import { GoStack } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { HiChatBubbleLeftRight } from "react-icons/hi2";import { FcFaq } from "react-icons/fc";

// Define the type for the props

export const HomeIcon = () => {
  return (
    <span className="">
      {" "}
      <FaHouse color="#333530" />
    </span>
  );
};

export const FAQIcon = () => {
  return (
    <span className=" filter grayscale contrast-200  text-xl ">
      {" "}
      <HiChatBubbleLeftRight  color="#6A6B67" />
    </span>
  );
};

export const OverviewIcon = () => {
  return (
    <span className=" -rotate-90">
      <RiArchiveStackFill color="#333530" />
    </span>
  );
};

export const AnalysisIcon = () => {
  return (
    <span>
      <PiChartLineFill color="#333530" />
    </span>
  );
};

export const RegulatoryIcon = () => {
  return (
    <span>
      <GrCycle color="#333530" />
    </span>
  );
};

export const MethodologyIcon = () => {
  return (
    <span>
      <HiMiniCircleStack color="#333530" />
    </span>
  );
};

export const AssessmentIcon = () => {
  return (
    <span>
      <BiSolidBarChartSquare color="#333530" />
    </span>
  );
};

export const InsightIcon = () => {
  return (
    <span>
      <CgTrending color="#333530" />
    </span>
  );
};

export const RecommendationIcon = () => {
  return (
    <span>
      <VscThumbsupFilled color="#333530" />
    </span>
  );
};
export const UnlockIcon = () => {
  return (
    <span>
      <FaUnlockAlt color="#333530" />
    </span>
  );
};

export const LockIcon = () => {
  return (
    <span>
      <FaLock color="#333530" />
    </span>
  );
};

export const AppsIcon = () => {
  return (
    <span>
      <AiFillAppstore color="#333530" />
    </span>
  );
};

export const EditIcon = () => {
  return (
    <span>
      <LuPencil />
    </span>
  );
};

export const RefreshIcon = () => {
  return (
    <span>
      <SlReload />
    </span>
  );
};

export const AddPersonIcon = () => {
  return (
    <span>
      <BsPersonPlus />
    </span>
  );
};

export const ChatIcon = () => {
  return (
    <span>
      <BsChatSquare />
    </span>
  );
};

export const StackIcon = () => {
  return (
    <span>
      <GoStack />
    </span>
  );
};

export const ShareIcon = () => {
  return (
    <span>
      <IoShareSocialOutline />
    </span>
  );
};
