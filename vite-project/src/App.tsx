import { useState, useEffect } from 'react'

// tema escuro e claro
import themes from './themes';

// componentes
import Header from './Header/Header';
import Inputs from './Inputs';
import ThreeCards from './ThreeCards'
import LetterDensity from './LetterDensity';

// interface dos botões pseudo-checkboxes
interface ButtonProps {
  id: string,
  label: string
}

function App() {

  // estado da textarea
  const [textarea, setTextarea] = useState<string>('');

  // estado do número de caracteres
  const [charCount, setCharCount] = useState<number>(0);

  // estado do botão de cortar os espaços
  const [trimmed, setTrimmed] = useState<boolean>(false);

  // estado dos botões que são pseudo-checkboxes
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  // estado que guarda os temas escuro e claro
  const [currentTheme, setCurrentTheme] = useState<typeof themes[0]>(themes[0]);

  // estado que seta o botão e - consequentemente - muda os temas
  const [themeBtn, setThemeBtn] = useState<boolean>(false);

  // função que calcula a quantidade de caracteres na string do textarea
  const handleCharCount = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextarea(value);
    setCharCount(value.length);
  }

  // função que gatilha o botão de cortar os espaços da string do textarea
  const trimChars = () => {
    setTrimmed(prevState => !prevState);
  }

  // array dos botões pseudo-checkboxes
  const buttonArr: ButtonProps[] = [
    { id: 'exclude spaces', label: 'Exclude spaces' },
    { id: 'character limit', label: 'Character limit' }
  ]

  // função para mudar os estados dos botões de acordo com a id deles estabelecida dentro do array anterior
  const handleChecked = (id: string) => {
    setChecked((prev) => ({
      ...prev,
      [id]: !prev[id], // toggle this specific button
    }));
  };

  // variavel que guarda uma condicional
  // condicional determina que se trimmed for verdadeiro, checamos se existem espaços e retiramos eles, assim dando a contagem sem espaços. 
  // caso contrário, mantemos a contagem de caracteres de forma normal.
  const charsWithoutSpaces = trimmed ? charCount - (textarea.match(/\s/g)?.length || 0) : charCount

  // pega a variavel do estado de textarea e retira os espaços, assim definindo a existência de múltiplas strings, ou seja, palavras. Depois disso, contamos elas.
  const wordCount = textarea.trim() === "" ? 0 : textarea.trim().split(/\s+/).length;

  // cortamos novamente textarea com o método trim, porém somente após uma combinação de ponto e espaço, assim definindo novamente múltiplas strings, porém agora no formato de frases. 
  const sentencesCount = textarea.trim() === "" ? 0 : textarea.trim().split(/[.!?]+[\s\n]*/).filter(Boolean).length;


  const handleChangeTheme = () => {
    localStorage.setItem("app-theme", !themeBtn ? "dark" : "light");
    setThemeBtn(prevState => !prevState);
  }

  useEffect(() => {
    setCurrentTheme(themeBtn ? themes[0] : themes[1]);
  }, [themeBtn])

  useEffect(() => {
    const appTheme = localStorage.getItem("app-theme");
    setThemeBtn(appTheme === "dark");
  }, []);


  return (
    <div className={`${currentTheme.overallBg} flex justify-center w-full min-h-[100vh] font-dm-sans pt-[2rem] pb-[2rem]
    tablet:pl-[2rem] tablet:pr-[2rem]
    mobile:pl-[1rem] mobile:pr-[1rem]
     `}>

      {/* container do conteudo em geral */}
      <div className='flex flex-col justify-between min-h-[799px] 
      desktop:w-[990px] desktop:gap-[3rem]
      tablet:w-[100%] tablet:gap-[2.5rem] 
      mobile:w-[100%] mobile:gap-[2.5rem]
      '>
        <Header
          currentTheme={currentTheme}
          handleChangeTheme={handleChangeTheme}
        />
        <h1 className={`desktop:text-preset-1 mobile:text-[2.5rem] font-dm-sans ${currentTheme.mainHeading} font-bold text-center desktop:leading-[4rem] mobile:leading-[2.5rem] tracking-preset-1`}>
          Analyze your text <br /> in real-time.
        </h1>
        <Inputs
          textarea={textarea}
          charsWithoutSpaces={charsWithoutSpaces}   
          handleCharCount={handleCharCount}
          trimChars={trimChars}
          checked={checked}
          buttonArr={buttonArr}
          handleChecked={handleChecked}
          wordCount={wordCount}
          currentTheme={currentTheme}
        />
        <ThreeCards
          charsWithoutSpaces={charsWithoutSpaces}
          wordCount={wordCount}
          sentencesCount={sentencesCount}
        />
        <LetterDensity
          textarea={textarea}
          charCount={charCount}
          charsWithoutSpaces={charsWithoutSpaces}
          currentTheme={currentTheme}
        />
      </div>
      {/* container do conteudo em geral */}

    </div>
  )
}

export default App
