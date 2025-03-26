import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios from 'axios';
import SearchContext from './context/searchHistoryContext';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/Userprofile';
import RepoList from './components/RepositoriesList';
import SearchHistory from './components/SearchHistory';

const queryClient = new QueryClient();

export default function App() {
  const [username, setUsername] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [userData, setUserData] = useState(null);

  const fetchUser = async () => {
    if (!username) return;
    const response = await axios.get(`https://api.github.com/users/${username}`);
    setUserData(response.data);
    setSearchHistory((prev) => [...new Set([...prev, username])].slice(0, 5));
  };

  return (
    <QueryClientProvider client={queryClient}>
      <SearchContext.Provider value={{ searchHistory }}>
        <div className="p-6 max-w-xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">GitHub User Explorer</h1>
          <SearchBar username={username} setUsername={setUsername} fetchUser={fetchUser} />
          {userData && <ProfileCard user={userData} />}
          {userData && <RepoList username={username} />}
          <SearchHistory />
        </div>
      </SearchContext.Provider>
    </QueryClientProvider>
  );
}