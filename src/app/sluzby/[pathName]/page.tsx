import {
    Fragment
} from "react";
import type {
    Metadata
} from "next";

import Content from "./Content";
import servicePagesSet from "@/app/sets/servicePagesSet";

// type Props = {
//     params: Promise<{ pathName: string }>;
// };

type props = {
    params: Promise<{ pathName: string }>;
};

// export const generateMetadata = async (
//     { params }: Props
// ) : Promise<Metadata> => {
//     const pathName = (await params).pathName;

//     const currentMetadata = servicePagesSet.find((service) => {
//         const serviceSlug = service.url;
//         return serviceSlug === `/sluzby/${pathName}`;
//     });

//     return {
//         metadataBase: "https://jinex.cz/sluzby/",
//         title: currentMetadata?.title,
//         description: currentMetadata?.description,
//         keywords: currentMetadata?.keywords,
//         openGraph: {
//             title: currentMetadata?.openGraph?.title,
//             description: currentMetadata?.openGraph?.description,
//             images: currentMetadata?.openGraph?.images
//         }
//     };
// };

export const generateMetadata = async ({ params }: props) : Promise<Metadata> => {
    const pathName = ( await params ).pathName;

    const currentMetadata = servicePagesSet.find((service) => {
        const servicePathName = service.url;
        return servicePathName === `/sluzby/${pathName}`;
    });

    return {
        metadataBase: "https://jinex.cz/sluzby/",
        title: currentMetadata?.title,
        description: currentMetadata?.description,
        keywords: currentMetadata?.keywords,
        openGraph: {
            title: currentMetadata?.openGraph?.title,
            description: currentMetadata?.openGraph?.description,
            images: currentMetadata?.openGraph?.images
        },
        robots: {
            index: true,
            follow: true
        }
    };
};

const Page = () => {
    return (
        <Fragment>
            <Content />
        </Fragment>
    );
};

export default Page;