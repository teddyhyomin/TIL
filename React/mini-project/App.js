import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

const App = () => {
    const [todos, setTodos] = useState ([
        {
          id:1,
          text: 'Study for Basic of React',
          checked: true,
        },
        {
          id: 2,
          text: 'Styling for Component',
          checked: true,
        },
        {
          id:3,
          text: 'Create Manage Schedules app',
          checked: false,
        },
      ]);
      const nextId = useRef(4);

      const onInsert = useCallback(
        text => {
          const todo = {
            id: nextId.current,
            text,
            checked: false
          };
          setTodos(todos.concat(todo));
          nextId.current += 1;
        },
        [todos],
      );

      const onRemove = useCallback(
        id => {
          setTodos(todos.filter(todo => todo.id !== id));
        },
        [todos],
      );

      const onToggle = useCallback(
        id => {
          setTodos(
            todos.map(todo =>
              todo.id === id ? {...todo, checked: !todo.checked } : todo,
              ),
          );
        },
        [todos]
      );
      
      return ( 
        <TodoTemplate> 
          <TodoInsert onInsert={onInsert}/>
            <TodoList todos={todos} onRemove={onRemove} />
        </TodoTemplate>
    );
};

export default App;

