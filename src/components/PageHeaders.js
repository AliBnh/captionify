export default function PageHeaders({
    h1Text = 'Test',
    h2Text = 'Testing'
}) {
    return (
        <section className="text-center mt-12 sm:mt-24 mb-2 sm:mb-8">
        <h1 className="text-xl sm:text-3xl font-semibold"
        style={{textShadow: '1px 1px 0 rgba(0,0,0,0.2)'}}
        >
            {h1Text}
        </h1>
        <h2 className="sm:text-base text-sm">
            {h2Text}
        </h2>
      </section>
    )

}