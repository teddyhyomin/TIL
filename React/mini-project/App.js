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
    return (
        <TodoTemplate>
            <TodoInsert/>
            <TodoList todos={todos}/>
        </TodoTemplate>
    );
};

export default App;

