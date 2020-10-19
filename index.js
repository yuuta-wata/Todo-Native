import { AppRegistry } from 'react-native'

import Routes from './app/navigation/Routes'
import { name as appName } from './app.json'

AppRegistry.registerComponent(appName, () => Routes)
