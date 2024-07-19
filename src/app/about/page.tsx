"use client";
import React, { useEffect, useState } from "react";

/*
Initial Setup:
Let an array of strings call fruits, Display this list in the UI.
Search Input:
Use the provided input fields.
As the user types into the input, filter the displayed list to include only those items.

Real-Time Filtering:
The list should update as soon as the user types into the search box, without needing...

No Matches:
Display a friendly message if no items match the search term.

question 2: create a PhoneNumberInput handles user input for phone numbers.

*/

const useDebounce = (text: string, delay: number) => {
  const [debounce, setDebounce] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(text);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  });

  return debounce;
};

export default function Page() {
  const fruits = ["kiwi", "pineapple", "mango", "orange", "banana"];
  const [searchTerm, setSearchTerm] = useState("");

  const [fruitsData] = useState(fruits);
  const debouncedSearchTerm = useDebounce(searchTerm, 3000);

  const useHandleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const fruitFiltered = fruitsData.filter((fruit) =>
    fruit.toLocaleLowerCase().includes(debouncedSearchTerm.toLocaleLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        onChange={useHandleInputChange}
      />
      {fruitFiltered.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}
    </div>
  );
}
