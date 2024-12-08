import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { faFacebookF, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/images/abranch.png";

const Footer = () => {
    return createPortal(
        <footer className="bg-blueGray-900 py-12 px-6 relative z-50">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center md:items-start space-y-4">
                    <img
                        src={logo}
                        alt="Olive Delights Logo"
                        className="w-32 h-auto object-contain mb-2"
                    />
                    <p className="text-white text-lg font-semibold text-center md:text-left max-w-xs">
                        "Savor the Flavor, Share the Joy – Proudly Presented By Olive Delights"
                    </p>
                </div>

                <div className="flex flex-col text-sbeige items-center md:items-start">
                    <h3 className="text-lg font-semibold mb-4">Explore</h3>
                    <nav className="space-y-2 flex flex-col mx-4 text-sm">
                        <Link
                            to="/"
                            className="text-xl font-lato text-sbeige transition duration-300 hover:text-white hover:shadow-lg"
                        >
                            Home
                        </Link>
                        <Link
                            to="/menu"
                            className="text-xl font-lato text-sbeige transition duration-300 hover:text-white hover:shadow-lg">
                            Menu
                        </Link>
                        <Link
                            to="/aboutus"
                            className="text-xl font-lato text-sbeige transition duration-300 hover:text-white hover:shadow-lg">
                            About Us
                        </Link>
                        <Link
                            to="/careers"

                            className="text-xl font-lato text-sbeige transition duration-300 hover:text-white hover:shadow-lg">
                            Careers
                        </Link>
                        <Link
                            to="/faq"

                            className="text-xl font-lato text-sbeige transition duration-300 hover:text-white hover:shadow-lg"
                        >
                            FAQ
                        </Link>
                    </nav>
                </div>

                <div className="flex flex-col text-sbeige items-center md:items-start">
                    <h3 className="text-lg font-semibold mb-4">Connect</h3>
                    <p className="text-sm text-gray-400">Phone: (425)-753-1511</p>
                    <p className="text-sm text-gray-400">Email: olivedelights.wa@gmail.com</p>
                    <div className="flex space-x-4 mt-4">
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="text-gray-400 hover:text-white transition pointer-events-auto"
                        >
                            <FontAwesomeIcon icon={faFacebookF} size="lg" />
                        </a>
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="text-gray-400 hover:text-white transition pointer-events-auto"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a
                            href="#"
                            aria-label="Twitter"
                            className="text-gray-400 hover:text-white transition pointer-events-auto"
                        >
                            <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                        <a
                            href="#"
                            aria-label="LinkedIn"
                            className="text-gray-400 hover:text-white transition pointer-events-auto"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
                <p>&copy; {new Date().getFullYear()} Olive Delights. All rights reserved.</p>
            </div>
        </footer>,
        document.getElementById("footer")! // Ensure the element exists
    );
};

export default Footer;
