function Person(props) {
    return (
        <p>
            The Actor Name is
            <span id="name" style={{ color: "" }}>"{props.name}"</span>
            & his Age is
            <span id="age" style={{ color: "" }}>"{props.age}"</span>

        </p>
    )
};

export function Button({ text, onClick }) {

    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
};

export function Header({ title }) {
    return <Header>{title}</Header>
};
export function List({ items }) {

    return (
        <ol>
            {items.map((item) => (
                <li>{item}</li>
            ))}
        </ol>
    )
};

export default Person;