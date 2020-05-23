import React ,{ Suspense, lazy }from 'react';
import {Switch, Route} from 'react-router-dom'

//Lazy Loading
const Calender = lazy(() => import('../container/calender/calender'));

//lazy loading ends

export const Routes = () => {
    return (
        // <div>
        <Suspense fallback={<div>Loading ...</div>}>
            <Switch>
                <Route path="/" component={Calender}/>
           
            </Switch>
        </Suspense>
        // </div>
    )
}
