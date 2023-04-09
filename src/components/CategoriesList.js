import { useState } from "react";
import Button from "./Button";

// add an icon to show and hide the component

const CategoriesList = ({
  previousCategory,
  categories,
  handleReturn,
  handleCategoryClick,
}) => {
  // const updatePath = () => {
  //   console.log("BUTTON PRESSED");
  //   const buffer = { data: { ...categories } };
  //   currentPath.forEach((category) => {
  //     console.log("ENTER LOOP");
  //     console.log(category);
  //     console.log(buffer.data);
  //     console.log("-------------------------------------");
  //     if (buffer.data) {
  //       let element;

  //       if (category.type === "category") {
  //         console.log(buffer.data);

  //         element = buffer.data.categories.find((item) => {
  //           return item.name === category.name;
  //         });
  //       } else {
  //         console.log(buffer.data);

  //         element = buffer.data.subjects.find((item) => {
  //           return item.name === category.name;
  //         });
  //       }

  //       console.log("++++++++++++++++++++++++++++++++++++");
  //       console.log(element);
  //       buffer.data = element;
  //       console.log(buffer);
  //     }
  //   });

  //   setCurrentCategories({ ...buffer });
  // };
  console.log(categories);

  return (
    <div>
      {/* {previousCategory.name} */}
      {categories.map((category) => {
        console.log(category.name);
        return (
          <div
            className="w-64 p-2 font-semibold shadow-category text-white bg-sidebar-category-background-green text-xl border-2 border-primary-green place-self-center"
            onClick={() => {
              handleCategoryClick(category);
            }}
            key={category.name}
          >
            {category.name}
          </div>
        );
      })}
      <Button onClick={handleReturn} primary>
        BACK
      </Button>
    </div>
  );
};

export default CategoriesList;
