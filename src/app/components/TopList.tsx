import {
    useState,
    useEffect,
    Fragment
} from "react";

const TopList = () => {
    const [
        htmlCODE, setHTMLCODE
    ] = useState<string>("");

    useEffect(() => {
        const referrer = encodeURIComponent(document.referrer);
        const title = encodeURIComponent(document.title);
        const url = encodeURIComponent(window.location.href);
        const width = screen.width;
        const height = screen.height;
        const colorDepth = screen.colorDepth;

        setHTMLCODE(`
            <a
            href="https://www.toplist.cz"
            target="_blank"
            id="toplistcz1841616"
            title="TOPlist">
                <img 
                src="https://toplist.cz/count.asp?id=1841616&logo=mc&http=${referrer}&t=${title}&l=${url}&wi=${width}&he=${height}&cd=${colorDepth}" 
                width="88" 
                height="60" 
                border="0" 
                alt="TOPlist" 
                />
            </a>
        `);
    }, []);

    return (
        <Fragment>
            <noscript>
                <a
                href="https://www.toplist.cz"
                id="toplistcz1841616"
                title="TOPlist">
                    <img
                    src="https://toplist.cz/count.asp?id=1841616&njs=1"
                    alt="TOPlist"
                    width="88"
                    height="31"
                    />
                </a>
            </noscript>
            <div dangerouslySetInnerHTML={{
                __html: htmlCODE
            }}></div>
        </Fragment>
    );
};

export default TopList;