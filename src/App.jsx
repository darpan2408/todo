import { useEffect, useState } from "react";
import UserData from "./components/UserData";
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const App = () => {

  const [users, setUsers] = useState([]);
  
  const fetchUsers = async (url) => {
    try{
      const res = await fetch(url);
      const data = await res.json();

      if(data.length > 0){
        setUsers(data);
      }

      console.log(data);

    }catch(e){
      console.error('Error fetching users:', e);
    }
  }

  useEffect(() => {
    fetchUsers(apiUrl);
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        <UserData users={users} />
      </tbody>
    </table>
  );
};


export default App;