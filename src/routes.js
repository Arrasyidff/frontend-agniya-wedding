import { Home, Detail } from "@pages"
import ProtectedRoute from "components/ProtectedRoute"

const routes = [
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        )
    },
    {
        path: '/',
        element: <Detail />
    }
]

export default routes