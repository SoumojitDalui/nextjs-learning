import { motion } from "framer-motion"

const Whyhome = () => {
    const parent = {
        visible: {
            scale: 1,
            opacity: 1
        },
        hidden: {
            scale: 0.9,
            opacity: 0
        }
    }

    const child_title = {
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        },
        hidden: {
            scale: 0.9,
            opacity: 0,
            when: "afterChildren"
        }
    }

    const child_card = {
        visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9
            }
        },
        hidden: {
            scale: 0.9,
            opacity: 0,
            y: -50
        }
    }

    const down = {
        visible: {
            y: [0, 5, 0],
            opacity: 1,
            transition: {
                delay: 2,
                type: "spring",
                y: [0, 0, 0]
            }
        },
        hidden: {
            y: 0,
            opacity: 0
        }
    }

    return (
        <section className="text-gray-600 body-font" id="second-section">
            <motion.div className="container px-5 pt-32 mx-auto" initial="hidden" whileInView="visible" variants={parent} viewport={{ once: true }}>
                <motion.div className="text-center mb-14" variants={child_title}>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-10">WHY SQMC?</h1>
                    {/* <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Below are the services provided by us:</p> */}
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </motion.div>
                <motion.div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6" variants={child_title}>
                    <motion.div className="p-4 md:w-1/3 flex flex-col text-center items-center" variants={child_card}>
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-100 text-indigo-500 mb-5 flex-shrink-0">
                            <img src="/file-solid.svg" width="30" height="30" />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Standard Documentation</h2>
                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div className="p-4 md:w-1/3 flex flex-col text-center items-center" variants={child_card}>
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-100 text-indigo-500 mb-5 flex-shrink-0">
                            <img src="/pen-solid.svg" width="35" height="35" />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">System Implementation</h2>
                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div className="p-4 md:w-1/3 flex flex-col text-center items-center" variants={child_card}>
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-100 text-indigo-500 mb-5 flex-shrink-0">
                            <img src="/chalkboard-user-solid.svg" width="40" height="40" />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Training</h2>
                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer" >Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div className="p-4 md:w-1/3 flex flex-col text-center items-center" variants={child_card}>
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-100 text-indigo-500 mb-5 flex-shrink-0">
                            <img src="/list-check-solid.svg" width="40" height="40" />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Customer Checklist Implementation</h2>
                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div className="p-4 md:w-1/3 flex flex-col text-center items-center" variants={child_card}>
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-100 text-indigo-500 mb-5 flex-shrink-0">
                            <img src="/flask-solid.svg" width="35" height="35" />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Testing & Calibration</h2>
                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div className="p-4 md:w-1/3 flex flex-col text-center items-center" variants={child_card}>
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-slate-100 text-indigo-500 mb-5 flex-shrink-0">
                            <img src="/user-tie-solid.svg" width="35" height="35" />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Placement Service</h2>
                            <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                            <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div className="flex justify-center mt-16 py-2 px-8" variants={child_title}>
                    <a href="#third-section"><motion.img src="/angle-down-solid.svg" width="15" height="15" className='cursor-pointer' variants={down} initial="hidden" animate="visible" /></a>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Whyhome