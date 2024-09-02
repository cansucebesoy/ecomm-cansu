import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const teamList = [
  {
    imageLink: "/erhanfirat.jpeg",
    name: "Erhan Firat",
    profession: "Project Owner",
  },
  {
    imageLink: "/gokhanozdemir.jpeg",
    name: "Gokhan Ozdemir",
    profession: "Scrum Master",
  },
  {
    imageLink: "/cansucebesoy.jpeg",
    name: "Cansu Cebesoy",
    profession: "Full Stack Developer",
  },
];

export const Team = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
      <p className="text-center mb-24">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>
      <div className="flex flex-col justify-center md:flex-row gap-12">
        {teamList.map((teamMember) => (
          <div
            key={teamMember.name}
            className="flex flex-col items-center rounded-lg shadow-md bg-white p-6"
          >
            <img
              src={teamMember.imageLink}
              alt={teamMember.name}
              className="w-40 h-40 rounded-full mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{teamMember.name}</h3>
            <p className="text-gray-600 mb-4">{teamMember.profession}</p>
            <div className="flex gap-4 text-tertiary">
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
