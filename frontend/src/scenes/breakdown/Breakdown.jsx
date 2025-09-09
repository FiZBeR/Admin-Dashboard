import Header from "../../components/Header";  
import { Box} from '@mui/material';
import BreakdownChart from '../../components/BreakdownChart';

const Breakdown = () => {


    return (
        <Box m=" 1.5rem 2.5rem">
            <Header title="BREAKDOWN" subtitle="algo con breakdwon"/>
            <Box height="75vh" mt="40px">
                <BreakdownChart/>
            </Box>
        </Box>
    );
};

export default Breakdown;