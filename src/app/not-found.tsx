import {
    Fragment
} from "react";

import Wrapper from "./components/Wrapper";
import Relative from "./components/Relative";
import Img from "./components/Img";
import Absolute from "./components/Absolute";
import Flex from "./components/Flex";
import Text from "./components/Text";
import Cta from "./components/Cta";

const NotFound = () => {
    return (
        <Fragment>
            <Relative className="h-screen p-2.5 md:p-3 lg:p-4">
                <Img
                fill
                src="/sluzby/vykopove-prace/vykopove-prace.avif"
                alt="Vámi hledaná adresa, byla bohužel nenalezena."
                className="h-full object-cover"
                />
                <Absolute className="bg-black/60" />
                <Absolute>
                    <Flex
                    type="flexCol"
                    className="h-full justify-center items-center text-center text-white">
                        <Text
                        type="boldText"
                        className="p-2.5 md:p-3 lg:p-4 bg-[#0D1194] rounded-full">
                            404
                        </Text>
                        <Text type="heroHeading">
                            Vámi hledaná adresa, byla bohužel nenalezena.
                        </Text>
                        <Text className="max-w-[600px]">
                            Nenašli jsme adresu, kterou hledáte. Doporučujeme Vám se vrátit na domovskou stránku.
                        </Text>
                        <Cta href="/">
                            Vrátit se domů
                        </Cta>
                    </Flex>
                </Absolute>
            </Relative>
        </Fragment>
    );
};

export default NotFound;