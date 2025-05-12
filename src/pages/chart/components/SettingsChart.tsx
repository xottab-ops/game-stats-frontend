import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

type tSeries= {
    'maxPrice': boolean,
    'avgPrice': boolean,
    'minPrice': boolean,
}

type CheckboxProps = {
    series: tSeries;
    setSeries: React.Dispatch<
        React.SetStateAction<tSeries>
    >;
    isBar: boolean;
    setIsBar: React.Dispatch<
        React.SetStateAction<boolean>
    >;

};

function SettingChart({series, setSeries, isBar, setIsBar}: CheckboxProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeries({
            ...series,
            [event.target.name]: event.target.checked,
        });
    };

    const handleChartTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsBar(event.target.value === 'bar');
    };

    return (
        <Stack
            direction="row"
            justifyContent="center"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            sx={{ m: "20px 0" }}
        >
            <FormControl>
                <FormLabel id="label-radio-group">
                    Тип диаграммы:
                </FormLabel>
                <RadioGroup
                    name="group-radio"
                    value={(isBar) ? "bar": "dot"}
                    onChange={handleChartTypeChange}
                >
                    <FormControlLabel value="bar"
                                      control={
                                          <Radio checked={isBar} />
                                      }

                                      label="Гистограмма"
                    />
                    <FormControlLabel value="dot"
                                      control={
                                          <Radio checked={!isBar}/>
                                      }
                                      label="Линейная" />
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel id="label-checkbox-group">
                    На диаграмме показать:
                </FormLabel>
                <FormControlLabel
                    control={
                        <Checkbox checked={series["maxPrice"]}
                                  onChange={handleChange} name="maxPrice" />
                    }
                    label="максимальную цену" />
                <FormControlLabel
                    control={
                        <Checkbox checked={series["avgPrice"]}
                                  onChange={handleChange} name="avgPrice" />
                    }
                    label="среднюю цену" />
                <FormControlLabel
                    control={
                        <Checkbox checked={series["minPrice"]}
                                  onChange={handleChange} name="minPrice" />
                    }
                    label="минимальную цену" />
            </FormControl>
        </Stack>

    )
}
export default SettingChart;
