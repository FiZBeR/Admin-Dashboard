import { useGetUserPerformanceQuery } from "../../state/api";
import { Box, useTheme } from "@mui/material";

const Performance = () => {

    const theme = useTheme();
    const  { data, isLoading }  = useGetUserPerformanceQuery();

    return (
        <div>Performance</div>
    );
};

export default Performance;