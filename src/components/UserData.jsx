const UserData = ({ users }) => {
  return (
    users.map((currentUser) => {
      const { id, name, email} = currentUser;
      const {city, street, suite, zipcode} = currentUser.address;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{city}, {street}, {suite}, {zipcode}</td>
        </tr>
      );
    })
  );
};

export default UserData;