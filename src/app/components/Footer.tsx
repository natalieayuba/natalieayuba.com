import Socials from "./nav/Socials";

const Footer = () => (
  <footer className="relative mt-28 w-full py-6 text-sm">
    <div className="container flex flex-col items-center justify-end gap-3 text-center">
      <Socials />
      <div>
        <p>Designed and developed by ya boi</p>
        <p>&copy; 2025 Natalie Ayuba</p>
      </div>
    </div>
  </footer>
);

export default Footer;
