"use client";

import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  Chip,
  OutlinedInput,
  TextField,
  Stack,
  Alert,
  AlertTitle,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import ListItemText from "@mui/material/ListItemText";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const ExamplesPage: React.FC = () => {
  const [gender, setGender] = React.useState("");
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const [showAlert, setShowAlert] = React.useState(true);

  // Handle for single select (Gender)
  const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  // Handle for multiple select
  const handleMultipleSelectChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions(typeof value === "string" ? value.split(",") : value);
  };

  // Array of options for multi-select
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  // Dummy Data for DataGrid
  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGrid", col2: "Material-UI" },
    { id: 3, col1: "XGrid", col2: "Pro" },
    { id: 4, col1: "MUI", col2: "Component" },
    { id: 5, col1: "React", col2: "Framework" },
  ];

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Examples Page
        </Typography>

        {/* Example Alert */}
        {showAlert && (
          <Stack sx={{ width: "100%", marginBottom: 2 }} spacing={2}>
            <Alert
              onClose={() => setShowAlert(false)}
              severity="info"
              variant="filled"
            >
              <AlertTitle>Info</AlertTitle>
              This is an informational alert — <strong>check it out!</strong>
            </Alert>
          </Stack>
        )}

        {/* Example Card */}
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="div">
              Card Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is an example of a card in Material-UI. You can customize it
              with content, actions, and more.
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained">Button</Button>
          </CardActions>
        </Card>

        {/* Radio Group for Gender Selection */}
        <FormControl component="fieldset" sx={{ marginTop: 2 }}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup aria-label="gender" name="gender" defaultValue="female">
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        {/* Single Select for Gender */}
        <FormControl fullWidth variant="outlined" sx={{ marginTop: 2 }}>
          <InputLabel id="gender-select-label">Gender</InputLabel>
          <Select
            labelId="gender-select-label"
            value={gender}
            onChange={handleGenderChange}
            label="Gender"
          >
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>

        {/* MultiSelect with Chip and Checkmarks */}
        <FormControl fullWidth sx={{ marginTop: 3 }}>
          <InputLabel id="multiple-select-chip-label">Options</InputLabel>
          <Select
            labelId="multiple-select-chip-label"
            id="multiple-select-chip"
            multiple
            value={selectedOptions}
            onChange={handleMultipleSelectChange}
            input={<OutlinedInput id="select-multiple-chip" label="Options" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                <Checkbox checked={selectedOptions.indexOf(option) > -1} />
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* DataGrid Example */}
        <Box sx={{ height: 400, width: "100%", marginTop: 3 }}>
          <Typography variant="h5" gutterBottom>
            DataGrid Example
          </Typography>
          <DataGrid
            checkboxSelection
            rows={rows}
            columns={columns}
            pageSizeOptions={[5, 25, 100]}
            initialState={{
              pagination: { paginationModel: { pageSize: 5, page: 0 } },
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default ExamplesPage;
