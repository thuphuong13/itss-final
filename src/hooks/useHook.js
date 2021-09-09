import { useState } from "react";
export default function useHook() {
  const students = ["Huyen", "Hoa", "Hung", "Long"];
  const [keyword, setKeyword] = useState("");
  const [searchedStudents, setSearchedStudents] = useState("");
  const handleClick = () => {
    const result = students.filter((student) => {
      return student === keyword;
    });
    console.log(result);
    setSearchedStudents(result);
    console.log(students.indexOf(keyword));
  };
  return [students, setKeyword, searchedStudents, handleClick];
}
