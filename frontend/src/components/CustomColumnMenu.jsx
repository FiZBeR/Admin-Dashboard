import {
    GridColumnMenu,
} from '@mui/x-data-grid';


const CustomColumnMenu = (props) => {

    const { hideMenu, currentColumn, open } = props;

    return (
        <GridColumnMenu
            {...props}
            slots={{
                columnMenuColumnsItem: null,
            }}
        />
    );
};

export default CustomColumnMenu;