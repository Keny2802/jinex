import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

const Wrapper = ({
    className,
    id,
    onClick,
    children
} : {
    className?: string | ReactNode;
    id?: string;
    onClick?: () => void;
    children?: ReactNode
}) => {
    return (
        <Fragment>
            <div
            className={clsx(className, "wrapper-component")}
            id={id}
            onClick={onClick}>
                {children}
            </div>
        </Fragment>
    );
};

export default Wrapper;