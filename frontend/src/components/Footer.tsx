import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-teal-600 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl font-bold text-white tracking-tight">
          &copy; MealMates
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span>
            <Link to="/PrivacyPolicy">PrivacyPolicy</Link>
          </span>
          <span>FAQ</span>
          <span>
            <Link to="/Terms">Terms of Services</Link>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
