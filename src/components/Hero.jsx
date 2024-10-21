import { motion } from 'framer-motion'
import { styles } from '../styles'
import Chat from './Chat' // Import the Chat component

const Hero = () => {
  return (
    <section
      className={`relative w-full h-screen mx-auto bg-gradient-to-b from-gray-800 to-black`}
    >
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-gray-500' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-gray-500 to-gray-700' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-gray-300'>Otso</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-gray-300`}>
            I specialize in
            <span className='text-gray-300'> Software engineering</span>
            <br />
            <span className='text-gray-300'> Machine learning</span> and
            <span className='text-gray-400'> LLM Solutions</span>
          </p>
        </div>

        <div className='bg-gray-950 w-full h-full rounded-md shadow-lg flex items-end'>
          <Chat />
        </div>
      </div>
    </section>
  )
}

export default Hero
