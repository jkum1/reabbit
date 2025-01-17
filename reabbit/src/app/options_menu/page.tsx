import Link from "next/link"

export default function OptionsPage() {
    return (
        <div>
            Made it here<br/>
            <Link href={'/freelancer_page'}>Freelancer</Link><br />
            <Link href={'/client_page'}>Client</Link>
        </div>
    )
}