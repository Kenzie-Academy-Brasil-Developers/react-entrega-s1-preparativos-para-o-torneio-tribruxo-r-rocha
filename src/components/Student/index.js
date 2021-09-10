import "./style.css";

const Student = ({ name, house, alive, yearOfBirth, image }) => {
  return house === "Gryffindor" ? (
    <div className="Card Gryffindor">
      <img src={image} alt={name} />
      <div>{name}</div>
      <div>{house}</div>
      <div>{yearOfBirth}</div>
    </div>
  ) : house === "Slytherin" ? (
    <div className="Card Slytherin">
      <img src={image} alt={name} />
      <div>{name}</div>
      <div>{house}</div>
      <div>{yearOfBirth}</div>
    </div>
  ) : house === "Ravenclaw" ? (
    <div className="Card Ravenclaw">
      <img src={image} alt={name} />
      <div>{name}</div>
      <div>{house}</div>
      <div>{yearOfBirth}</div>
    </div>
  ) : (
    <div className="Card Hufflepuff">
      <img src={image} alt={name} />
      <div>{name}</div>
      <div>{house}</div>
      <div>{yearOfBirth}</div>
    </div>
  );
};

export default Student;
