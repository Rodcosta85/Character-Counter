import React from 'react'

import Check from '../../assets/check-black.svg';
import type { Theme } from '../../themes';

interface ButtonProps {
    id: string,
    label: string
}

interface SomeProps {
    buttonArr: ButtonProps[];
    handleChecked: (id: string) => void,
    checked: Record<string, boolean>
    currentTheme: Partial<Theme>
}

const ChraracterLimit:React.FC<SomeProps> = ({ buttonArr, handleChecked, checked, currentTheme }) => {
    return (
        <div className="flex items-center gap-[0.62rem]">
            <button
                type="button"
                name=""
                id={buttonArr[1].id}
                onClick={() => handleChecked(buttonArr[1].id)}
                className={
                    `${checked[buttonArr[1].id] ? 'bg-medium-purple' : currentTheme.overallBg} ${currentTheme.checkboxes} ${currentTheme.checkboxesHover}
                    flex items-center justify-center w-[1rem] h-[1rem] border-[1px] rounded-four cursor-pointer group`
                }>
                <img
                    src={Check}
                    alt=""
                    className={`${checked[buttonArr[1].id] ? 'block' : 'hidden'} group-hover:block`}
                />
            </button>
            <p className={`${currentTheme.label}`}>
                Set Character Limit
            </p>
        </div>
    )
}

export default ChraracterLimit