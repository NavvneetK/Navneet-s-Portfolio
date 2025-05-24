import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="flex flex-row justify-between items-center px-2 pb-2 text-gray-300">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="flex flex-row justify-center gap-4">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon" />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Navneet Kaur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;