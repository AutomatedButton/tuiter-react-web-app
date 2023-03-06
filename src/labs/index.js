import Classes from "./a6/classes";
import Styles from "./a6/styles";
import ConditionalOutput
  from "./a6/conditional-output";
import "./a6/todo/todo-list.js"


function Assignment6() {
const color = 'blue';
const dangerous = true;
 return (
   <div>
     <Assignment6/>
     <ConditionalOutput/>
     <Styles/>
     <Classes/>
     <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                        wd-fg-black wd-padding-10px`}>
            Dangerous background</div>
   </div>
 );
}
export default Assignment6;