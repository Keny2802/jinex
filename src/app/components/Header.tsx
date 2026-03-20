"use client";

import {
    ReactNode,
    useState,
    useEffect,
    Fragment,
} from "react";
import {
    PhoneIcon,
    Bars3Icon,
    MinusIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";
import clsx from "clsx";

import Logo from "./Logo";
import Wrapper from "./Wrapper";
import Flex from "./Flex";
import Icon from "./Icon";
import MobileMenu from "./MobileMenu";

type props = {
    className?: string;
    children?: ReactNode;
};

const Header = (props: props) => {
    const [isMobileMenuDisplayed, setMobileMenuDiplay] = useState<boolean>(false);
    const [isHeaderScrolling, scrollFromToHeader] = useState<boolean>(false);

    useEffect(() => {
        const scrolling = () => {
            if (window.scrollY > 0) {
                scrollFromToHeader(true);
            } else {
                scrollFromToHeader(false);
            };
        };

        window.addEventListener("scroll", scrolling);

        return () => {
            window.removeEventListener("scroll", scrolling);
        };
    }, [isHeaderScrolling]);

    return (
        <Fragment>
            <Wrapper className={clsx(props.className, isHeaderScrolling ? "fixed" : "static", `w-full p-2.5 md:p-3 lg:p-4 z-50 bg-white text-black shadow-lg upper-header-component`)}>
                <Flex
                type="flexRowOnly"
                className="justify-between">
                    <Logo type="instantImage" />
                    <Link
                    href="tel:+420604779290"
                    className="hidden md:inline-block">
                        <Flex type="flexRowOnly">
                            <PhoneIcon className="w-8 h-8 text-[#02204f]" />
                            +420 604 779 290
                        </Flex>
                    </Link>
                    {
                        isMobileMenuDisplayed ? (
                            <Icon
                            onClick={() => setMobileMenuDiplay(false)}
                            className="md:hidden">
                                <MinusIcon />
                            </Icon>
                        ) : (
                            <Icon onClick={() => setMobileMenuDiplay(true)}
                            className="md:hidden">
                                <Bars3Icon />
                            </Icon>
                        )
                    }
                </Flex>
            </Wrapper>
            <MobileMenu
            isMobileMenuDisplayed={isMobileMenuDisplayed}
            setMobileMenuDiplay={setMobileMenuDiplay}
            />
        </Fragment>
    );
};

export default Header;