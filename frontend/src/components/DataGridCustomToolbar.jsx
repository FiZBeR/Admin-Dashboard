import { Search } from '@mui/icons-material';
import { IconButton, TextField, InputAdornment } from '@mui/material';
import {
    GridToolbarContainer,
    GridToolbar
} from '@mui/x-data-grid';
import FlexBetween from './FlexBetween';


const DataGridCustomToolbar = ({searchInput, setSearchInput, setSearch}) => {
    return (
        <GridToolbarContainer
        >
          <FlexBetween width="100%" alignItems="center" flexDirection="row" >
            
            <GridToolbar sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap", 
            width: "100%",
          }}/>
    
          </FlexBetween>
        </GridToolbarContainer>
      );
};

export default DataGridCustomToolbar;