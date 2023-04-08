import CategoriesList from "./CategoriesList";
import OrganizationsList from "./OrganizationsList";

const CategoriesSidebar = () => {
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

  const defOrg = "KMA";
  return (
    <div>
      <OrganizationsList organizations={categories} active={categories[0]}/>
      <hr/>
      <CategoriesList
        organization={"KMA"}
        categories={categories.find((category) => category.name === defOrg)}
      />
    </div>
  );
};

export default CategoriesSidebar;
