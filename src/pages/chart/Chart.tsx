import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GroupGrid from "./components/GroupGrid"
import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import GroupChart from "./components/GroupChart";
import {useAggregationDevelopers, useAggregationPublishers} from "../../hooks/useGames";
import Container from "@mui/material/Container";
import {CircularProgress} from "@mui/material";
import Typography from "@mui/material/Typography";
import {formatAggregateToRowDeveloper, formatAggregateToRowPublisher} from "../../utils/formatAggregateToRow";
import { AggregateRow } from "../../types/GameRow";

type tSelect = "Разработчик" | "Издатель";

function Chart() {
    const [group, setGroup] = React.useState<tSelect>("Разработчик");
    const [groupData, setGroupData] = React.useState<AggregateRow[]>([]);

    const { data: developersData, isLoading: isLoadingDevelopers, error: errorDevelopers } = useAggregationDevelopers();
    const { data: publishersData, isLoading: isLoadingPublishers, error: errorPublishers } = useAggregationPublishers();

    React.useEffect(() => {
        if (developersData && publishersData) {
            if (group === "Разработчик") {
                setGroupData(developersData.map(formatAggregateToRowDeveloper));
            } else if (group === "Издатель") {
                setGroupData(publishersData.map(formatAggregateToRowPublisher));
            }
        }
    }, [developersData, publishersData, group]);

    if (isLoadingDevelopers || isLoadingPublishers)
        return (
            <Container maxWidth="lg" sx={{ height: "700px", mt: "20px" }}>
                <CircularProgress />
            </Container>
        );

    if (errorDevelopers || errorPublishers || !developersData || !publishersData)
        return (
            <Container maxWidth="lg" sx={{ height: "700px", mt: "20px" }}>
                <Typography>Ошибка при загрузке данных</Typography>
            </Container>
        );


    const handleChange = (event: SelectChangeEvent) => {
        const selectedGroup = event.target.value as tSelect;
        setGroup(selectedGroup);

        switch (selectedGroup) {
            case "Разработчик":
                setGroupData(developersData.map(formatAggregateToRowDeveloper));
                break;
            case "Издатель":
                setGroupData(publishersData.map(formatAggregateToRowPublisher));
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
