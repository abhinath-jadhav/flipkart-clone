import { useState } from "react";

const SortByBar = () => {
  const [sortBy, setSortBy] = useState("populer");

  const updateSortBy = (sortBy: string) => {
    setSortBy(sortBy);
  };

  return (
    <div className="flex gap-3 text-sm border-b">
      <h2 className="font-semibold leading-loose">Sort By</h2>

      <div
        className={`${
          sortBy === "populer"
            ? "text-blue-600 font-semibold border-b-2 border-blue-600"
            : ""
        } leading-loose`}
      >
        <button onClick={() => updateSortBy("populer")}>Popularity</button>
      </div>

      <div
        className={`${
          sortBy === "price-low"
            ? "text-blue-600 font-semibold border-b-2 border-blue-600 "
            : ""
        } leading-loose`}
      >
        <button onClick={() => updateSortBy("price-low")}>
          Price -- Low to High
        </button>
      </div>

      <div
        className={`${
          sortBy === "price-high"
            ? "text-blue-600 font-semibold border-b-2 border-blue-600 "
            : ""
        } leading-loose`}
      >
        <button onClick={() => updateSortBy("price-high")}>
          Price -- High to Low
        </button>
      </div>

      <div
        className={`${
          sortBy === "new"
            ? "text-blue-600 font-semibold border-b-2 border-blue-600 "
            : ""
        } leading-loose`}
      >
        <button onClick={() => updateSortBy("new")}>Newest first</button>
      </div>
    </div>
  );
};

export default SortByBar;
