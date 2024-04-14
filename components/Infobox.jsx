import Link from "next/link"

const Infobox = ({
    heading,
    backgroundColor = 'bg-gray-200',
    buttonInfo,
    children
}) => {
  return (
    <div className={`${backgroundColor} flex flex-col p-6 rounded-lg shadow-md w-3/12`}>
        <h1 className={`text-gray-800 text-xl font-bold pb-2`}>{heading}</h1>
        <p className="pb-4 font-light text-gray-700">{children}</p>
        <Link href={ buttonInfo.link } className={`${buttonInfo.bgcolor} text-white opacity-80 w-fit p-3 rounded-md hover:opacity-100 z-0`}>{buttonInfo.buttonName}</Link>
    </div>
  )
}

export default Infobox