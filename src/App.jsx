import { useState, createContext, useContext, useEffect } from 'react'
import './App.css'

function App() {
  const [userName,setUsername] = useState('');
  const [repos, setRepos] = useState([]);
  const [userData, setUserData] = useState()

  const fetchUser = async ()  => {
    if (!userName) return;
    const response = await axios.get(`https://api.github.com/users/${username}`);
    setUserData(response.data);
    setRepos((prev) =>[...prev, userName])  
      
    
    }
  }
  
   return (
    <>
             <div>
          <h2>Search results</h2>
          {repos && repos.length ? (
            repos.map((item) => {
              return (
                <button
                  key={item.id}
                  id={item.id}
                  onClick={onRepoClick}
                >
                  {item.name}
                </button>
              );
            })
          ) : (
            <div> No repos </div>
          )}
        </div>
 
    </>
  )


export default App
