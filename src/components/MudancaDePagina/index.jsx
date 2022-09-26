import PaginaDeLogin from "../PaginaDeLogin";
import PaginaPrincipal from "../PaginaPrincipal";

function RestrictedPage({ isLoggedIn, setIsLoggedIn }) {
  console.log(isLoggedIn);
  if (isLoggedIn) {
    return (
      <main>
        <PaginaPrincipal isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </main>
    );
  } else if (!isLoggedIn) {
    return (
      <main>
        <PaginaDeLogin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </main>
    );
  }
}

export default RestrictedPage;
