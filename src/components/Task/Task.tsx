const Task = (): JSX.Element => {
  return (
    <div className="task">
      <span className="task__name">Take out the rubish</span>
      <button className="task__toggle-button">✅</button>
      <button className="task__delete-button">🗑️</button>
    </div>
  );
};

export default Task;
