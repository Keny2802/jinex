import {
    Fragment
} from "react";
import type {
    Metadata
} from "next";

import Content from "./Content";
import obligatedPageSet from "@/app/sets/obligatedPagesSet";

type Props = {
    params: Promise<{ pathName: string }>;
};

export const generateMetadata = async ({ params } : Props) : Promise<Metadata> => {
    const pathName = ( await params ).pathName;

    const currentMetadata = obligatedPageSet.find((page) => {
        const pagePathName = page.url;

        return pagePathName === `/povinne/${pathName}`;
    });

    return {
        title: currentMetadata?.title,
        description: currentMetadata?.description,
        openGraph: {
            title: currentMetadata?.openGraph?.title,
            description: currentMetadata?.openGraph?.description,
            images: currentMetadata?.openGraph?.images
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