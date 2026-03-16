import {
    Fragment
} from "react";
import Image from "next/image";
import clsx from "clsx";

type FillType = {
    fill?: boolean;
};

type Props = {
    width?: number;
    height?: number;
    src: string;
    alt?: string;
    type?: "standard" | "instantImage" | "hero";
    className?: string;
} & FillType;

const Img = (props: Props) => {
    return (
        <Fragment>
            <Image
                {
                    ...(
                        props.fill ? ({
                            fill: true
                        }) : ({
                            width: props.width,
                            height: props.height
                        })
                    )
                }
                {
                    ...(
                        props.type === "hero" || "instantImage" ? ({
                            priority: true
                        }) : ({
                            priority: false
                        })
                    )
                }
                src={props.src}
                alt={props.alt || ""}
                className={clsx(props.className, "img-component")}
            />
        </Fragment>
    );
};

export default Img;