import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type gridType =
"oneGridLayout"
| "twoGridLayout"
| "threeGridLayout"
| "fourGridLayout"
| "bentoTwoGridLayout"
| "bentoThreeGridLayout"
| "bentoFourGridLayout";

type props = {
    className?: string;
    id?: string;
    type?: gridType;
    children: ReactNode;
};

const Grid = ({
    className,
    id,
    type = "twoGridLayout",
    children
}: props) => {
    const types = {
        oneGridLayout: "grid grid-cols-1",
        twoGridLayout: "grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-2.5 items-center",
        threeGridLayout: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-2.5 lg:gap-4 items-center",
        fourGridLayout: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-2.5 lg:gap-4 2xl:gap-6 items-center",
        bentoTwoGridLayout: "grid grid-cols-1 md:grid-cols-2 auto-rows-auto",
        bentoThreeGridLayout: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-2 md:gap-2.5 lg:gap-4 items-center",
        bentoFourGridLayout: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 auto-rows-auto gap-2 md:gap-2.5 lg:gap-4 2xl:gap-6 items-center"
    };

    return (
        <Fragment>
            <Wrapper
            className={clsx(className, types[type], "grid-component")}
            id={id}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Grid;