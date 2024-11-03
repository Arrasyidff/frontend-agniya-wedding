import { Home, Guest, Invitation } from "@pages"
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
                path: "/guests",
                element: <Guest />,
            }
        ]
    },
    {
        path: '/invitation/:id',
        element: <Invitation />
    }
]

export default routes