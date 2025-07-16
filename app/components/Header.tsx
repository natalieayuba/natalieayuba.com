import Avatar from "./nav/Avatar";
import NavLinks from "./nav/NavLinks";
import NavMenu from "./nav/NavMenu";
import Utilities from "./nav/Utilities";

const Header = () => (
  <header
    className="container fixed left-0 right-0 z-10 h-20 rounded-b-xl bg-blue bg-opacity-95 backdrop-blur-sm"
    style={{ WebkitBackdropFilter: "blur(4px)" }}
  >
    <div className="flex h-full items-center">
      <Avatar />
      <NavLinks className="hidden lg:flex" />
      <Utilities className="hidden flex-1 justify-end gap-6 lg:flex" />
      <NavMenu />
    </div>
  </header>
);

export default Header;
