import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

const Wrapper = ({
    className,
    children
} : {
    className?: string;
    children?: ReactNode
}) => {
    return (
        <Fragment>
            <div className={clsx(className, "wrapper-component")}>
                {children}
            </div>
        </Fragment>
    );
};

export default Wrapper;