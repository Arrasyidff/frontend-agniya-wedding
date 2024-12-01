import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import { Provider } from 'react-redux'
import routes from "routes"
import store from './store/reducers'

const AppRoutes = () =>  useRoutes(routes)

function App() {
    return (
        <Provider store={store}>
            <Router>
                <AppRoutes />
            </Router>
        </Provider>
    )
}

export default App
