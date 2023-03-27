import {Link}
  from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowListItem
  from "./who-to-follow-list/who-to-follow-list-item";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomeComponent from "./home";
import {Route, Routes} from "react-router";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}});

function Tuiter() {
 return(
     <Provider store={store}>
  <div>
   <Nav/>
      <h1>Tuiter</h1>
      <div className="row">
        <div className="col-3 col-xl-2 col-lg-1">
            <NavigationSidebar active="home"/>
        </div>
        <div className="col-6 float">
            <Routes>
                <Route index element={<HomeComponent/>}/>
            </Routes>
        </div>
        <div className="col-3 d-none d-lg-block float-right">
            <WhoToFollowListItem/>
        </div>
      </div>
  </div>
     </Provider>
 )
}
export default Tuiter