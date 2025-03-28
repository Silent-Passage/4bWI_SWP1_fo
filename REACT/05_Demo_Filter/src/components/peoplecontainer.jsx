import React, { useEffect, useState } from "react";
import Card from "./card";

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    fetch("https://67d408d38bca322cc26bf6e0.mockapi.io/person")
      .then((res) => res.json())
      .then((data) => {
        setPeople(data);
        setFilteredPeople(data);
      });
  }, []);

  useEffect(() => {
    let filtered = people.filter(
      (person) =>
        person.name.toLowerCase().includes(searchName.toLowerCase()) &&
        person.jobtitle &&
        person.jobtitle.toLowerCase().includes(searchTitle.toLowerCase())
    );
    setFilteredPeople(filtered);
  }, [searchName, searchTitle, people]);

  return (
    <div>
      <div className="fixed border mb-5 bg-gray-500 w-full h-30 pl-8 flex flex-row gap-4 items-center">
        <div>
          <h1>Name</h1>
          <input
            className="border p-2 bg-white"
            type="text"
            placeholder="Search..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
        <div>
          <h1>Job Title</h1>
          <input
            className="border p-2 bg-white"
            type="text"
            placeholder="Search..."
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 w-full lg:grid-cols-4 p-8 pt-40">
        {filteredPeople.map((person) => (
          <Card
            key={person.id}
            name={person.name}
            title={person.jobtitle}
            img={"https://picsum.photos/100/"}
          />
        ))}
      </div>
    </div>
  );
}
