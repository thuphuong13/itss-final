import "./App.css";
import useHook from "./hooks/useHook";
function App() {
  const [students, setKeyword, searchedStudents, handleClick] = useHook();
  return (
    <div className="App">
      {" "}
      <div>学生一覧：[{students.join(",")}]</div>{" "}
      <div>
        {" "}
        検索名前：{" "}
        <input
          type="text"
          onChange={(event) => {
            event.preventDefault();
            setKeyword(event.target.value);
          }}
        />{" "}
      </div>{" "}
      <button onClick={handleClick}>確定</button>{" "}
      <div>検索名前：{searchedStudents}</div>{" "}
      <div>
        {" "}
        位置：{" "}
        {searchedStudents.length > 0
          ? students.indexOf(searchedStudents[0]) + 1
          : "NaN"}{" "}
      </div>{" "}
    </div>
  );
}
export default App;
