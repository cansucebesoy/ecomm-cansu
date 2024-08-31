import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Get answers to all your questions.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Contact Our Company
        </button>
      </div>

      <div className="flex items-center justify-center mt-8 gap-8 text-secondary text-xl">
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faLinkedin} />

        {/* <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <i className="fab fa-linkedin-in"></i>
        </a> */}
      </div>
    </div>
  );
};
