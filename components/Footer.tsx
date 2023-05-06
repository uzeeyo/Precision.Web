const Footer = () => {
  return (
    <footer className="absolute top-full bg-slate-700 text-slate-200 py-10 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-ubuntu mb-4 border-b border-slate-200 mr-20">
              Services
            </h3>
            <ul>
              <li className="mb-2">
                <a href="#">Free Diagnostics</a>
              </li>
              <li className="mb-2">
                <a href="#">Board Repair</a>
              </li>
              <li className="mb-2">
                <a href="#">Data Recovery</a>
              </li>
              <li className="mb-2">
                <a href="#">Water Damage</a>
              </li>
            </ul>
          </div>
          <div className=" mb-8 md:mb-0">
            <h3 className="text-2xl font-ubuntu mb-4 border-b border-slate-200 mr-20">
              Locations
            </h3>
            <ul>
              <li className="mb-2">
                <a href="#">New York City</a>
              </li>
              <li className="mb-2">
                <a href="#">San Francisco</a>
              </li>
              <li className="mb-2">
                <a href="#">Los Angeles</a>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-ubuntu mb-4 border-b border-slate-200 mr-20">
              About Us
            </h3>
            <ul>
              <li className="mb-2">
                <a href="#">Our Story</a>
              </li>
              <li className="mb-2">
                <a href="#">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-ubuntu mb-4 border-b border-slate-200 mr-20">
              Connect
            </h3>
            <ul>
              <li className="mb-2">
                <a href="#">Instagram</a>
              </li>
              <li className="mb-2">
                <a href="#">Facebook</a>
              </li>
              <li className="mb-2">
                <a href="#">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
