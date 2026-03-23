import {
    Fragment
} from "react";
import {
    PlusIcon
} from "@heroicons/react/24/solid";
import {
    Accordion
} from "@base-ui/react/accordion";
import Link from "next/link";
import clsx from "clsx";

import Wrapper from "../components/Wrapper";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Cta from "../components/Cta";

type props = {
    className?: string;
    id?: string;
};

const Faq = ({
    className,
    id
}: props) => {
    return (
        <Fragment>
            <Wrapper
            className={clsx(className, "p-6 md:p-8 lg:p-10 border-t border-gray-200 bg-white shadow-lg faq-section-component")}
            id={id}>
                <Flex>
                    <Flex
                    type="flexCol"
                    className="w-full md:max-w-3xl">
                        <Text
                        type="sectionHeading"
                        className="text-[#0530a6] uppercase">
                            Časté dotazy
                        </Text>
                        <Text type="boldText">
                            Získejte odpověď na svůj dotaz
                        </Text>
                        <Text>
                            Provádím zámečnické a natěračské práce, výměny vchodových, plastových a hliníkových dveří, rekonstrukce bytových jader, opravy společných prostor, lodžií a vchodů. Zatepluji fasády. Zaměřuji se na mozaiky, keramické obklady, okapové chodníky. Zajišťuji realizace rodinných domů.
                        </Text>
                        <Flex
                        className="items-start md:items-center">
                            <Cta
                            href="#kontakt"
                            className="w-full md:max-w-max">
                                Získat cenovou nabídku
                            </Cta>
                            <Wrapper className="w-full md:w-[1.5px] h-[1px] md:h-[40px] bg-black" />
                            <Link href="tel:+420604779290">
                                +420 604 779 290
                            </Link>
                        </Flex>
                    </Flex>
                    <Flex
                    type="flexCol"
                    className="w-full">
                        {
                            [
                                {
                                    heading: "Jak dlouho trvá rekonstrukce bytu 3+1 kk?",
                                    content: "Rekonstrukce bytové jednotky 3+1 kk, obvykle její realizace trvá 2-3 měsíce."
                                },
                                {
                                    heading: "Bydlím dále od KV, budu platit za dopravu?",
                                    content: "Ano, dopravné máme 1 km za 20 Kč. Protože, si vážíme Vašeho i našeho času."
                                },
                                {
                                    heading: "Mohu si vybrat termín realizace?",
                                    content: "Ano, klient si může určit měsíc realizace projektu. Ale z důvodu ostatních realizací se věnujeme Vašemu projektu průběžně, abychom splnili termín dokončení projektu."
                                },
                                {
                                    heading: "Jakou mám garanci dobrého výsledku?",
                                    content: "Náš tým se skládá ze zkušených řemeslníků, kteří nemají jiné motto než spokojený zákazník = spokojený řemeslník."
                                },
                                {
                                    heading: "Kolik lidí pracuje na projektu?",
                                    content: "Obvykle na realizaci se podílí 3-6 lidí, zaleží hlavně na náročnosti projektu."
                                },
                                {
                                    heading: "Mohu Vás nechat při práci samotné?",
                                    content: "Ano, samozřejmě můžete nás bezstarostně nechat samotné tvořit."
                                },
                            ].map((item, idx) => {
                                const {
                                    heading,
                                    content
                                } = item;

                                return (
                                    <Fragment key={idx}>
                                        <Accordion.Root className="w-full">
                                            <Accordion.Item className="w-full mt-2.5 md:mt-3 lg:mt-4 p-3 md:p-4 lg:p-6 bg-[#0530a6] text-white rounded-md">
                                                <Accordion.Header>
                                                    <Accordion.Trigger className="w-full cursor-pointer">
                                                        <Flex
                                                        type="flexRowOnly"
                                                        className="justify-between">
                                                            <Text>
                                                                {heading}
                                                            </Text>
                                                            <PlusIcon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
                                                        </Flex>
                                                    </Accordion.Trigger>
                                                </Accordion.Header>
                                                <Accordion.Panel className="mt-2.5">
                                                    {content}
                                                </Accordion.Panel>
                                            </Accordion.Item>
                                        </Accordion.Root>
                                    </Fragment>
                                );
                            })
                        }
                    </Flex>
                </Flex>
            </Wrapper>
        </Fragment>
    );
};

export default Faq;