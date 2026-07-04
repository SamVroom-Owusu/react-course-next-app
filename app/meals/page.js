import Link from "next/link";

export default function MealsPage() {
    return (
        <div>
            <h1>Meals Page</h1>
            <p>Here you can find a variety of delicious meals shared by our community.</p>
            <p><Link href="/meals/share">Share Your Meal</Link></p>
            <p><Link href="/">Back to Home</Link></p>

        </div>
    )
}