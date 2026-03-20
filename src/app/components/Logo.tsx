"use client";

import {
    usePathname
} from "next/navigation";
import {
    Fragment
} from "react";
import Link from "next/link";
import clsx from "clsx";

import Img from "./Img";

type FillType = {
    fill?: boolean;
};

type props = {
    width?: number;
    height?: number;
    type?: "standard" | "instantImage" | "hero";
    className?: string;
} & FillType;

const Logo = ({
    width = 200,
    height = 200,
    type,
    fill,
    className
} : props) => {
    const pathName = usePathname();
    const isHome = pathName === "/" ? "" : "/";

    return (
        <Fragment>
            <Link href={isHome}>
                <Img
                {
                    ...(
                        fill ? ({
                            fill: true
                        }) : ({
                            width: width,
                            height: height
                        })
                    )
                }
                src="/logo.avif"
                alt="Jinex.cz | Jiří Nesměrák logo"
                type={type}
                className={clsx(className, "logo-component")}
                />
            </Link>
        </Fragment>
    );
};

export default Logo;