import "./ExtraInfo.scss";
import dogImg from "../../images/dog.jpg";

export const ExtraInfo = () => {
  return (
    <div className="extra_info">
      <p className="text">Люблю котиків, але живую з собакою, який бавиться з 3D принтером 🙃</p>
      <img src={dogImg} alt="Dog" className="image" />
    </div>
  )
}