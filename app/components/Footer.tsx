const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div className="p-1 w-full flex justify-center items-center bg-blue-700 bg-opacity-10">
            <h1 >Copyright &copy;{" "}{currentYear} {" "} Cesar Tovar.</h1>
        </div>
    );
}

export default Footer;

