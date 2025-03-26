import { useContext } from 'react';
import SearchContext from '../context/searchHistoryContext';

const SearchHistory = () => {
  const { searchHistory } = useContext(SearchContext);
  
  if (searchHistory.length === 0) return null;

  return (
    <div className="mt-6">
      <h4 className="font-bold mb-2">Recent Searches:</h4>
      <ul className="list-disc pl-6">
        {searchHistory.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchHistory;