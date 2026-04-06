"use client";

import {
    ReactNode,
    Fragment
} from "react";
import {
    usePathname
} from "next/navigation";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Flex from "./Flex";
import Lnk from "./Lnk";
import Text from "./Text";

type props = {
    className?: string;
    id?: string;
    parentFolderPath: string;
    parentFolderName: string;
    pageList: any[];
    children?: ReactNode;
};

const Pathlink = ({
    className,
    id,
    parentFolderPath,
    parentFolderName,
    pageList,
    children
}: props) => {
    const slug = usePathname();
    const serviceSlug = `/${parentFolderPath}/${slug}`;

    // const currentPageIndex = pageList.findIndex((currentPage) => {
    //     return currentPage;
    // });

    // const currentPage = pageList[currentPageIndex];
    // const nextPage = pageList[currentPageIndex + 1];
    
    const currentPage = pageList.find((page) => {
        return page.url === `${slug}`;
    });

    return (
        <Fragment>
            <Wrapper
            className={clsx(className, "mb-2.5 md:mb-3 lg:mb-4 p-2.5 md:p-3 lg:p-4 path-link-component")}
            id={id ? id : "path-link"}>
                <Flex
                type="flexRowOnly"
                className="flex-wrap">
                    <Lnk href="/">
                        <Text>
                            Domov
                        </Text>
                    </Lnk>
                    /
                    <Lnk href={`/${parentFolderPath}`}>
                        <Text>
                            {parentFolderName}
                        </Text>
                    </Lnk>
                    /
                    <Lnk href={currentPage.url}>
                        <Text>
                            {currentPage.heading}
                        </Text>
                    </Lnk>
                </Flex>
            </Wrapper>
        </Fragment>
    );
};

export default Pathlink;