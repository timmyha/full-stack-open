import Statistic from './Statistic.js';

const Statistics = ({ clicks }) => {
    const total = clicks.bad + clicks.neutral + clicks.good;
    const average = (((clicks.good * 1) + (clicks.bad * -1)) / total).toFixed(2);
    const positive = (clicks.good * (100 / total)).toFixed(2);

    if (total === 0) {
        return (
            <p>No Feedback Given</p>
        )
    }

    return (
        <div className="container-fluid">
            <div className="row">
            <div className="row col-sm">
            <table className="table table-striped table-hover table-sm">
                <tbody>
                    <Statistic bg="table-success" text="Good:" value={clicks.good} />
                    <Statistic bg="table-warning" text="Neutral:" value={clicks.neutral} />
                    <Statistic bg="table-danger" text="Bad:" value={clicks.bad} />
                    <Statistic text="Total:" value={total} />
                    <Statistic text="Average:" value={average} />
                    <Statistic text="Positive:" value={positive} />
                </tbody>
            </table>
            </div>
            <div className="col-sm"></div>
            <div className="col-sm"></div>
            </div>
        </div>
    )
}

export default Statistics;