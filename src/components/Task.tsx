import { TbTrash, TbCalendarTime } from "react-icons/tb";

interface TaskProps {
  title: string;
  completed: boolean;
  expirationDate?: Date;
}

function Task(props: TaskProps) {
  return (
    <div
      className="task"
      style={{ display: "flex", flexDirection: "column", gap: "6px" }}
    >
      <h2 className="text">{props.title}</h2>
      <div
        className="task-date"
        style={{
          display: "flex",
          gap: "6px",
          alignItems: "center",
        }}
      >
        <TbCalendarTime
          className="text-icon"
          style={{ height: "20px", width: "auto" }}
        />
        <p style={{ fontSize: "16px" }}>5/10/2023 | 5:40</p>
      </div>
      <div className="task-controls">
        <button>Completado</button>
        <button>
          <TbTrash />
        </button>
      </div>
    </div>
  );
}

export default Task;
