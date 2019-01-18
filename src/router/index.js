import React from 'react'
import RouteConfig from './config'
import RouterMap from './map'

class RouterView extends React.Component {
    render() {
        const {routes} = this.props;
        return <RouterMap routes={routes === undefined ? RouteConfig:routes}/>
    }
}

export default RouterView;