"use client";

import {
    Fragment
} from "react";
import {
    usePathname,
} from "next/navigation";

import servicePagesSet from "@/app/sets/servicePagesSet";
import Header from "@/app/components/Header";
import Subheader from "@/app/components/Subheader";
import Wrapper from "@/app/components/Wrapper";
import Flex from "@/app/components/Flex";
import Text from "@/app/components/Text";
import Img from "@/app/components/Img";
import CtaSect from "@/app/sections/CtaSect";

const Content = () => {
    const pathName = usePathname();

    const currentPage = servicePagesSet.find((service) => {
        return service.url === pathName;
    });

    return (
        <Fragment>
            <Header />
            <Subheader />
            <Wrapper className="p-6 md:p-8 lg:p-10 border-t border-gray-200 bg-white shadow-lg">
                <Flex
                type="flexCol"
                className="justify-center items-center text-center">
                    <Text type="sectionHeading">
                        {currentPage?.heading}
                    </Text>
                    <Img
                    width={500}
                    height={500}
                    src={currentPage?.src || `${currentPage?.src}`}
                    alt={currentPage?.alt}
                    />
                </Flex>
            </Wrapper>
            <CtaSect />
        </Fragment>
    );
};

export default Content;