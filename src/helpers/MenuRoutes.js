import { CodeFilled, HomeOutlined, LockFilled } from "@ant-design/icons";

export const NavRoutes = [
    {
        id: 0,
        name: "Home",
        icon: <HomeOutlined />,
        path: "/"
    },
    {
        id: 1,
        name: "IT",
        icon: <CodeFilled />,
        path: "/it"
    },
    {
        id: 2,
        name: "Security",
        icon: <LockFilled />,
        path: "/security"
    }
]