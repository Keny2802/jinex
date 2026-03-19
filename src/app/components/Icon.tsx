import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type sizesType = "sm" | "md" | "lg";

type props = {
    className?: string;
    id?: string;
    size?: sizesType;
    onClick?: () => void;
    children: ReactNode;
};

const Icon = ({
    className,
    id,
    size = "md",
    onClick,
    children
}: props) => {
    const sizes = {
        sm: "w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6",
        md: "w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8",
        lg: "w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
    };

    return (
        <Fragment>
            <Wrapper
            className={clsx(className, sizes[size], "cursor-pointer icon-component")}
            id={id}
            onClick={onClick}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Icon;