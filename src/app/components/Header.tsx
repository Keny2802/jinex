import {
    ReactNode,
    Fragment
} from "react";
import {
    PhoneIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";
import clsx from "clsx";

import Logo from "./Logo";
import Wrapper from "./Wrapper";
import Flex from "./Flex";

type props = {
    className?: string;
    children?: ReactNode;
};

const Header = (props: props) => {
    return (
        <Fragment>
            <Wrapper className={clsx(props.className, "p-2.5 md:p-3 lg:p-4 bg-white text-black shadow-lg upper-header-component")}>
                <Flex
                type="flexRowOnly"
                className="justify-between">
                    <Logo type="instantImage" />
                    <Link
                    href="tel:+420604779290">
                        <Flex type="flexRowOnly">
                            <PhoneIcon className="w-8 h-8 text-[#00A335]" />
                            +420 604 779 290
                        </Flex>
                    </Link>
                </Flex>
            </Wrapper>
        </Fragment>
    );
};

export default Header;