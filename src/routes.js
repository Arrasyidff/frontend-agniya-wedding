import { Home, Guest, Invitation, Event } from "@pages"
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
            },
            {
                path: "/events",
                element: <Event />,
            }
        ]
    },
    {
        path: '/invitation/:id',
        element: <Invitation />
    }
]

export default routes