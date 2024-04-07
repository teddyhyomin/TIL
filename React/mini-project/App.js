import { useReducer, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function createBulkTodos() {
  const array = [];
  for (let i = 1 ; i <= 2500; i++) {
    array.push({
      id: i,
      text: `Todo ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch(action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo =>
        todo.id === action.id ? {...todo, checked: !todo.checked } : todo,
        );
     default:
      return todos; 
  }
}
/*
const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(2501);
*/
const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos)
  const nextId = useRef(2501);


/*
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
*/

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };
 /*     
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
 
      setTodos(todos => todos.concat(todo));
      nextId.current += 1;
    }, []
*/
    dispatch({ type: 'INSERT', todo});
    nextId.current += 1;
    }, []
  );
  

  const onRemove = useCallback(
    id => {
  /*    
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  
      setTodos(todos => todos.filter(todo => todo.id !== id));
    }, []
  */
      dispatch({type: 'REMOVE',  id});
    }, []
  );

  const onToggle = useCallback(
    id => {
   /*   
      setTodos(
        todos.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked } : todo,
          ),
      );
    },
    [todos]
   
      setTodos(todos =>
        todos.map(todo =>
          todo.id === id ? {...todo, checked: !todo.checked } : todo, 
          ),
        );
    }, []
   */
      dispatch({type: 'TOGGLE', id});
    }, []
  );

  return ( 
    <TodoTemplate> 
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
};

export default App;


