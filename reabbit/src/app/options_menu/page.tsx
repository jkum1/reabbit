import Link from "next/link"
import './options.css'

export default function OptionsPage() {
    return (
        <div id="optionsPage">
            <Link href={'/freelancer_page'} className="bttn">Freelancer</Link>
            <Link href={'/client_page'} className="bttn">Client</Link>
        </div>
    )
}