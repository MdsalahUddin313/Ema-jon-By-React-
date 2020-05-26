import React from 'react';
import Header from '../Header';
import Shop from '../Shop';
import Review from '../Product_imformation/Review'
import Manage from '../Product_imformation/Manage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import Error_page from '../Products/Error_page';

const Index = () => {
    return (
        <div>
           

           <Router>
               <div>
                   <div>
               <Header></Header>
                  </div>
             <div>
                 <Switch>
                    <Route exact path="/">
                     <Shop></Shop> 
                   </Route>
                    <Route path="/Shop">
                    <Shop></Shop> 
                   </Route>

                <Route path="/Review">
                     <Review></Review>
                </Route>
                
                <Route path="/Manage">
                    <Manage></Manage>
                     
                </Route>
                
                <Route path="*">
                   <Error_page></Error_page>
                </Route>
            </Switch>
            </div>
            </div>
            
            </Router>
        </div>
    );
};

export default Index;