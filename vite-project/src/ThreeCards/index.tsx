// imagens interior dos cards 
import Shape1 from '../assets/Shape-01.svg'
import Shape2 from '../assets/Shape-02.svg'
import Shape3 from '../assets/Shape-03.svg'

// tipificação do que foi recebido pelo componente
interface CardProps {
  charsWithoutSpaces: number,
  wordCount: number,
  sentencesCount: number
}

const ThreeCards: React.FC<CardProps> = ({ charsWithoutSpaces, wordCount, sentencesCount }) => {


  return (
    <div className='flex flex-row justify-between items-center gap-[1rem]
    tablet:flex-row
    mobile:flex-col
    '>

      <div className=' flex w-[19.95rem] h-[9.375rem] p-[1rem] bg-light-purple rounded-twelve overflow-hidden relative
      tablet:w-full
      mobile:w-full
      '>
        <div className='w-full flex flex-col gap-[0.5rem] relative z-10'>
          <h1 className='text-preset-1 text-almost-black font-bold h-[4rem]'>{charsWithoutSpaces}</h1>
          <p className='text-preset-3 text-almost-black w-full'>Total Characters</p>
        </div>
        <img
          src={Shape1}
          alt=""
          className='w-[9.375rem] h-[9.375rem] absolute top-0 right-[-1.8rem] mobile:right-[-4rem] z-0'
        />
      </div>

      <div className='flex w-[19.95rem] h-[9.375rem] p-[1rem] bg-strong-orange rounded-twelve overflow-hidden relative
      tablet:w-full
      mobile:w-full
      '>
        <div className='w-full flex flex-col gap-[0.5rem] relative z-10'>
          <h1 className='text-preset-1 text-almost-black font-bold h-[4rem]'>{wordCount}</h1>
          <p className='text-preset-3 text-almost-black w-full'>Word Count</p>
        </div>
        <img
          src={Shape2}
          alt=""
          className='w-[9.375rem] h-[9.375rem] absolute top-0 right-[-1.8rem] mobile:right-[-4rem] z-0'
        />
      </div>

      <div className='flex w-[19.95rem] h-[9.375rem] p-[1rem] bg-light-red rounded-twelve overflow-hidden relative
      tablet:w-full
      mobile:w-full
      '>
        <div className='w-full flex flex-col gap-[0.5rem] relative z-10'>
          <h1 className='text-preset-1 text-almost-black font-bold h-[4rem]'>{sentencesCount}</h1>
          <p className='text-preset-3 text-almost-black w-full'>Sentence Count</p>
        </div>
        <img
          src={Shape3}
          alt=""
          className='w-[9.375rem] h-[9.375rem] absolute top-0 right-[-1.8rem] mobile:right-[-4rem] z-0'
        />
      </div>
    </div>
  )
}

export default ThreeCards