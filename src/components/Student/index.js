import "./style.css";

const Student = ({ name, house, alive, yearOfBirth, image }) => {
    return (
        <div className="card">
            <img src={image} alt={name} />
            <div>{name}</div>
            <div>{house}</div>
            <div>{yearOfBirth}</div>
        </div>
    )
}

export default Student;