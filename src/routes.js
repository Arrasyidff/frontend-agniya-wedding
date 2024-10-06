import { Home, Invitation } from "@pages"
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
        path: '/invitation/:id',
        element: <Invitation />
    }
]

export default routes