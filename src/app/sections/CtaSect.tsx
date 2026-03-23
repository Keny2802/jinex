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
            <Wrapper className="p-6 md:p-8 lg:p-10 bg-white shadown-lg">
                <Relative
                className={clsx(className, "min-h-[400px] md:min-h-screen cta-sect-section-component")}
                id={id}>
                    <Img
                    fill
                    src="/jste-z-karlovych-varu-nebo-okoli.avif"
                    alt="Nabídka Jste z Karlových Varů nebo okolí? - Jinex.cz | Jiří Nesměrák"
                    className="max-h-[350px] md:min-h-full rounded-3xl object-cover"
                    />
                    <Absolute className="max-h-[350px] md:min-h-full rounded-3xl bg-black/40" />
                    <Absolute className="text-white">
                        <Flex
                        type="flexCol"
                        className="p-2.5 md:p-3 lg:p-4 h-full justify-center items-center text-center">
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
            </Wrapper>
        </Fragment>
    );
};

export default CtaSect;