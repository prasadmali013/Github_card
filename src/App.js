import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card';

function App() {

  const [usersData, setUsersData] = useState([]);



  useEffect(() => {
    // get the data from api 
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setUsersData(data);
      })
  }, [])

  return (
    <>
      <h1 class="MainHeading">Github Users card!</h1>
      <div className='cardContainer'>
        {
          usersData.map((user) => {
            console.log(user.login);

            return <Card userName={user.login} profileUrl={user.html_url} avtaarUrl={user.avatar_url}/>
          })
        }

      </div>

    </>
  );
}

export default App;
