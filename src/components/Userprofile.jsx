const ProfileCard = ({ user }) => {
  return (
    <div className="border p-4 rounded shadow mb-4 flex items-start gap-4">
      <img src={user.avatar_url} alt="avatar" className="w-20 h-20 rounded-full" />
      <div>
        <h2 className="text-xl font-semibold">{user.name || user.login}</h2>
        {user.bio && <p className="mb-2">{user.bio}</p>}
        <div className="flex gap-4 text-sm">
          <span>Followers: {user.followers}</span>
          <span>Following: {user.following}</span>
          <span>Repos: {user.public_repos}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;