let array: string[] = ['Hello']

let object: {
    propA: string,
    propB: number
} = {
    propA: 'Hello',
    propB: 5
}

let sum: (x: number, y: number) => number = (x, y) => {
    return x + y;
}

console.log(sum(10, 40))

function Main () {
    return (
        <main>
            <h1>Main</h1>
        </main>
    )
}

export default Main;