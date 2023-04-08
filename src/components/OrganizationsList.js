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
          <div
            key={org.id}
            className={org.id === organization?.id ? "text-lg" : ""}
            onClick={() => {
              onOrganizationClick(org);
            }}
          >
            {org.name}
          </div>
        );
      })}
    </div>
  );
};

export default OrganizationsList;
