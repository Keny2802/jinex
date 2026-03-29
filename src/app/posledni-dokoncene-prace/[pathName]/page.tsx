import {
    Fragment
} from "react";
import type {
    Metadata
} from "next";

import Content from "./Content";
import lastDoneWorkPagesSet from "@/app/sets/lastDoneWorkPagesSet";

type Props = {
    params: Promise<{ pathName: string }>;
};

export const generateMetadata = async ({ params }: Props) : Promise<Metadata> => {
    const pathName = ( await params ).pathName;
    
    const currentMetadata = lastDoneWorkPagesSet.find((service) => {
        const servicePathName = service.url;

        return servicePathName === `/posledni-dokoncene-prace/${pathName}`;
    });

    return {
        metadataBase: "https://jinex.cz/posledni-dokoncene-prace/",
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