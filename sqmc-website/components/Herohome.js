import { motion } from "framer-motion"

const Herohome = () => {
    const parent = {
        visible: { 
          scale: 1,
          opacity: 1,
          transition: { 
            duration: 0.9 
          }
        },
        hidden: {
          scale: 0.9,
          opacity: 0
        }
    }

    const down = {
        visible: {
          y: [0,-5,0],
          transition: {
            delay: 5,
            type: "spring",
            repeat: Infinity
          }
        }
    }

    return (
        <section id="first-section">
            <div className="bg-[url('/bgimg-home.jpg')] bg-cover container mx-auto flex px-10 items-center justify-center flex-col h-screen">
                <motion.div className="rounded-lg bg-gradient-to-b from-slate-800 via-slate-600 to-transparent text-center lg:w-2/6 md:w-3/6 w-5/6" initial="hidden" animate="visible" variants={parent}>
                    <h1 className="title-font sm:text-4xl text-2xl m-4 font-medium text-slate-50">Welcome to SQMC India!</h1>
                    <p className="mb-8 leading-relaxed sm:text-lg text-sm">One-Stop solution for all your Standard needs</p>
                    <div className="flex justify-center">
                        <a href="#second-section"><motion.img src="/angle-down-solid.svg" width="15" height="15" className='cursor-pointer' variants={down} whileInView="visible" /></a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Herohome