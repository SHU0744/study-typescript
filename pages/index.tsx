import { NextPage } from "next";
import { ChangeEventHandler, VFC, useState } from "react";

type Todo = {
  id: number;
  label: string;
  isDone: boolean;
};

const Home: NextPage = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const input: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  const add = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: Math.random(), label: text, isDone: false }];
    });
    setText("");
  };
  const toggle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === Number(e.target.value)) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };
  return (
    <div>
      <h1>Todo</h1>
      <div>
        <input type="text" value={text} onChange={input} />
        <button onClick={add}>ボタン</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <ListItem todo={todo} toggle={toggle} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

type ListItemProps = {
  todo: Todo;
  toggle: ChangeEventHandler<HTMLInputElement>;
};

const ListItem: VFC<ListItemProps> = ({ todo, toggle }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={toggle}
        value={todo.id}
      />
      <span>{todo.label}</span>
    </label>
  );
};

export default Home;
