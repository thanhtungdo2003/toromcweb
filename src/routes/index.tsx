import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/auth/LoginPage";
import { AuthLayout } from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";
import VerifyEmailPage from "../pages/auth/VerifyEmailPage";
import ChangePasswordPage from "../pages/auth/ChangePasswordPage";
import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Spin } from "antd";
import Error403 from "../components/error/403";

const ProtectedRoute: React.FC<{
    children: React.ReactNode;
    requireAuth?: boolean;
}> = ({ children, requireAuth = true }) => {
    const { token, isLoading } = useAuthStore();
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Spin size="large" tip="Đang xác thực..." />
            </div>
        );
    }

    if (requireAuth && !token) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};

const AdminProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const { user, token, isLoading } = useAuthStore();
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Spin size="large" tip="Đang xác thực..." />
            </div>
        );
    }

    if (!token) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    // if (user?.role !== "ADMIN") {
    //     return <Error403 />;
    // }

    return <>{children}</>;
};

// Auth Route Component (chỉ cho user chưa login)
const AuthRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { token, isLoading } = useAuthStore();
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Spin size="large" tip="Đang xác thực..." />
            </div>
        );
    }

    if (token) {
        const from = location.state?.from || "/";
        return <Navigate to={from} replace />;
    }

    return <>{children}</>;
};

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/auth"
                    element={
                        <AuthRoute>
                            <AuthLayout />
                        </AuthRoute>
                    }
                >
                    <Route path="login" element={<LoginPage />} />
                    <Route
                        path="verify-email/:token"
                        element={<VerifyEmailPage />}
                    />
                    <Route
                        path="change-password"
                        element={<ChangePasswordPage />}
                    />
                    {/* <Route path="register" element={<RegisterPage />} /> */}
                </Route>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />

                </Route>
                <Route
                    path="/admin/v1"
                    element={
                        <AdminProtectedRoute>
                            <AdminLayout />
                        </AdminProtectedRoute>
                    }
                >
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
