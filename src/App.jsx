
import UserProfile from "./UserProfile"
import MoviesList from "./MoviesList"

const App = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <UserProfile />
      <h1>Favorite Movies</h1>
      <MoviesList />
    </div>
  );
};



export default App;
