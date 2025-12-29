interface TrendingNowType{
    title:string;
    link:string;
    postId:number;
}

const trendingNowData : TrendingNowType[] = [
    {
        title: "React 18 Concurrency: What Changed",
        link: "/posts/react-18-concurrency",
        postId: 101,
    },
    {
        title: "A Deep Dive into Vite and HMR",
        link: "/posts/vite-hmr",
        postId: 102,
    },
    {
        title: "TypeScript Tips for React Developers",
        link: "/posts/ts-react-tips",
        postId: 103,
    },
    {
        title: "Building Accessible Components",
        link: "/posts/accessible-components",
        postId: 104,
    },
    {
        title: "Styling with Tailwind v4 — New Features",
        link: "/posts/tailwind4-features",
        postId: 105,
    },
    {
        title: "State Management Patterns in 2025",
        link: "/posts/state-patterns-2025",
        postId: 106,
    },
    {
        title: "Optimizing Images for Web Performance",
        link: "/posts/image-optimization",
        postId: 107,
    },
    {
        title: "Design Tokens and Theming (Practical Guide)",
        link: "/posts/design-tokens-theming",
        postId: 108,
    }
];

export default trendingNowData;