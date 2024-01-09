"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import SearchButton from "./SearchButton";
import {
  SearchSelect,
  SearchSelectItem,
  Select,
  SelectItem,
} from "@tremor/react";
import Avatar from "react-avatar";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SORT_BY_MAP = {
  r: "Default",
  rv: "By Review",
  p: "By Price (low to high)",
  pd: "By Price (high to low)",
};

function Header() {
  const [pages, setPages] = useState("");
  const [sortBy, setSortBy] = useState("r");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const router = useRouter();

  return (
    <header className="flex flex-col items-center px-2 pt-10 pb-5 md:p-10 md:pb-5 md:flex-row md:items-start md:space-x-6">
      <Link href="/">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
          alt="Logo"
          width={150}
          height={0}
          className="object-contain mr-10"
        />
      </Link>

      <div className="w-full md:max-w-2xl">
        {/* FORM */}
        {/* BEGIN SEARCH */}
        <form
          action={(formData) => {
            const searchTerm = formData.get("searchTerm");

            if (!formData.get("searchTerm")) return;

            const params = new URLSearchParams();

            if (pages) params.set("pages", pages.toString());
            if (sortBy) params.set("sort_by", sortBy.toString());
            if (minPrice) params.set("min_price", minPrice.toString());
            if (maxPrice) params.set("max_price", maxPrice.toString());

            router.push(`/search/${searchTerm}?${params.toString()}`);
          }}
        >
          <div className="flex items-center gap-2 px-4 w-full">
            <div
              className="flex flex-1 items-center px-6 py-4 space-x-2  
            bg-white shadow-xl rounded-full border-0"
            >
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 " />
              <input
                type="text"
                name="searchTerm"
                placeholder="Search..."
                className="flex-1 outline-none"
              ></input>
            </div>
            <SearchButton />
          </div>

          {/* PARAM SELECTORS */}
          <div
            className="grid grid-cols-2 gap-2 mx-auto p-4 max-w-lg md:grid-cols-4
          md:max-w-none items-center"
          >
            <SearchSelect
              onValueChange={(value) => setPages(value)}
              className="min-w-4"
              placeholder="# of pages"
            >
              {[...Array(100)].map((_, i) => (
                <SearchSelectItem key={i} value={(i + 1).toString()}>
                  {(i + 1).toString()} pages
                </SearchSelectItem>
              ))}
            </SearchSelect>

            <Select
              onValueChange={(value) => setSortBy(value)}
              className="min-w-4"
              placeholder="Sort"
            >
              {Object.entries(SORT_BY_MAP).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value}
                </SelectItem>
              ))}
            </Select>

            <SearchSelect
              onValueChange={(value) => setMinPrice(value)}
              className="min-w-4"
              placeholder="Minimum Price"
            >
              {["", "100", "250", "500", "750", "900", "1000"].map((_, i) => (
                <SearchSelectItem key={i} value={_.toString()}>
                  {i === 0 ? "No Minimum" : `$${_.toString()}`}
                </SearchSelectItem>
              ))}
            </SearchSelect>

            <SearchSelect
              onValueChange={(value) => setMaxPrice(value)}
              className="min-w-4"
              placeholder="Maximum Price"
            >
              {["", "100", "250", "500", "750", "900", "1000+"].map((_, i) => (
                <SearchSelectItem key={i} value={_.toString()}>
                  {i === 0 ? "No Maximum" : `$${_.toString()}`}
                </SearchSelectItem>
              ))}
            </SearchSelect>
          </div>
        </form>
      </div>

      <div className="hidden flex-1 justify-end lg:flex">
        <Avatar name="Ray Fung" round size="50" />
      </div>
    </header>
  );
}

export default Header;
