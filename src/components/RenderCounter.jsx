export default function RenderCounter() {
    // const old_even = 3 % 2 ? "old" : "even";
    const old_even = "even";
    const count = 12;

    return <div className={`render-counter ${old_even}`}>
        { count }
    </div>
}
