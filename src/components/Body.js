import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import Header from "./Header";
const Body = () => {
  const [listOfRobo, setListOfRobo] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRobo, setFilterRobo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await data.json();
    setListOfRobo(json);
    setFilterRobo(json);
  };

  if (listOfRobo == null || listOfRobo.length === 0) {
    return <div>Rendering</div>;
  }
  return (
    <div className="body bg-gray-100 min-h-screen">
      <div>
        <Header />
      </div>
      <div className="flex justify-between items-center m-4 p-4">
        <div className="flex items-center">
          <input
            type="text"
            className="border border-solid border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Search Robo "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
              const findRobo = listOfRobo.filter((robo) =>
                robo.name.toLowerCase().includes(searchText.toLowerCase())
                
              );
              setFilterRobo(findRobo);

            }
        
            }
          />
        
          {/* <button
            className="bg-green-500 text-white px-4 py-2 ml-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
            onClick={() => {
              const findRobo = listOfRobo.filter((robo) =>
                robo.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilterRobo(findRobo);
            }}
          >
            Search
          </button> */}
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filterRobo.map((robo) => (
          <div
            className="bg-white rounded-lg overflow-hidden shadow-md w-64 h-96"
            key={robo?.id}
          >
            <Card roboData={robo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
