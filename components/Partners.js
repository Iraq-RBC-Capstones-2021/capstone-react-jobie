import Apple from "../assets/Collaborators/img_Apple.png";
import Google from "../assets/Collaborators/img_Google.png";
import Microsoft from "../assets/Collaborators/img_Microsoft.png";
import Amazon from "../assets/Collaborators/img_Amazon.png";
import Netflix from "../assets/Collaborators/img_Netflix.png";
import Facebook from "../assets/Collaborators/img_Facebook.png";
import Airbnb from "../assets/Collaborators/img_Airbnb.png";
import Spotify from "../assets/Collaborators/img_Spotify.png";
import Yahoo from "../assets/Collaborators/img_Yahoo.png";
export default function Partners() {
  return (
    <div>
      <div className="grid grid-cols-5 justify-between gap-20 py-6">
        <img src={Apple.src} alt="collaborator" />
        <img src={Google.src} alt="collaborator" />
        <img src={Microsoft.src} alt="collaborator" />
        <img src={Amazon.src} alt="collaborator" />
        <img src={Netflix.src} alt="collaborator" />
      </div>
      <div className="grid grid-cols-4 justify-between gap-28 py-6">
        <img src={Facebook.src} alt="collaborator" />
        <img src={Airbnb.src} alt="collaborator" />
        <img src={Spotify.src} alt="collaborator" />
        <img src={Yahoo.src} alt="collaborator" />
      </div>
    </div>
  );
}
