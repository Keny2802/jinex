// "use client";

// import {
//     usePathname
// } from "next/navigation";

const HashLess = (evt: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    evt.preventDefault();

    // const pathName = usePathname();

    const currentTarget = evt.currentTarget;
    const targetElement = currentTarget.getAttribute("href")?.substring(1);
    const targetLink = document.getElementById(targetElement || "");

    if (targetLink) {
        targetLink.scrollIntoView({
            behavior: "smooth"
        });
    };
};

export default HashLess;