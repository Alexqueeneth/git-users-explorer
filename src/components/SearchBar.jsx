import { useContext } from 'react';
import SearchContext from '../context/searchHistoryContext';

const SearchBar = ({ username, setUsername, fetchUser }) => {
  const { searchHistory } = useContext(SearchContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded w-full">
        Search
      </button>
    </form>
  );
};

export default SearchBar;