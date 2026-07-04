import Link from "next/link";

export default function CommunityPage() {
    return (
        <div>
            <h1>Community Page</h1>
            <p>Welcome to the community page! Here you can connect with other members and share your experiences.</p>
            <p><Link href="/community/join">Join the Community</Link></p>
            <p><Link href="/">Back to Home</Link></p>
        </div>
    )
}