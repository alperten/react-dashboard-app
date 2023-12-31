import { TextInput } from "@tremor/react";
import { HiSearch } from "react-icons/hi";

const Navbar = () => {
  return (
    <div
      id="top"
      className="relative w-full sm:flex justify-between items-center p-2"
    >
      <h1 className="font-bold text-gray-300">Dashboard</h1>
      <div className="py-2 min-w-[32.6%]">
        <TextInput icon={HiSearch} placeholder="Search..." />
      </div>
    </div>
  );
};

export default Navbar;
