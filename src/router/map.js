import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
class RouterMap extends Component {
    render() {
        const {routes} = this.props;
        const defaultRoute = <Route path="/" component={()=>(
            <Redirect to="/home"/>
        )} key={"redirect"} exact/>
        return (
            <Switch>
                {
                    routes.map((item,index)=>{
                        const Comp = item.component;
                        return <Route key={index} path={item.path} component={(apiRouter)=>{
                                return <Comp routes={item.children} {...apiRouter} key={item.children}></Comp>
                            }} />
                    }).concat([defaultRoute])
                }
            </Switch>
        );
    }
}

export default RouterMap;