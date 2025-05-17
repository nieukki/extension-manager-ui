import React from "react";

export const Navbar = ({ filter, setFilter }) => {
  const handleCategoryChange = (e) => {
    setFilter(e.target.id);
  };
  return (
    <nav className="flex flex-row justify-between w-3/4 m-10 max-sm:flex-col max-sm:gap-4 max-sm:items-center">
      <h1 className="text-3xl font-bold">Extensions List</h1>
      <div className="flex flex-row gap-2">
        <label className="cursor-pointer">
          <input
            type="radio"
            name="categories_filter"
            className="sr-only peer"
            id="all"
            onChange={handleCategoryChange}
            checked={filter === "all"}
          />
          <div className="text-neutral-9 px-4 py-2 rounded-3xl bg-neutral-0 border border-neutral-3 dark:bg-neutral-6 peer-checked:bg-red-5 peer-checked:text-neutral-0 dark:text-neutral-0 dark:border-transparent">
            All
          </div>
        </label>
        <label className="cursor-pointer">
          <input
            type="radio"
            name="categories_filter"
            className="sr-only peer"
            id="active"
            onChange={handleCategoryChange}
            checked={filter === "active"}
          />
          <div className="text-neutral-9 px-4 py-2 rounded-3xl bg-neutral-0 border border-neutral-3 dark:bg-neutral-6 peer-checked:bg-red-5 peer-checked:text-neutral-0 dark:text-neutral-0 dark:border-transparent">
            Active
          </div>
        </label>
        <label className="cursor-pointer">
          <input
            type="radio"
            name="categories_filter"
            className="sr-only peer"
            id="inactive"
            onChange={handleCategoryChange}
            checked={filter === "inactive"}
          />
          <div className="text-neutral-9 px-4 py-2 rounded-3xl bg-neutral-0 border border-neutral-3 dark:bg-neutral-6 peer-checked:bg-red-5 peer-checked:text-neutral-0 dark:text-neutral-0 dark:border-transparent">
            Inactive
          </div>
        </label>
      </div>
    </nav>
  );
};
