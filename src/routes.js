import { Home, Guest, Invitation, Event, EventDetail } from "@pages"
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
            },
            {
                path: "/event/:id",
                element: <EventDetail />,
            }
        ]
    },
    {
        path: '/aghniya-izzul/:code',
        element: <Invitation />
    }
]

export default routes