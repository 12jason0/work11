import { TodoItemProps } from '../types';

//{todo} => {todo : {id, text, completed}}
interface Props {
  todo: TodoItemProps;
  toggleCompolete: (id: number) => void;
}

export default function TodoItem({ todo, toggleCompolete }: Props) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => toggleCompolete(todo.id)}
        />
        {todo.text}
      </label>
    </li>
  );
}
