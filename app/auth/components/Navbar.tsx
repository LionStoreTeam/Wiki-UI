import Image from "next/image";

const Navbar = () => {
    return (
        <div className="h-[4rem] flex justify-center items-center bg-white md:pl-5 md:justify-start md:items-center md:bg-transparent">
            <Image src="/base_logo/wiki_ui_logo.svg" alt="" width={70} height={70} />
        </div>
    );
}

export default Navbar;