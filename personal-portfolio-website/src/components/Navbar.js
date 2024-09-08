import Link from 'next/link';

export default function NavBar(){
    return(
        <nav className="p-4 bg-gray-800">
            <ul className="flex justify-center space-x-4">
                <li>
                    <Link href="/" className="text-white hover:text-gray-400">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/quiz" className="text-white hover:text-gray-400">
                        Art Quiz
                    </Link>
                </li>
            </ul>
        </nav>
    );
}