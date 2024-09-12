import Link from 'next/link';

export default function TopNav() {
return (
    <nav className="nav shadow p-2 mb-3 justify-content-between">
    <Link href="/" className="nav-link ">
        🛒NextEcom
    </Link>

    <div >
        <Link href="/login" className="nav-link">
        Login
        </Link>

        <Link href="/register" className="nav-link">
        Register
        </Link>
    </div>
    </nav>
);
}