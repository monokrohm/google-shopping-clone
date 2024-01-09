"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useFormStatus } from "react-dom";

function SearchButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="px-4 py-4 bg-[#1B66D2] hover:bg-[#1d5fbf] font-bold text-white
  rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending && "Searching..."}
      {!pending && <MagnifyingGlassIcon className="h-5 w-5" />}
    </button>
  );
}

export default SearchButton;
