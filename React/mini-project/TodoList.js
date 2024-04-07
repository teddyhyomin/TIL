import React, { useCallback } from "react";
//import { List } from "react-vitualized";
import { List } from "../../node_modules/react-virtualized/dist/commonjs/index";
import TodoListItem from "./TodoListItem";
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
    /*
    return (...);
      <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem 
                    todo={todo} 
                    key={todo.id} 
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
*/
    const rowRenderer = useCallback(
        ({ index, key, style }) => {
            const todo = todos[index];
            return(
                <TodoListItem
                    todo={todo}
                    key={key}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    style={style}
                />
            );
        },
        [onRemove, onToggle, todos],
    );
    return(
        <List
            className="TodoList"
            width={512}
            height={513}
            rowCount={todos.length}
            rowHeight={57}
            rowRenderer={rowRenderer}
            list={todos}
            style={{ outline: 'none'}}
         />   
    );
};

export default React.memo(TodoList);