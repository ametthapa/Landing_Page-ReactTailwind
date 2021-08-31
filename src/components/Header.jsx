import { useEffect, useState } from "react";

const Header = () => {
  const [top, setTop] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return window.removeEventListener("scroll", scrollHandler);
  }, []);
  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 trransition duration-300 ease-in-out ${
        !top && "bg-white blur shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site Branding */}
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
