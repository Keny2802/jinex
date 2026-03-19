import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

const Wrapper = ({
    className,
    id,
    children
} : {
    className?: string | ReactNode;
    id?: string;
    children?: ReactNode
}) => {
    return (
        <Fragment>
            <div
            className={clsx(className, "wrapper-component")}
            id={id}>
                {children}
            </div>
        </Fragment>
    );
};

export default Wrapper;