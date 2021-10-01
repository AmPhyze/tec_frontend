const Navbar = () => {
  // TODO: Create Navigation component
  return (
    <nav className="bg-black sticky top-0 z-50">
        <div className="flex justify-between">

          <div
            // Left Nav Menu
            className="flex py-2 px-2">
            <div className="text-white font-bold">
              <button className="dropdown text-white font-bold py-3 px-4 text-base">
                <span>Thailand Endurance Cup</span>
              </button>
            </div>
          </div>

          <div
            // Right Nav Menu
            className="text-white font-bold flex">
              <button className="px-10 py-2">
                <span>Rules</span>
              </button>
              <button className="px-10 py-2">
                <span>Schedule</span>
              </button>
              <button className="px-10 py-2">
                <span>Livestream</span>
              </button>
              <button className="px-10 py-2">
                <span>Mappool</span>
              </button>
              <button className="px-10 bg-white text-black">
                <span className="font-bold py-2">Login</span>
              </button>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
