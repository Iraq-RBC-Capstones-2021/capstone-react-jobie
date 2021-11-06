import { useState, useRef } from "react";
import { debounce } from "lodash";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import en from "../locales/en";
import ar from "../locales/ar";

import data from "../data.json";

function NavbarSearch() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "ar" ? ar : en;
  const [searchResults, setSearchResults] = useState([]);
  const searchInput = useRef();

  const handleChange = () => {
    const keyword = searchInput.current.value;
    debouncedSearch(keyword);
  };

  const debouncedSearch = debounce(async (keyword) => {
    let res = [];
    if (keyword.trim().length)
      res = await data.Posts.filter((e) =>
        e.Title.toLowerCase().includes(keyword.toLowerCase())
      );

    setSearchResults(res);
  }, 300);

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/search/${searchInput.current.value}`);
  };

  return (
    <form className="flex flex-row " onSubmit={handleSubmit}>
      <div className=" relative mx-auto text-gray-600">
        <input
          className="border border-gray-300 h-10 px-5 pr-10 rounded-full text-sm focus:outline-none relative"
          type="search"
          placeholder={t.navbar.Search}
          onChange={handleChange}
          ref={searchInput}
        />
        {searchResults.length !== 0 && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              {searchResults.slice(0, 10).map((value, key) => {
                return (
                  <Link href={`/search/${value.Title.toLowerCase()}`} key={key}>
                    <a
                      href="#"
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-200"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      {value.Title}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <FaSearch />
        </button>
      </div>
    </form>
  );
}

export default NavbarSearch;
