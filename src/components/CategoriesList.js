import { useState } from "react";
import Button from "./Button";

// add an icon to show and hide the component

const CategoriesList = ({ organization, categories }) => {
  console.log(categories);

  // const handlePushCategory() => {

  // }

  const [currentCategories, setCurrentCategories] = useState({
    data: { ...categories },
  });
  const [currentPath, setCurrentPath] = useState([
    { type: "category", name: "CS Fac" },
    { type: "category", name: "C#" },
  ]);

  const updatePath = () => {
    console.log("BUTTON PRESSED");
    const buffer = { data: { ...categories } };
    currentPath.forEach((category) => {
      console.log("ENTER LOOP");
      console.log(category);
      console.log(buffer.data);
      console.log("-------------------------------------");
      if (buffer.data) {
        let element;

        if (category.type === "category") {
          console.log(buffer.data);

          element = buffer.data.categories.find((item) => {
            return item.name === category.name;
          });
        } else {
          console.log(buffer.data);

          element = buffer.data.subjects.find((item) => {
            return item.name === category.name;
          });
        }

        console.log("++++++++++++++++++++++++++++++++++++");
        console.log(element);
        buffer.data = element;
        console.log(buffer);
      }
    });

    setCurrentCategories({ ...buffer });
  };

  return (
    <div>
      {currentCategories.data.name}
      {currentCategories.data.categories.map((category) => {
        return <div key={category.name}>{category.name}</div>;
      })}
      {currentCategories.data.subjects.map((subject) => {
        return <div key={subject.name}>{subject.name}</div>;
      })}
      <Button onClick={updatePath}>Update</Button>
    </div>
  );
};

export default CategoriesList;
