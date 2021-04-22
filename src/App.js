import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, increment } from "./actions/index";

import "./App.css";

import ListGroup from "./components/ListGroup";

function App() {
  const { users, isFetching } = useSelector((state) => state.usersReducer);
  const { count } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleCount = () => {
    dispatch(increment());
  };

  return (
    <div className="App">
      {!isFetching ? (
        <ul>
          {users.map(({ id, name }) => {
            return <ListGroup name={name} key={id} />;
          })}
        </ul>
      ) : (
        <div>Loading.....</div>
      )}

      <button onClick={handleCount}>Click me</button>
      <p>Count click: {count}</p>
      <p>Message: {count % 3 === 0 && count !== 0 ? "yuppyyy" : "nop"}</p>
    </div>
  );
}

export default App;
