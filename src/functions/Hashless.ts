const Hashless = (evt: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    evt.preventDefault();

    const currentTarget = evt.currentTarget;
    const targetID = currentTarget.getAttribute("href")?.substring(1);
    const targetLink = document.getElementById(targetID || "");

    if (targetLink) {
        targetLink.scrollIntoView({
            behavior: "smooth"
        });
    };
};

export default Hashless;