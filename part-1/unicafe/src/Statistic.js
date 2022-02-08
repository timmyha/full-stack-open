const Statistic = ({ text, value, bg }) => {
    if (text === "positive") {
        return (
            <tr><td>{text} {value} %</td></tr>
        )
    }

    return (
        <tr className={bg}><th colSpan="1">{text}</th><td>{value}</td></tr>
    )
}

export default Statistic;