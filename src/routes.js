import { Home, Dashboard, Invitation } from "@pages"
import ProtectedRoute from "components/ProtectedRoute"

const routes = [
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "/",
                element: <Dashboard />,
            }
        ]
    },
    {
        path: '/invitation/:id',
        element: <Invitation />
    }
]

export default routes