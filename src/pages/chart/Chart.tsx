import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GroupGrid from "./components/GroupGrid"
import {developers, publishers} from "./groupdata";
import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import GroupChart from "./components/GroupChart";

type tSelect = "Разработчик" | "Издатель";

function Chart() {
    const [group, setGroup] = React.useState<tSelect>('Разработчик');
    const [groupData, setGroupData] = React.useState(developers);
    const handleChange = (event: SelectChangeEvent) => {
        const selectedGroup = event.target.value as tSelect;
        setGroup(selectedGroup);

        switch (selectedGroup) {
            case 'Разработчик':
                setGroupData(developers);
                break;
            case 'Издатель':
                setGroupData(publishers);
                break;
            default:
                setGroupData([]);
                break;
        }
    };

    return (
        <div>
            <Navbar active="3"/>
            <Box sx={{ width:"200px", m:"auto" }}>
                <FormControl fullWidth>
                    <InputLabel> Группировать по </InputLabel>
                    <Select
                        id="select-group"
                        value={ group }
                        label="Группировать по"
                        onChange={ handleChange }
                    >
                        <MenuItem value="Разработчик"> Разработчику </MenuItem>
                        <MenuItem value="Издатель"> Издателю </MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <GroupChart data={groupData}/>
            <GroupGrid data={groupData}/>

            <Footer/>
        </div>
    );
}
export default Chart;
