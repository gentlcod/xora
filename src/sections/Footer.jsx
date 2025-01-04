import { socials } from "../constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="py-10 container">
        <div className="flex w-full max-md:flex-col">
          {/* Copyright Section */}
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70">
              Copyright {year}, Xora All Rights Reserved
            </p>
          </div>

          {/* Links Section */}
          <div className="flex items-center justify-center sm:ml-auto">
            <p className="cursor-pointer legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
              Privacy Policy
            </p>
            <p className="cursor-pointer text-p5 transition-all duration-500 hover:text-p1">
              Terms of Use
            </p>
          </div>

          {/* Social Media Icons */}
          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a href={url} className="social-icon">
                  <img
                    src={icon}
                    alt={title}
                    className="size-1/3 object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
