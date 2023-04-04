import ButtonAdd from "../components/Button-Add";
import Task from "../components/Task";

function Home() {
  return (
    <>
      <Task title="Tarea 1" completed={false} />
      <ButtonAdd />
    </>
  );
}

export default Home;
