import {
    Fragment
} from "react";
import clsx from "clsx";

import Relative from "../components/Relative";
import Img from "../components/Img";
import Absolute from "../components/Absolute";
import Wrapper from "../components/Wrapper";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Cta from "../components/Cta";

type props = {
    className?: string;
    id?: string;
};

const CtaSect = ({
    className,
    id
}: props) => {
    return (
        <Fragment>
            <Relative
            className={clsx(className, "h-screen cta-sect-section-component")}
            id={id}>
                <Img
                fill
                src="/jste-z-karlovych-varu-nebo-okoli.avif"
                alt="Nabídka Jste z Karlových Varů nebo okolí? - Jinex.cz | Jiří Nesměrák"
                className="object-cover"
                />
                <Absolute className="bg-black/40" />
                <Absolute className="text-white">
                    <Flex
                    type="flexCol"
                    className="h-screen justify-center items-center text-center">
                        <Text type="sectionHeading">
                            Jste z Karlových Varů nebo okolí?
                        </Text>
                        <Text>
                            Sháníte naše služby, které pro Vás provádíme primárně v Karlových Varech a okolí, pokud ano neváhejte nás kontaktovat.
                        </Text>
                        <Cta href="#kontakt">
                            Poptat služby
                        </Cta>
                    </Flex>
                </Absolute>
            </Relative>
        </Fragment>
    );
};

export default CtaSect;