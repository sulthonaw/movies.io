import CardMovie from "./cardMovie";

export default function PopularMovie() {
    const array = Array.from({ length: 5 })
    return (
        <section className="container">
            <h1 className="text-xl font-medium my-5">Popular Movies</h1>
            <div className="grid md:grid-cols-12 gap-5">
                {array.map((_, index) =>
                (<div className="col-span-3" key={index}>
                    <CardMovie />
                </div>)
                )}
            </div>
        </section>
    )
};
