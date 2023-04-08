import { useEffect, useState } from "react";
import Button from "./Button";

const CategoriesList = () => {
  const categories = [
    {
      name: "KMA",
      categories: [
        {
          name: "CS Fac",
          categories: [
            {
              name: "C#",
              categories: [],
              subjects: [
                {
                  name: "Year 1 Sem 1",
                },
                {
                  name: "Year 1 Sem 2",
                },
                {
                  name: "Year 2 Sem 1",
                },
                {
                  name: "Year 2 Sem 2",
                },
              ],
            },
            {
              name: "Java",
              categories: [],
              subjects: [
                {
                  name: "Year 1 Sem 1",
                },
                {
                  name: "Year 1 Sem 2",
                },
                {
                  name: "Year 2 Sem 1",
                },
                {
                  name: "Year 2 Sem 2",
                },
              ],
            },
            {
              name: "Swift",
              categories: [],
              subjects: [
                {
                  name: "Year 1 Sem 1",
                },
                {
                  name: "Year 1 Sem 2",
                },
                {
                  name: "Year 2 Sem 1",
                },
                {
                  name: "Year 2 Sem 2",
                },
              ],
            },
            {
              name: "Prolog",
              categories: [],
              subjects: [
                {
                  name: "Year 1 Sem 1",
                },
                {
                  name: "Year 1 Sem 2",
                },
                {
                  name: "Year 2 Sem 1",
                },
                {
                  name: "Year 2 Sem 2",
                },
              ],
            },
            {
              name: "Databases",
              categories: [],
              subjects: [
                {
                  name: "Year 1 Sem 1",
                },
                {
                  name: "Year 1 Sem 2",
                },
                {
                  name: "Year 2 Sem 1",
                },
                {
                  name: "Year 2 Sem 2",
                },
              ],
            },
            {
              name: "Ruby",
              categories: [],
              subjects: [
                {
                  name: "Year 1 Sem 1",
                },
                {
                  name: "Year 1 Sem 2",
                },
                {
                  name: "Year 2 Sem 1",
                },
                {
                  name: "Year 2 Sem 2",
                },
              ],
            },
          ],
          subjects: [],
        },
        {
          name: "Business Fac",
          categories: [
            {
              name: "Business Analytics",
              categories: [],
              subjects: [
                {
                  name: "Year 1 Sem 1",
                },
                {
                  name: "Year 1 Sem 2",
                },
                {
                  name: "Year 2 Sem 1",
                },
                {
                  name: "Year 2 Sem 2",
                },
              ],
            },
            {
              name: "International Business",
              categories: [],
              subjects: [
                {
                  name: "Year 1 Sem 1",
                },
                {
                  name: "Year 1 Sem 2",
                },
                {
                  name: "Year 2 Sem 1",
                },
                {
                  name: "Year 2 Sem 2",
                },
              ],
            },
            {
              name: "Marketing",
              categories: [],
              subjects: [
                {
                  name: "Year 1 Sem 1",
                },
                {
                  name: "Year 1 Sem 2",
                },
                {
                  name: "Year 2 Sem 1",
                },
                {
                  name: "Year 2 Sem 2",
                },
              ],
            },
          ],
          subjects: [],
        },
        {
          name: "Fil Fac",
          categories: [
            {
              name: "Writing Skills",
              categories: [],
              subjects: [
                {
                  name: "Group 1",
                },
                {
                  name: "Group 2",
                },
              ],
            },
          ],
        },
      ],
      subjects: [],
    },
    {
      name: "KNU",
      categories: [
        {
          name: "Organic",
          categories: [],
          subjects: [
            {
              name: "Year 1 Sem 1",
            },
            {
              name: "Year 1 Sem 2",
            },
            {
              name: "Year 2 Sem 1",
            },
            {
              name: "Year 2 Sem 2",
            },
          ],
        },
        {
          name: "Inorganic",
          categories: [],
          subjects: [
            {
              name: "Year 1 Sem 1",
            },
            {
              name: "Year 1 Sem 2",
            },
            {
              name: "Year 2 Sem 1",
            },
            {
              name: "Year 2 Sem 2",
            },
          ],
        },
        {
          name: "Analytical",
          categories: [],
          subjects: [
            {
              name: "Year 1 Sem 1",
            },
            {
              name: "Year 1 Sem 2",
            },
            {
              name: "Year 2 Sem 1",
            },
            {
              name: "Year 2 Sem 2",
            },
          ],
        },
        {
          name: "VMS",
          categories: [],
          subjects: [
            {
              name: "Year 1 Sem 1",
            },
            {
              name: "Year 1 Sem 2",
            },
            {
              name: "Year 2 Sem 1",
            },
            {
              name: "Year 2 Sem 2",
            },
          ],
        },
      ],
      subjects: [],
    },
  ];

  const isIterable = (input) => {
    if (input === null || input === undefined) {
      return false;
    }
    return typeof input[Symbol.iterator] === "function";
  };

  useEffect(() => {}, []);
  const [currentCategories, setCurrentCategories] = useState([...categories]);
  const [currentPath, setCurrentPath] = useState([
    {
      name: "KMA",
      type: "organization",
    },
    // { type: "category", name: "CS Fac" },
  ]);

  const updatePath = () => {
    currentPath.forEach((category) => {
      console.log("ENTER LOOP");
      if (currentCategories) {
        let element;
        if (category.type === "organization") {
          if (currentCategories.name !== category.name) {
            console.log(currentCategories);
            element = currentCategories.find((item) => {
              return item.name === category.name;
            });
          }
        } else {
          if (currentCategories.name !== category.name) {
            element = currentCategories[category.type].find((item) => {
              return item.name === category.name;
            });
          }
        }
        setCurrentCategories(element);
      }
    });
  };

  return (
    <div>
      {!isIterable(currentCategories)
        ? currentCategories
          ? currentCategories.name
          : "some text1"
        : "SOME TEXT1"}
      {isIterable(currentCategories)
        ? currentCategories.map((category) => {
            return <div key={category.name}>{category.name}</div>;
          })
        : "some text2"}
      {!isIterable(currentCategories)
        ? currentCategories
          ? currentCategories.categories.map((category) => {
              return <div key={category.name}>{category.name}</div>;
            })
          : "some text3"
        : "Some Text3"}
      {!isIterable(currentCategories)
        ? currentCategories
          ? currentCategories.subjects.map((subject) => {
              return <div key={subject.name}>{subject.name}</div>;
            })
          : "some text4"
        : "Some Text4"}
      <Button onClick={updatePath}>Update</Button>
    </div>
  );
};

export default CategoriesList;
