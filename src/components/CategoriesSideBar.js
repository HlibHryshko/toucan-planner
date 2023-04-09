import { useState } from "react";
import CategoriesList from "./CategoriesList";
import OrganizationsList from "./OrganizationsList";
import { useSelector } from "react-redux";

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

  const categories = useSelector((state) => state.categories);

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
            category.parentId && category.parentId === currentPath.at(-1)
        )}
      />
    </div>
  );
};

export default CategoriesSidebar;
