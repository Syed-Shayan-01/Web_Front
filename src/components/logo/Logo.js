
const Logo = ({ isLoginPage }) => {
    const logoStyle = isLoginPage ? "max-sm:w-[110px] sm:w-[120px] md:w-[140px] lg:w-[160px] mx-auto" : "max-sm:w-[110px] sm:w-[120px] md:w-[140px] lg:w-[160px] absolute top-2";

    return (
        <img src="./images/logo.png" className={logoStyle} />
    );
};

export default Logo;
