import React, { useEffect, useState } from "react";
import { Input, Badge, Menu, Dropdown } from "antd";
import {
    UserOutlined,
    GiftOutlined,
    SettingOutlined,
    LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useCoinSystem } from "../../hooks/useCoinSystem";
import { useAuthStore } from "../../store/useAuthStore";
import { UserProfile } from "../../types/profile";
import { getInfo } from "../../services/authService";
import SearchBox from "../search/SearchBox";
import "./style.css";
const Header: React.FC = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuthStore();
    const [userInfo, setUserInfo] = useState<UserProfile>()
    const { coinSystem, setCoinSystem } = useCoinSystem();
    const [forcusSearchBar, setForcusSearchBar] = useState(false)

    useEffect(() => {
        getInfo().then(res => {
            setUserInfo(res)
        }).catch();
    }, [])

    const userMenu = (
        <Menu
            className="minecraft-user-menu"
            items={[
                {
                    key: "profile",
                    label: "My Profile",
                    icon: <SettingOutlined />,
                    onClick: () => navigate("/my-profile"),
                },
                {
                    key: "logout",
                    label: "Logout",
                    icon: <LogoutOutlined />,
                    onClick: () => {
                        logout()
                        navigate("/auth/login");
                    },
                    danger: true,
                },
            ]}
        />
    );


    const handleCoinClick = () => {
        setCoinSystem((prev) => ({
            ...prev,
            showCoinPopup: true,
        }));
    };

    return (
        <>
            {/* Top Bar - Minecraft Theme */}
            <div className="minecraft-top-bar">
                <div className="px-[10%]">
                    <div className="flex justify-between items-center py-2 text-[12px]">
                        <div className="flex items-center">
                            <ul className="header-top-menu flex items-center gap-4 border-r border-yellow-600 pr-4 minecraft-top-links">
                                <li className="cursor-pointer hover:text-yellow-400 transition-colors">Giới Thiệu</li>
                                <li className="cursor-pointer hover:text-yellow-400 transition-colors">Hỗ Trợ</li>
                                <li className="cursor-pointer hover:text-yellow-400 transition-colors">Hướng Dẫn</li>
                            </ul>
                            <div className="pl-4">
                                <p className="minecraft-server-status">
                                    <span className="font-bold text-yellow-400">Tất cả server đang hoạt động</span> - Uptime 99.9%
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 minecraft-top-links">
                            <div className="hover:text-yellow-400 transition-colors">Discord</div>
                            <div className="hover:text-yellow-400 transition-colors">Support</div>
                            <div className="hover:text-yellow-400 transition-colors">Theo Dõi</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header - Logo & Search */}
            <div className="minecraft-main-header">
                <div className="px-[10%] py-4 flex items-center justify-between gap-10">
                    {/* Logo */}
                    <div className="cursor-pointer minecraft-logo">
                        <div className="flex items-center gap-3">
                            <img
                                src="/logo/logo.png"
                                width={50}
                                alt="Minecraft Server"
                                className="minecraft-logo-img"
                            />
                            <div className="minecraft-logo-text">
                                <div className="logo-title">TOROMC.VN</div>
                                <div className="logo-subtitle">PREMIUM SERVERS</div>
                            </div>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl">
                        <Input.Search
                            onClick={() => setForcusSearchBar(true)}
                            placeholder="Tìm kiếm server, mods, maps..."
                            size="large"
                            className="minecraft-search-input"
                        />
                    </div>

                    {/* User Actions */}
                    <div className="flex items-center gap-6 text-xl minecraft-actions">
                        {/* Coins */}
                        <div
                            className="flex items-center gap-2 cursor-pointer minecraft-coins"
                            onClick={handleCoinClick}
                        >
                            <div className="relative">
                                <GiftOutlined className="coin-icon" />
                                {coinSystem.showCoinPopup && (
                                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                                )}
                            </div>
                            <div className="text-[14px]" onClick={() => navigate("/reward")}>
                                <span className="font-semibold text-yellow-400">
                                    {userInfo?.loyalty_points?.find(p => p.source == "daily_login")?.points || 0}
                                </span>
                                <span className="text-gray-300 ml-1">xu</span>
                            </div>
                        </div>

                        {/* User */}
                        {user ? (
                            <Dropdown
                                overlay={userMenu}
                                placement="bottomRight"
                                trigger={["click"]}
                            >
                                <div className="flex items-center gap-2 cursor-pointer select-none minecraft-user">
                                    <div className="user-avatar">
                                        <UserOutlined className="user-icon" />
                                    </div>
                                    <div className="text-[14px] font-medium user-info">
                                        <div className="username">Xin chào, {user.username}</div>
                                        <div className="user-rank text-yellow-400 text-xs">Premium Member</div>
                                    </div>
                                </div>
                            </Dropdown>
                        ) : (
                            <div
                                className="flex items-center gap-2 cursor-pointer minecraft-user"
                                onClick={() => navigate("/auth/login")}
                            >
                                <div className="user-avatar">
                                    <UserOutlined className="user-icon" />
                                </div>
                                <div className="text-[14px]">Đăng Nhập</div>
                            </div>
                        )}

                        {/* Cart */}
                        <Badge count={0} size="small" className="minecraft-badge">
                            <div className="action-icon cart-icon">
                            </div>
                        </Badge>
                    </div>
                </div>
            </div>

        
            {/* Search Box Overlay */}
            {forcusSearchBar && <SearchBox onClose={() => setForcusSearchBar(false)} />}
        </>
    );
};

export default Header;