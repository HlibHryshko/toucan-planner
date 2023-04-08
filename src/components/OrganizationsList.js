const OrganizationsList = ({organizations, active}) => {
  return <div>
    {organizations.map(organization => {
      return <div key={organization.name}>{organization.name === active.name ? "---" : ""}{organization.name}</div>
    })}
  </div>
}

export default OrganizationsList