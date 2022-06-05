import Image from 'next/image'

const Prenavbar = () => {
  return (
    <nav>
        <div className="flex flex-row justify-center">
            <ul className="flex flex-row">
                <li className='ml-5 mr-1 mt-0.5'><Image src="/phone-solid.svg" width="15" height="15" /></li>
                <li className='mr-5'>
                    <a href="tel:+91-9818138838" className='underline'>+91-9818138838</a> / 
                    <a href="tel:+91-9560008730" className='underline'>+91-9560008730</a>
                </li>
                <li className='ml-5 mr-1 mt-0.5'><Image src="/envelope-solid.svg" width="15" height="15" /></li>
                <li className='mr-5'>
                    <a href="mailto:infosqmc@gmail.com" className='underline'>infosqmc@gmail.com</a> / 
                    <a href="mailto:bdalui@gmail.com" className='underline'>bdalui@gmail.com</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Prenavbar