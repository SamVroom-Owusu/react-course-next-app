

export default function MealsDetailsPage({ params }) {
    return (
        <div>
            <h1>Meal Details</h1>
            <p>{ params.slug }</p>
        </div>
    )
}