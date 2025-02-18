// import React from "react";
import footerLogo from "/assets/Footer/Logo.png";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbKWVCsBImt53r4gl7Q0l_PO5fDpDdXeE-yw&s)`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLink = [
  {
    title: "Careers",
    link: "/CareersPage",
  },
  {
    title: "FAQS",
    link: "/FAQsPage",
  },
  {
    title: "RETURNS /EXCHANGES",
    link: "/#",
  },
  {
    title: "PRIVACY POLICY",
    link: "/#",
  },
];

const FooterLinks = [
  {
    title: "HOME",
    link: "/#",
  },
  {
    title: "ABOUT US",
    link: "/AboutUsPage",
  },
  {
    title: "CONTACT US",
    link: "/ContactUsPage",
  },
  {
    title: "BLOG",
    link: "/BlogPage",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white mb-20">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
          {/* Company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Deleniti odit recusandae fuga molestias modi quod.
            </p>
          </div>
          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 font-bold">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:text-orange-400 hover:translate-x-1 duration-300 text-gray-200"
                    >
                      <Link to={link.link}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="py-8 px-4 font-bold">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                Links
              </h1>
              <ul className="flex flex-col gap-3">
                {FooterLink.map((link) => (
                  <li
                    key={link.title}
                    className="cursor-pointer hover:text-orange-400 hover:translate-x-1 duration-300 text-gray-200"
                  >
                    {/* If these links should navigate somewhere, consider using <Link> */}
                    <Link to={link.link}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Social Links */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="https://www.instagram.com/mrashokkumawat6641/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-3xl" />
                </a>
                <a
                  href="https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Fsearch_results%2F%3Fq%3DVineet%2Bmishra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-3xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mr-ashok-kumawat-986850342/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6 font-bold">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 7023666866</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
