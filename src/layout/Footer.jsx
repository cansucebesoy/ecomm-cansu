import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="w-full container py-12 ">
        <div className="flex flex-col block items-start space-y-6 md:space-y-0 lg:space-y-0 md:flex-row md:justify-between lg:flex-row lg:justify-between">
          <div className="text-primary space-y-4">
            <h2 className="text-2xl font-bold ">Get In Touch</h2>
            <div className="flex gap-4">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
          <div className="text-primary flex flex-col space-y-3">
            <h2 className="text-2xl font-bold ">Company Info</h2>
            <a className="text-secondary" href="">
              About Us
            </a>
            <a className="text-secondary" href="">
              Carrier
            </a>
            <a className="text-secondary" href="">
              We are hiring
            </a>
            <a className="text-secondary" href="">
              Blog
            </a>
          </div>
          <div className="text-primary flex flex-col space-y-3">
            <h2 className="text-2xl font-bold ">Features</h2>
            <a className="text-secondary" href="">
              Business Marketing
            </a>
            <a className="text-secondary" href="">
              User Analytic
            </a>
            <a className="text-secondary" href="">
              Live Chat
            </a>
            <a className="text-secondary" href="">
              Unlimited Support
            </a>
          </div>
          <div className="text-primary flex flex-col space-y-3">
            <h2 className="text-2xl font-bold ">Resources</h2>
            <a className="text-secondary" href="">
              IOS & Android
            </a>
            <a className="text-secondary" href="">
              Watch a demo
            </a>
            <a className="text-secondary" href="">
              Customers
            </a>
            <a className="text-secondary" href="">
              API
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FAFAFA] text-center p-12 text-secondary text-xl font-bold">
        <p className="">Made With Love By Figmaland All Right Reserved </p>
      </div>
    </>
  );
};
