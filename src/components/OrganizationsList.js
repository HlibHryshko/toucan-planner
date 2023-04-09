import { GoPlus } from "react-icons/go"
import { useNavigate } from "react-router-dom";

const OrganizationsList = ({
  organizations,
  organization,
  onOrganizationClick,
}) => {
  console.log("----------------------");
  console.log(organization);
  console.log(organizations);
  console.log(onOrganizationClick);
  console.log("----------------------");
  const navigate = useNavigate();

  return (
    <div>
      {organizations.map((org) => {
        return (
          <div key={org.id} className={`flex flex-row px-2 shadow-org-sidebar rounded hover:scale-x-105 hover:bg-sidebar-hover-green ${org.id === organization?.id ? "bg-sidebar-org-selected-green scale-x-105" : ""}`}>
            {/*<div className="mx-2 my-3">icon</div>*/}
            <div
              className={`font-semibold mx-2 my-3 text-white text-xl place-self-center ${/*org.id === organization?.id ? "text-lg" : */""}`}
              onClick={() => {
                onOrganizationClick(org);
              }}
            >
              {org.name}
            </div>
          </div>
        );
      })}
      <GoPlus onClick={() => {navigate('/createcourse')}} className="bg-sidebar-add-org-background-green hover:bg-sidebar-add-org-hover-green shadow-plus-org h-8 w-full self-end" color="white" />
    </div>
  );
};

export default OrganizationsList;
