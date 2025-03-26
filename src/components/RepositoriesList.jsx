import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const RepoList = ({ username }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['repos', username],
    queryFn: async () => {
    const res = await axios.get(`https://api.github.com/users/${username}/repos`);
    return res.data;
    }
  });

  if (isLoading) return <p className="p-4 border rounded shadow">Loading Repositories...</p>;
  if (isError) return <p className="p-4 border rounded shadow text-red-500">Failed to load repositories.</p>;

  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold mb-2">Repositories ({data.length})</h3>
      <div className="space-y-2">
        {data.map((repo) => (
          <div key={repo.id} className="border-b pb-2 last:border-b-0">
            <a 
              href={repo.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {repo.name}
            </a>
            {repo.description && <p className="text-sm text-gray-600">{repo.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepoList;