import {
    DataGrid,
    GridColDef,
    Toolbar,
    ColumnsPanelTrigger,
    ToolbarButton, FilterPanelTrigger, ExportPrint, ExportCsv
} from "@mui/x-data-grid";
import Tooltip from '@mui/material/Tooltip';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import { ruRU } from '@mui/x-data-grid/locales';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import FilterListIcon from '@mui/icons-material/FilterList';
import Badge from '@mui/material/Badge';
import React from "react";
import { CircularProgress, Menu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { GameRow } from "../../../types/GameRow";
import { formatGameToRow } from "../../../utils/formatGameToRow";
import {useGames} from "../../../hooks/useGames";


function GameGrid() {

    function CustomToolbar() {
        const [exportMenuOpen, setExportMenuOpen] = React.useState(false);
        const exportMenuTriggerRef = React.useRef<HTMLButtonElement>(null);
        return (
            <Toolbar>
                <Tooltip title="Столбцы">
                    <ColumnsPanelTrigger render={<ToolbarButton />}>
                        <ViewColumnIcon fontSize="small" />
                        <Box ml={0.5}>
                            <Typography variant="body2" fontWeight={500}>
                                Столбцы
                            </Typography>
                        </Box>
                    </ColumnsPanelTrigger>
                </Tooltip>

                <Tooltip title="Фильтры">
                    <FilterPanelTrigger
                        render={(props, state) => (
                            <ToolbarButton {...props} color="default">
                                <Badge badgeContent={state.filterCount} color="primary" variant="dot">
                                    <FilterListIcon fontSize="small" />
                                    <Box ml={0.5}>
                                        <Typography variant="body2" fontWeight={500}>
                                            Фильтры
                                        </Typography>
                                    </Box>
                                </Badge>
                            </ToolbarButton>
                        )}
                    />
                </Tooltip>
                <Box sx={{ flexGrow: 1 }} />
                <Tooltip title="Экспорт">
                    <ToolbarButton
                        ref={exportMenuTriggerRef}
                        id="export-menu-trigger"
                        aria-controls="export-menu"
                        aria-haspopup="true"
                        aria-expanded={exportMenuOpen ? 'true' : undefined}
                        onClick={() => setExportMenuOpen(true)}
                    >
                        <FileDownloadIcon fontSize="small" />
                        <Box ml={0.5}>
                            <Typography variant="body2" fontWeight={500}>
                                Экспорт
                            </Typography>
                        </Box>
                    </ToolbarButton>
                </Tooltip>
                <Menu
                    id="export-menu"
                    anchorEl={exportMenuTriggerRef.current}
                    open={exportMenuOpen}
                    onClose={() => setExportMenuOpen(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    slotProps={{
                        list: {
                            'aria-labelledby': 'export-menu-trigger',
                        },
                    }}
                >
                    <ExportPrint render={<MenuItem />} onClick={() => setExportMenuOpen(false)}>
                        Распечатать
                    </ExportPrint>
                    <ExportCsv render={<MenuItem />} onClick={() => setExportMenuOpen(false)}>
                        Загрузить в CSV формате
                    </ExportCsv>

                </Menu>


            </Toolbar>
        )
    }

    const { data, isLoading, error } = useGames();

    console.log("API data:", data);

    if (isLoading) return (
        <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
            <CircularProgress />
        </Container>
    );
    if (error || !data) return(
        <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
            <Typography>Ошибка при загрузке данных</Typography>
        </Container>
    );

    const rows: GameRow[] = data.map(formatGameToRow);
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Название', flex: 1 },
        { field: 'publisher', headerName: 'Издатель', flex: 0.7 },
        { field: 'developer', headerName: 'Разработчик', flex: 0.7 },
        { field: 'categories', headerName: 'Категории', flex: 1 },
        { field: 'platforms', headerName: 'Платформы', flex: 1 },
        { field: 'price', headerName: 'Цена', flex: 0.4, type: 'number' },
        { field: 'positiveRating', headerName: '👍 Положительные отзывы', flex: 0.4, type: 'number' },
        { field: 'negativeRating', headerName: '👎 Отрицательные отзывы', flex: 0.4, type: 'number' },
    ];

    return (
        <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
            <DataGrid
                localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
                rows={rows}
                columns={columns}
                pageSizeOptions={[ 10, 20, 30, 100 ]}
                slots={{ toolbar: CustomToolbar }}
                showToolbar

            />
        </Container>
    );
}
export default GameGrid;