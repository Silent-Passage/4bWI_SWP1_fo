import React, { useEffect, useState } from "react";
import Card from "./card";

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);
  const [filteredName, setFilteredName] = useState([]);
  const [filteredTitle, setFilteredTitle] = useState([]);

  useEffect(() => {
    fetch("https://67d408d38bca322cc26bf6e0.mockapi.io/person").then((res) =>
      res.json().then((data) => {
        console.log(data);
        setPeople(data);
        setFilteredName(data);
        setFilteredTitle(data);
      })
    );
  }, []);

  const filterName = (filter) => {
    let namefiltered = people.filter((person) => person.name.includes(filter));
    setFilteredName(namefiltered);
  };
  const filterTitle = (filter) => {
    let titlefiltered = people.filter((person) =>
      person.title.includes(filter)
    );
    setFilteredTitle(titlefiltered);
  };
  return (
    <div className="">
      <div className="fixed border mb-4 bg-gray-500 w-full h-36 pl-8 pt-5">
        <h1>
          Name
          <input
            className="border p-4 bg-white"
            type="text"
            placeholder="Search..."
            onChange={(el) => {
              console.log(el.target.value);
              filterName(el.target.value);
            }}
          />
        </h1>
        <h1>
          Title
          <input
            className="border p-4 bg-white"
            type="text"
            placeholder="Search..."
            onChange={(el) => {
              console.log(el.target.value);
              filterTitle(el.target.value);
            }}
          />
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 w-full lg:grid-cols-4 p-8 pt-40">
        {filteredName.map((person) => {
          return (
            <div>
              <Card
                name={person.name}
                title={person.jobtitle}
                img={"https://picsum.photos/100/"} //Cloudfare ist down
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
