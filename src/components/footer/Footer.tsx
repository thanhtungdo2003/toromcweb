import React from "react";
import { Row, Col, Divider } from "antd";
import { 
    FacebookOutlined, 
    YoutubeOutlined, 
    CrownFilled,
    MailFilled,
    PlayCircleFilled,
    DiscordFilled,
    CopyFilled,
    ThunderboltFilled
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./style.css"

const Footer: React.FC = () => {
    const navigate = useNavigate();

    const quickLinks = [
        { label: "Trang Chủ", path: "/" },
        { label: "Giới Thiệu", path: "/about" },
        { label: "Hướng Dẫn", path: "/guides" },
        { label: "Sự Kiện", path: "/events" }
    ];

    const serverTypes = [
        { label: "Survival", path: "/survival" },
        { label: "Creative", path: "/creative" },
        { label: "Minigames", path: "/minigames" }
    ];

    const supportLinks = [
        { label: "Hỗ Trợ", path: "/support" },
        { label: "FAQ", path: "/faq" },
        { label: "Điều Khoản", path: "/terms" }
    ];

    const features = [
        { icon: <ThunderboltFilled/>, text: "Hiệu năng cao" },
        { icon: "🛡️", text: "Bảo mật tốt" },
        { icon: "👥", text: "Support 24/7" },
        { icon: "🎮", text: "Đa dạng game mode" }
    ];

    const handlePlayNow = () => {
        navigator.clipboard.writeText("play.toromc.vn");
    };

    return (
        <footer className="minecraft-footer">
            {/* Main Footer */}
            <div className="footer-main">
                <div className="px-[10%] py-8">
                    <Row gutter={[30, 30]}>
                        {/* Server Info & Quick Links */}
                        <Col xs={24} md={8}>
                            <div className="footer-section">
                                <div className="footer-logo">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="minecraft-logo-small">
                                            <CrownFilled />
                                        </div>
                                        <div>
                                            <div className="logo-title">TOROMC.VN</div>
                                            <div className="logo-subtitle">MINECRAFT SERVER</div>
                                        </div>
                                    </div>
                                </div>
                                <p className="footer-description">
                                    Server Minecraft Việt Nam chất lượng cao với cộng đồng thân thiện và hệ thống ổn định.
                                </p>
                                
                                <div className="server-ip-section">
                                    <div className="ip-label">Kết nối ngay:</div>
                                    <div className="ip-address" onClick={handlePlayNow}>
                                        <PlayCircleFilled className="ip-icon" />
                                        <span>play.toromc.vn</span>
                                        <span className="copy-hint"><CopyFilled/></span>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/* Quick Links */}
                        <Col xs={12} md={4}>
                            <div className="footer-section">
                                <h3 className="footer-title">Liên Kết</h3>
                                <ul className="footer-links">
                                    {quickLinks.map((link, index) => (
                                        <li key={index}>
                                            <a 
                                                href={link.path}
                                                className="footer-link"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    navigate(link.path);
                                                }}
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>

                        {/* Server Types */}
                        <Col xs={12} md={4}>
                            <div className="footer-section">
                                <h3 className="footer-title">Chế Độ</h3>
                                <ul className="footer-links">
                                    {serverTypes.map((server, index) => (
                                        <li key={index}>
                                            <a 
                                                href={server.path}
                                                className="footer-link"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    navigate(server.path);
                                                }}
                                            >
                                                {server.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>

                        {/* Support & Contact */}
                        <Col xs={24} md={8}>
                            <div className="footer-section">
                                <h3 className="footer-title">Hỗ Trợ & Liên Hệ</h3>
                                <ul className="footer-links">
                                    {supportLinks.map((link, index) => (
                                        <li key={index}>
                                            <a 
                                                href={link.path}
                                                className="footer-link"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    navigate(link.path);
                                                }}
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                <Divider className="footer-divider" />

                                <div className="contact-info">
                                    <div className="contact-item">
                                        <DiscordFilled className="contact-icon" />
                                        <a href="https://discord.gg/toromc" target="_blank" rel="noopener noreferrer">
                                            discord.gg/toromc
                                        </a>
                                    </div>
                                    <div className="contact-item">
                                        <MailFilled className="contact-icon" />
                                        <span>support@toromc.vn</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="px-[10%] py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                        <div className="copyright">
                            © 2024 TOROMC.VN - Minecraft Server. All rights reserved.
                        </div>
                        
                        <div className="social-links">
                            <a href="https://discord.gg/toromc" className="social-link" target="_blank" rel="noopener noreferrer">
                                <DiscordFilled />
                            </a>
                            <a href="#" className="social-link">
                                <FacebookOutlined />
                            </a>
                            <a href="#" className="social-link">
                                <YoutubeOutlined />
                            </a>
                        </div>

                        <div className="server-features">
                            {features.map((feature, index) => (
                                <span key={index} className="feature-tag">
                                    {feature.icon} {feature.text}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;