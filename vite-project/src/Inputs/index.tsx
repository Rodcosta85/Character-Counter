import { useState } from "react";

// imagem
import Exclamation from '../assets/info-circle.png';

// componentes filhos
import ExcludeSpaces from "./ExcludeSpaces";
import ChraracterLimit from "./CharacterLimit";

import type { Theme } from "../themes";

// props do array do buttonArr
interface ButtonProps {
    id: string,
    label: string
}

// props que utilizei nesse componente e nos componentes filhos
interface TextareaProps {
    textarea: string,
    charsWithoutSpaces: number,
    handleCharCount: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    trimChars: () => void,
    checked: Record<string, boolean>
    buttonArr: ButtonProps[];
    handleChecked: (id: string) => void,
    wordCount: number,
    currentTheme: Theme;
}

const Inputs: React.FC<TextareaProps> = ({ textarea, charsWithoutSpaces, handleCharCount, trimChars, checked, buttonArr, handleChecked, wordCount, currentTheme }) => {

    // estado para o limite de palavras iniciado em 300 como estabelecido pelo figma do projeto
    const [limit, setLimit] = useState<string>('300');
    const handleCharLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLimit(e.target.value);
    }
    const limitNum = Number(limit);
    const comparisonLimit = charsWithoutSpaces > limitNum;

    // função que une a função de marcar a "checkbox" com a de cortar os espaços da textarea/string
    const handleClick = () => {
        handleChecked(buttonArr[0].id);
        trimChars();
    }

    // divide por 225 (média de palavras lidas por minutos; entre 200 e 250, 225 fica no meio) e fixa os decimas em somente duas casas após isso
    const readingTime = (wordCount / 225).toFixed(2);

    // variável com let para podermos alterar
    // readingTime - que era uma string - é passado para número agora
    let readingTimeNum = Number(readingTime);

    // variável que vamos utilizar para o texto, passando de minutos para segundos dependendo do número obtido
    let timeVal = 'minutes'

    // condicional para mudar de minutos para segundos tanto no valor do tempo como o texto da unidade temporal
    if (readingTimeNum < 1) {
        timeVal = 'seconds'
        readingTimeNum = Math.round(readingTimeNum * 60);
    } 


    const inputNumberStyles = `${currentTheme.label} w-[3.6rem] h-[1.8125rem] pl-[0.75rem] pr-[0.75rem] pt-[0.25rem] pb-[0.25rem] rounded-six border-[1px] ${currentTheme.inputBorder} focus:outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [-moz-appearance:textfield]`
    const textareaStyles = `w-[61.875rem] h-[12.5rem] border-[2px] p-[1.25rem] ${currentTheme.textareaBg} ${currentTheme.textareaBorder} hover:${currentTheme.textareaBg} rounded-twelve ${currentTheme.textareaText} ${currentTheme.textareaPlaceholder} focus:shadow-[0_0_10px_0_var(--light-purple)]'
`

    return (
        <div className='flex flex-col gap-[1rem]'>
            <div className='flex flex-col gap-[0.75rem]'>
                <textarea
                    value={textarea}
                    onChange={handleCharCount}
                    placeholder="Start typing here… (or paste your text)"
                    className={`${textareaStyles} ${comparisonLimit ? 'outline-light-red' : 'focus:outline-medium-purple'}`}
                />
                <div className={`${comparisonLimit ? 'flex' : 'hidden'} items-center gap-[0.5rem]`}>
                    <img src={Exclamation} alt="" />
                    <p className="text-preset-4 text-light-red">Limit reached! Your text exceeds {limitNum} characters.</p>
                </div>
            </div>
            <div className='flex justify-between items-center h-[1.8125rem]'>
                <div className='flex gap-[1.5rem]'>
                    {/* primeira checkbox - a que corta os espaços */}
                    <ExcludeSpaces
                        buttonArr={buttonArr}
                        handleClick={handleClick}
                        checked={checked}
                        currentTheme={currentTheme}
                    />
                    <div className='flex gap-[0.62rem]'>
                        {/* a segunda checkbox aciona um input com a quantidade de caracters desejada pelo usuario */}
                        <ChraracterLimit
                            buttonArr={buttonArr}
                            handleChecked={handleChecked}
                            checked={checked}
                            currentTheme={currentTheme}
                        />
                        <input
                            type="text"
                            onChange={handleCharLimit}
                            value={limit}
                            className={`${inputNumberStyles} ${checked[buttonArr[1].id] ? 'block' : 'hidden'}`}
                        />
                    </div>
                </div>
                {/* aqui é utilizado nossas variáveis feitas com let para mudar de forma condicional */}
                <p className={`text-preset-4 ${currentTheme.textareaText}`}>Approx. reading time: {readingTimeNum} {timeVal}</p>
            </div>
        </div>
    )
}

export default Inputs;