import { Guest, Home, Invitation, SendInvitation } from "@pages"
import { Navigate } from "react-router-dom"

const routes = [
    {
        path: '/',
        // element: (
        //     <ProtectedRoute>
        //         <Home />
        //     </ProtectedRoute>
        // ),
        element: (<Home />),
        children: [
            {
                path: "/guest/list",
                element: <Guest />,
            },
            {
                path: "/guest/share",
                element: <SendInvitation />,
            }
        ]
    },
    {
        path: '/aghniya-izzul/:code',
        element: <Invitation />
    },
    {
        path: '/404',
        element: <h1>Page Not Found</h1>
    },
    {
        path: '*',
        element: <Navigate to="/404" replace />
    }
]

export default routes