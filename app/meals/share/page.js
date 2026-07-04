import Link from "next/link";

export default function ShareMealpage({ params }) {
    return (
        <div>
            <h1>Share Your Meal</h1>
            <p>Here you can share your favorite meal with the community.</p>
            <p><Link href="/meals">Back to Meals</Link></p>
        </div>
    )
}