import React, { useEffect, useState } from "react";
import Card from "./card";

export default function PeopleContainer() {
  const [people, setPeople] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    fetch("https://67d408d38bca322cc26bf6e0.mockapi.io/person")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPeople(json);
      });
  }, []);

  return (
    <div>
      <h1>People</h1>
      <div className="grid grid-cols-2 gap-4 w-full lg:grid-cols-4">
        {people.map((person) => {
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
