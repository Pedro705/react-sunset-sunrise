import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

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

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Sunrise Time</TableCell>
                        <TableCell>Sunset Time</TableCell>
                        <TableCell>Golden Hour</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item, index) => (
                            <TableRow key={index}>
                            <TableCell>{formatDate(item.date)}</TableCell>
                            <TableCell>{item.sunrise || "--"}</TableCell>
                            <TableCell>{item.sunset || "--"}</TableCell>
                            <TableCell>{item.golden_hour || "--"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default HistoricalSolarTable;