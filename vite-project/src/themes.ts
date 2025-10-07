import Logo from './assets/logo-dark-theme.svg'
import LogoWhite from './assets/logo-light-theme.svg'
import Sun from './assets/icon-sun.svg'
import Moon from './assets/icon-moon.svg'
import Chevron from './assets/chevron-white.svg'
import ChevronBlack from './assets/chevron-black.svg'

export interface Theme {
    overallBg: string,
    LogoSrc: string,
    title: string,
    changeBtn: string,
    changeBg: string,
    mainHeading: string,
    textareaBg: string,
    textareaBorder: string,
    textareaText: string,
    textareaPlaceholder: string,
    checkboxes: string,
    checkboxesBg: string,
    checkboxesHover: string,
    label: string,
    inputBorder: string,
    headingLetter: string,
    densityDescription: string,
    letters: string,
    emptyPercentage: string,
    seeMore: string,
    chevron: string,
}

const themes: Theme[] = [
    {
        overallBg: 'bg-almost-black',
        LogoSrc: Logo,
        title: 'text-light-gray',
        changeBtn: Sun,
        changeBg: 'bg-dark-gray',
        mainHeading: 'text-off-white',
        textareaBg: 'bg-dark-gray',
        textareaBorder: 'border-medium-gray',
        textareaText: 'text-light-gray',
        textareaPlaceholder: 'placeholder:text-light-gray',
        checkboxes: 'border-basic-white',
        checkboxesBg: 'bg-medium-purple',
        checkboxesHover: 'hover:bg-medium-purple',
        label: 'text-light-gray',
        inputBorder: 'border-dark-gray',
        headingLetter: 'text-light-gray',
        densityDescription: 'text-light-gray',
        letters: 'text-light-gray',
        emptyPercentage: 'bg-off-black',
        seeMore: 'text-light-gray',
        chevron: Chevron,
    },
    {
        overallBg: 'bg-basic-white',
        LogoSrc: LogoWhite,
        title: 'text-almost-black',
        changeBtn: Moon,
        changeBg: 'bg-off-white',
        mainHeading: 'text-almost-black',
        textareaBg: 'bg-off-white',
        textareaBorder: 'border-light-gray',
        textareaText: 'text-almost-black',
        textareaPlaceholder: 'placeholder:text-almost-black',
        checkboxes: 'border-almost-black',
        checkboxesBg: 'bg-medium-purple',
        checkboxesHover: 'hover:bg-medium-purple',
        label: 'text-almost-black',
        inputBorder: 'border-almost-black',
        headingLetter: 'text-almost-black',
        densityDescription: 'text-almost-black',
        letters: 'text-almost-black',
        emptyPercentage: 'bg-off-white',
        seeMore: 'text-almost-black',
        chevron: ChevronBlack,
    }
]


export default themes;