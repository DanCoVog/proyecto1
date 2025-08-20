import Renderlistas from "./components/renderlistas";
import Pagina from "./components/pagina";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <>
      <Pagina  />
      <Profile name="John" lastName="Doe" id={1} img="profile.jpg" comments={[]} />
      <Renderlistas  />
    </>
  );
}
