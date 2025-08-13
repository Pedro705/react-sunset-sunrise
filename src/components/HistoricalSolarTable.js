import '../styles/components/HistoricalSolarTable.css';

const HistoricalSolarTable = ({ data }) => {

    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString([], {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        } catch (e) {
            return '--';
        }
    };

    data = [
        { date: "2025-08-10", sunrise: "04:08:33", sunset: "19:08:01", golden_hour: "19:08:01" },
        { date: "2025-08-11", sunrise: "04:08:08", sunset: "19:08:09", golden_hour: "19:08:09" },
        { date: "2025-08-12", sunrise: "04:08:43", sunset: "19:08:16", golden_hour: "19:08:16" },
        { date: "2025-08-13", sunrise: "04:08:19", sunset: "19:08:21", golden_hour: "19:08:21" }
    ];

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Sunrise Time</th>
                        <th>Sunset Time</th>
                        <th>Golden Hour</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                        <td>{formatDate(item.date)}</td>
                        <td>{item.sunrise || "--"}</td>
                        <td>{item.sunset || "--"}</td>
                        <td>{item.golden_hour || "--"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HistoricalSolarTable;