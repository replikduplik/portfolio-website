const links = ['Home', 'About', 'Portfolio', 'Contact'];

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center items-center gap-4 sm:gap-16 bg-black/30 backdrop-blur-sm py-4 sticky top-0 z-50">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="p-2 text-sm text-white hover:text-gray-300 transition-colors"
        >
          {link}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
