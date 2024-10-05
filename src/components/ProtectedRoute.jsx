import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
    const isAuntecticated = localStorage.getItem('authToken')
    if (!isAuntecticated) return <Navigate to='/invitation/:1' replace />

    return children
}

export default ProtectedRoute