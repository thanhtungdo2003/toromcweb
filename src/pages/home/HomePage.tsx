import { Carousel as AntCarousel, Button, Row, Col, Card, Statistic } from "antd";
import { useNavigate } from "react-router-dom";
import { Toaster } from "sonner";
import { CrownFilled, FireFilled, TeamOutlined, RocketFilled, SafetyCertificateFilled, DiscordFilled, PlayCircleFilled, CalendarFilled, BuildOutlined, StarOutlined, HeartOutlined, CopyFilled } from "@ant-design/icons";
import "./style.css";
import { toast } from "react-toastify";

const HomePage = () => {
    const navigate = useNavigate();

    const carouselItems = [
        {
            type: "discord",
            title: "THAM GIA CỘNG ĐỒNG TOROMC.VN",
            description: "Kết nối với hàng ngàn người chơi, nhận thông báo sự kiện và hỗ trợ nhanh chóng",
            buttonText: "Tham gia Discord"
        },
        {
            type: "server",
            title: "TOROMC.VN SERVER",
            description: "IP: play.toromc.vn | Phiên bản: 1.16-1.20 | Survival, Minigames, Creative",
            buttonText: "Chơi ngay"
        },
        {
            type: "event",
            title: "SỰ KIỆN ĐẶC BIỆT",
            description: "Event Build Competition đang diễn ra với tổng giải thưởng lên đến 10.000.000 VND",
            buttonText: "Xem chi tiết"
        }
    ];

    const features = [
        {
            icon: <RocketFilled className="feature-icon" />,
            title: "Survival Đỉnh Cao",
            description: "Trải nghiệm survival với economy phong phú, land protection và nhiều tính năng độc đáo"
        },
        {
            icon: <SafetyCertificateFilled className="feature-icon" />,
            title: "Anti-Cheat Mạnh Mẽ",
            description: "Hệ thống chống hack tiên tiến, đảm bảo công bằng cho mọi người chơi"
        },
        {
            icon: <TeamOutlined className="feature-icon" />,
            title: "Cộng Đồng Thân Thiện",
            description: "Hàng ngàn thành viên tích cực, sẵn sàng giúp đỡ và cùng nhau phát triển"
        },
        {
            icon: <CrownFilled className="feature-icon" />,
            title: "Rank Đặc Quyền",
            description: "Nhiều cấp bậc với đặc quyền riêng, hỗ trợ server phát triển lâu dài"
        }
    ];

    const stats = [
        {
            title: "Người chơi online",
            value: 342,
            prefix: <TeamOutlined />
        },
        {
            title: "Tổng thành viên",
            value: 12500,
            prefix: <DiscordFilled />
        },
        {
            title: "Ngày hoạt động",
            value: 1825,
            suffix: "+",
            prefix: <CalendarFilled />
        },
        {
            title: "Sự kiện đã tổ chức",
            value: 156,
            suffix: "+",
            prefix: <FireFilled />
        }
    ];

    const serverInfo = {
        ip: "play.toromc.vn",
        version: "1.16 - 1.20.x",
        type: "Survival + Minigames + Creative",
        status: "Đang hoạt động",
        players: "342/500"
    };

    const handleJoinDiscord = () => {
        window.open("https://discord.com/channels/1432600202522656831/1433228151202381916", "_blank");
    };

    const handlePlayNow = () => {
        navigator.clipboard.writeText(serverInfo.ip);
        toast.success("Copied!");
    };

    return (
        <>
            <Toaster position="top-right" />
            {/* Hero Carousel */}
            <div className="minecraft-hero">
                <AntCarousel autoplay effect="fade" className="hero-carousel" autoplaySpeed={5000}>
                    {carouselItems.map((item, index) => (
                        <div key={index} className="hero-slide">
                            <div className={`hero-background hero-bg-${item.type}`} />
                            <div className="hero-content">
                                <div className="hero-text">
                                    <h1 className="hero-title">{item.title}</h1>
                                    <p className="hero-description">{item.description}</p>
                                    <Button 
                                        type="primary" 
                                        size="large"
                                        className="hero-button"
                                        icon={item.type === "discord" ? <DiscordFilled /> : 
                                              item.type === "server" ? <PlayCircleFilled /> : 
                                              <FireFilled />}
                                        onClick={item.type === "discord" ? handleJoinDiscord : 
                                                item.type === "server" ? handlePlayNow : 
                                                () => navigate('/events')}
                                    >
                                        {item.buttonText}
                                    </Button>
                                </div>
                                {item.type === "discord" && (
                                    <div className="discord-widget">
                                        <iframe
                                            src="https://e.widgetbot.io/channels/1432600202522656831/1433228151202381916?api=12ff209e-1903-410c-8879-8fbd458b21fe"
                                            width="550"
                                            height="500"
                                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                                            className="discord-iframe"
                                        ></iframe>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </AntCarousel>
            </div>

            <div className="px-[10%] py-5">
                {/* Server Info Banner */}
                <Card className="server-info-banner">
                    <Row gutter={[16, 16]} align="middle">
                        <Col xs={24} sm={6}>
                            <div className="server-status">
                                <div className="status-indicator"></div>
                                <div>
                                    <div className="status-text">Trạng thái</div>
                                    <div className="status-value">{serverInfo.status}</div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={6}>
                            <div className="server-info-item">
                                <div className="info-label">Địa chỉ IP</div>
                                <div className="info-value copyable" onClick={handlePlayNow}>
                                    {serverInfo.ip} <span className="copy-hint"><CopyFilled/></span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={6}>
                            <div className="server-info-item">
                                <div className="info-label">Phiên bản</div>
                                <div className="info-value">{serverInfo.version}</div>
                            </div>
                        </Col>
                        <Col xs={24} sm={6}>
                            <div className="server-info-item">
                                <div className="info-label">Người chơi</div>
                                <div className="info-value">{serverInfo.players}</div>
                            </div>
                        </Col>
                    </Row>
                </Card>

                {/* Stats Section */}
                <Row gutter={[24, 24]} className="stats-section">
                    {stats.map((stat, index) => (
                        <Col xs={12} sm={12} md={6} key={index}>
                            <Card className="stat-card" bordered={false}>
                                <Statistic
                                    title={stat.title}
                                    value={stat.value}
                                    prefix={stat.prefix}
                                    suffix={stat.suffix}
                                    valueStyle={{ color: '#ffd700' }}
                                />
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Features Section */}
                <div className="features-section">
                    <div className="section-header">
                        <h2 className="section-title">Điểm Nổi Bật Của TOROMC.VN</h2>
                        <p className="section-subtitle">Khám phá những tính năng đặc biệt chỉ có tại server chúng tôi</p>
                    </div>
                    <Row gutter={[32, 32]} className="features-grid">
                        {features.map((feature, index) => (
                            <Col xs={24} sm={12} md={6} key={index}>
                                <Card className="feature-card" bordered={false}>
                                    <div className="feature-icon-wrapper">
                                        {feature.icon}
                                    </div>
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-description">{feature.description}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* Game Modes Section */}
                <div className="game-modes-section">
                    <div className="section-header">
                        <h2 className="section-title">Chế Độ Chơi</h2>
                        <p className="section-subtitle">Đa dạng thể loại, thỏa sức sáng tạo</p>
                    </div>
                    <Row gutter={[24, 24]}>
                        <Col xs={24} md={8}>
                            <Card className="game-mode-card survival-mode">
                                <div className="game-mode-icon"><HeartOutlined/></div>
                                <h3>Survival</h3>
                                <p>Khám phá, xây dựng và sinh tồn trong thế giới mở rộng với economy phong phú</p>
                            </Card>
                        </Col>
                        <Col xs={24} md={8}>
                            <Card className="game-mode-card creative-mode">
                                <div className="game-mode-icon"><BuildOutlined/></div>
                                <h3>Creative</h3>
                                <p>Thỏa sức sáng tạo với unlimited resources và world edit trong creative world</p>
                            </Card>
                        </Col>
                        <Col xs={24} md={8}>
                            <Card className="game-mode-card minigames-mode">
                                <div className="game-mode-icon"><StarOutlined/></div>
                                <h3>Minigames</h3>
                                <p>Bed Wars, Sky Wars, Spleef và nhiều minigames hấp dẫn khác</p>
                            </Card>
                        </Col>
                    </Row>
                </div>

                {/* CTA Section */}
                <div className="cta-section">
                    <div className="cta-content">
                        <h2 className="cta-title">Sẵn sàng khám phá TOROMC.VN?</h2>
                        <p className="cta-description">
                            Tham gia ngay để trải nghiệm server Minecraft Việt Nam chất lượng nhất!
                        </p>
                        <div className="cta-buttons">
                            <Button 
                                type="primary" 
                                size="large"
                                icon={<PlayCircleFilled />}
                                onClick={handlePlayNow}
                                className="cta-button-primary"
                            >
                                Chơi ngay
                            </Button>
                            <Button 
                                size="large"
                                icon={<DiscordFilled />}
                                onClick={handleJoinDiscord}
                                className="cta-button-secondary"
                            >
                                Tham gia Discord
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;