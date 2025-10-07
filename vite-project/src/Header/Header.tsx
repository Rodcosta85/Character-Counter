import type { Theme } from "../themes";

interface HeaderProps {
    currentTheme: Theme,
    handleChangeTheme: () => void
}

const Header: React.FC<HeaderProps> = ({ currentTheme, handleChangeTheme }) => {

    return (
        <header className='flex justify-between w-full'>
            <div className='flex items-center gap-[0.75rem] w-full'>
                <img
                    src={`${currentTheme.LogoSrc}`}
                    alt="the logo of a company"
                />
            </div>
            <button
                onClick={handleChangeTheme}
                className={`flex items-center justify-center w-[2.75rem] h-[2.75rem] ${currentTheme.changeBg} rounded-eight cursor-pointer`}>
                <img
                    src={`${currentTheme.changeBtn}`}
                    alt=""
                    className='w-[1.375rem] h-[1.375rem]'
                />
            </button>
        </header>
    )
}

export default Header