import { MdDone } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

export default function ListTasks(props) {
  return (
    <div className="container">
      <ul className="list-group">
        {props.tasksList.map((element) => {
          return (
            <li className="list-group-item">
              <div className="Row ">
                <div className="Col">
                {element.strike ?<p className="vertical-center"><del>{element.text}</del></p> : <p className="vertical-center">{element.text}</p>}
                </div>
                <div className="CCol">
                <button
                  className="btn btn-success"
                  style={{ height: "fit-content", marginRight: "10px"}}
                  value={element.id}
                  onClick={(e) => props.strikeTaskCallback(element.id)}
                >
                  <MdDone />
                </button>
                <button
                  className="btn btn-danger"
                  style={{ height: "fit-content" }}
                  value={element.id}
                  onClick={(e) => props.removeTaskCallback(element.id)}
                >
                  <FaTrash />
                </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
