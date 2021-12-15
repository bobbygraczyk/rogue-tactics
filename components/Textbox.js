import Image from 'next/image'

export default function Textbox({ children }) {
    return (
        <div className="border textbox">
            {children}
        </div>
    )
}