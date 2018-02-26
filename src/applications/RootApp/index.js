import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router'

// TODO: import PrivateRoute from '../../components/PrivateRoute'

import withI18NTranslation from '../../hoc/withI18NTranslation'
import withToastNotification from '../../hoc/withToastNotification'
import routes from './routes'
import GenerateRoutes from '../../components/GenerateRoutes';

/**
 * Main Component in the React Tree
 * This Render each route of the containers or / and components like 404
 * TODO: Use PrivateRoute if the `private attribute of route is true
 */
class RootApp extends Component {
  render () {
    return (
      <Switch>
        <GenerateRoutes routes={routes} />
        <Route render={() => <h1 style={{textAlign: 'center'}}>Not Found</h1>} />
      </Switch>    
    )
  }
}

export default withToastNotification(
  withI18NTranslation(RootApp)
)