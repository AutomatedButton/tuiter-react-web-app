import Classes from "./a6/classes";
import Styles from "./a6/styles";
import ConditionalOutput
  from "./a6/conditional-output";
import "./a6/todo/todo-list.js"
import Assignment6 from "./a6";
import TodoList from "./a6/todo/todo-list";


function Labs() {
const color = 'blue';
const dangerous = true;
 return (
   <div>
       <Assignment6/>
       <Styles/>
       <Classes/>
       <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                        wd-fg-black wd-padding-10px`}>
            Dangerous background</div>
       <ConditionalOutput/>
       <TodoList/>
   </div>
 );
}
export default Labs;