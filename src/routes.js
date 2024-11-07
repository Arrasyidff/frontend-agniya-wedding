import { Home, Guest, Invitation, InvitedGuests } from "@pages"
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
                title: "Para Tamu",
                element: <Guest />,
            },
            {
                path: "/invited-guests",
                title: "Para Tamu Undangan",
                element: <InvitedGuests />,
            }
        ]
    },
    {
        path: '/invitation/:id',
        element: <Invitation />
    }
]

export default routes