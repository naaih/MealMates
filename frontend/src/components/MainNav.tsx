import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-2 items0-center">
      {isAuthenticated ? (
        <>
          {/* <Link to="/order-status" className="font-bold hover:text-teal-500">Order Status</Link> */}
        <UsernameMenu />
        </>
      ) : (
        <Button
          variant="ghost"
          className="font-bold text-teal-600"
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
