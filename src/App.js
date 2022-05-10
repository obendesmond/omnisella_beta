import React from "react";

const App = () => {
  // var, let, const
  const person = {
    name: {
      firstname: "Misadah",
      lastname: "Desmond",
    },
    course: "React Course with Desmond",
    height: 25,
    size: 40,
    school: "Government High School",
  };

  person.weight = "400kg";
  delete person.height; // delete person["height"]

  //   loop through an object using for in
  for (let x in person) {
    console.log(person[x]);
  }

  //   person.name or person[name]

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
