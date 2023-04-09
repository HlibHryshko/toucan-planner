import { useState } from "react";
import CategoriesList from "./CategoriesList";
import OrganizationsList from "./OrganizationsList";

const CategoriesSidebar = () => {
  const [currentOrganization, setCurrentOrganization] = useState({});
  const [currentPath, setCurrentPath] = useState([]);

  const handleOrganizationClick = (organization) => {
    setCurrentOrganization(organization);
    setCurrentPath([organization.id]);
  };
  const handleReturn = () => {
    setCurrentPath(currentPath.slice(0, -1));
  };
  const handleCategoryClick = (category) => {
    console.log("ADD CATEGORY: ");
    console.log(category);
    setCurrentPath([...currentPath, category.id]);
  };

  const categories = [
    {
      name: "KMA",
      id: "ag2g1d2x",
    },
    {
      name: "KNU",
      id: "23saqw2r",
    },
    {
      name: "Cs Fac",
      id: "fda123s1",
      parentId: "ag2g1d2x",
    },
    {
      name: "Buss Fac",
      id: "af2gp4s1",
      parentId: "ag2g1d2x",
    },
    {
      name: "Fil Fac",
      id: "jkl3uid5",
      parentId: "ag2g1d2x",
    },
    {
      name: "C#",
      id: "lkjpfa21",
      parentId: "fda123s1",
    },
    {
      name: "Java",
      id: "67895134",
      parentId: "fda123s1",
    },
    {
      name: "Swift",
      id: "uyio4298",
      parentId: "fda123s1",
    },
    {
      name: "Marketing",
      id: "9763ghdf435",
      parentId: "af2gp4s1",
    },
    {
      name: "Business Analytics",
      id: "642535642",
      parentId: "af2gp4s1",
    },
    {
      name: "Something",
      id: "1235134214",
      parentId: "af2gp4s1",
    },
    {
      name: "English",
      id: "213254efda134",
      parentId: "jkl3uid5",
    },
    {
      name: "Ukrainian",
      id: "4322t34gfsdhs",
      parentId: "jkl3uid5",
    },
    {
      name: "Organic",
      id: "hgadfda2312145s",
      parentId: "23saqw2r",
    },
    {
      name: "Inorganic",
      id: "gha234fsw342",
      parentId: "23saqw2r",
    },
    {
      name: "Analytical",
      id: "jkkadf4312",
      parentId: "23saqw2r",
    },
    {
      name: "VMS",
      id: "89052kafjasd",
      parentId: "23saqw2r",
    },
  ];

  // if there is no currentPath => return only organizations
  // there is a currentPath => return children


  return (
    <div className="flex flex-row h-full bg-primary-green">
      <OrganizationsList
        organizations={categories.filter((category) => {
          return !category.parentId;
        })}
        organization={currentOrganization}
        onOrganizationClick={handleOrganizationClick}
      />
      <CategoriesList
        handleReturn={handleReturn}
        previousCategory={categories.find(
          (category) => category.id === currentPath.at(-1)
        )}
        handleCategoryClick={handleCategoryClick}
        categories={categories.filter(
          (category) =>
            (category.parentId && category.parentId === currentPath.at(-1))
        )}
      />
    </div>
  );
};

export default CategoriesSidebar;
