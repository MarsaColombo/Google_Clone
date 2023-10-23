import React from "react";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return <div>
    <input
  type="text"
  placeholder="Type here"
  className="input input-ghost w-full max-w-xs"
/>
<IoSearchOutline className="search-icon" /></div>;
};

export default Search;
