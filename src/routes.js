import { Home, Guest, Invitation, Event, EventDetail, SendInvitation } from "@pages"
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
                path: "/send_invitation",
                element: <SendInvitation />,
            }
        ]
    },
    {
        path: '/aghniya-izzul/:code',
        element: <Invitation />
    }
]

export default routes