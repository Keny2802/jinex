import {
    Fragment
} from "react";
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
    return (
        <Fragment>
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
        </Fragment>
    );
};

export default Logo;