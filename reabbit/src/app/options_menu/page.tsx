import Link from "next/link";
import './options.css';

export default function OptionsPage() {
    return (
        <div id="optionsPage">
            <div id="titleSection">
                <div id="title">BEEZY</div>
                <img 
                    id="logo" 
                    src="/beelogoBW.png" 
                    alt="Beezy Logo" 
                />
            </div>
            <Link href={'/freelancer_page'} className="bttn">Freelancer</Link>
            <Link href={'/client_page'} className="bttn">Client</Link>
        </div>
    );
}
