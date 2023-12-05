"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const [params, setParams] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (params) {
      router.push(`/search?name=${params}`);
      setParams("");
    }
  };

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Search for anime"
        className="input rounded-none bg-base-200 w-full outline-none focus:border-opacity-100 focus:border-slate-950 focus:outline-none text-sm"
        value={params}
        onChange={(e) => setParams(e.target.value)}
        onKeyUp={(e) => e.key === "Enter" && handleSubmit()}
      />
      <button onClick={handleSubmit} className={`btn btn-primary rounded-none`}>
        Search
      </button>
    </div>
  );
};

export default Search;
