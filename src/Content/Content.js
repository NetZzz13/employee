import React, { useEffect, useState } from "react";
import "./Content.css";

const Content = () => {
  const [state, setData] = useState({
    data: [],
    first_name: [],
  });

  const myData = async () => {
    const response = await fetch("https://reqres.in/api/users?per_page=10");
    const data = await response.json();
    setData({
      data: data.data,
      first_name: data.data.map((el) => el.first_name),
    });
  };

  let newEmployee = React.createRef();

  const addEmployee = () => {
    newEmployee.current.value &&
      setData({ first_name: [...state.first_name, newEmployee.current.value] });
    newEmployee.current.value = null;
  };

  const deleteEmployee = (item) => {
    setData({
      first_name: [...state.first_name.filter((el) => el !== item)],
    });
  };

  useEffect(() => {
    myData();
    //в myData() устанавливаем setData (т.е. меняем state) - компонент перерисовывается - цикл. Решение: [] для запуска useEffect только 1 раз, когда компонент монтируется/демонтируется
  }, []);

  return (
    <div className="content">
      {state.first_name.map((el) => (
        <div className="contentFirstName" key={el}>
          <div>{el}</div>
          <button onClick={() => deleteEmployee(el)}>Delete</button>
        </div>
      ))}

      <div className="addEmployee">
        <input type="text" placeholder="Enter name" ref={newEmployee} />
        <button className="removeEmployee" onClick={addEmployee}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Content;
