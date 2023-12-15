import { useState, useEffect } from "react";
import Person from "./person";

export default function PersonController() {
  const [person, setPerson] = useState(null);

  const getNameAndEmail = (data) => {
    const firstName = data.results[0].name.first;
    const lastName = data.results[0].name.last;
    const email = data.results[0].email;

    return { firstName, lastName, email };
  };

  const getPerson = () => {
    fetch("https://www.randomuser.me/api?results=1")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const readyData = getNameAndEmail(data);
        setPerson(readyData);
      });
  };

  useEffect(() => {
    getPerson();
  }, []);

  return <Person person={person} />;
}
