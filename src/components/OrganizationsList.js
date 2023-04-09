import { GoPlus } from "react-icons/go"

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

  return (
    <div>
      {organizations.map((org) => {
        return (
          <div key={org.id} className="flex flex-row px-2 bg-sidebar-org-background-green shadow-org-sidebar">
            <div className="mx-2 my-3">icon</div>
            <div
              className={`font-semibold text-white bg-sidebar-org-background-green text-xl place-self-center ${org.id === organization?.id ? "text-lg" : ""}`}
              onClick={() => {
                onOrganizationClick(org);
              }}
            >
              {org.name}
            </div>
          </div>
        );
      })}
      <GoPlus className="bg-sidebar-add-org-background-green shadow-plus-org h-8 w-full self-end" color="white" />
    </div>
  );
};

export default OrganizationsList;
