"use client";

import {
    ReactNode,
    Fragment
} from "react";
import {
    motion,
    Variants
} from "motion/react";
import clsx from "clsx";

const variants = {
    initial: {
        y: 25,
        opacity: 0
    },
    whileInView: {
        y: 0,
        opacity: 1
    },
    transition: {
        ease: "ease",
        duration: 1
    }
} as Variants;

const UpAnimation = (
    {
        className,
        id,
        children
    }: {
        className?: string;
        id?: string;
        children: ReactNode;
    }
) => {
    return (
        <Fragment>
            <motion.div
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            transition={{
                // ease: [.23, .83, .81, .18],
                // ease: [.54,-0.48,.96,.49],
                ease: "anticipate",
                duration: 1
            }}
            className={clsx(className, "up-animation-component")}
            id={id}>
                {children}
            </motion.div>
        </Fragment>
    );
};

export default UpAnimation;