"use client";

import * as React from "react";
import {
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  Chip,
  OutlinedInput,
  Stack,
  Alert,
  AlertTitle,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Paper,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  SelectChangeEvent,
  ListItemText,
  TextField,
  Autocomplete,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker, DateRange } from "date-range-picker-mui";
import { toast } from "react-hot-toast";
import { Label } from "@mui/icons-material";

const ExamplesPage: React.FC = () => {
  const [gender, setGender] = React.useState("");
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
  const [showAlert, setShowAlert] = React.useState(true);
  const [input1, setInput1] = React.useState("");
  const [input2, setInput2] = React.useState("");
  const [activeStep, setActiveStep] = React.useState(0);
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs()); // Initial date set to current date

  const steps = [
    { label: "Step 1", description: "This is the first step" },
    { label: "Step 2", description: "This is the second step" },
    { label: "Step 3", description: "This is the third step" },
  ];

  const handleButtonClick = () => {
    if (!input1 || !input2) {
      setShowAlert(true);
      toast.error("Both fields are required!"); // Show error toast if fields are empty
    } else {
      setShowAlert(false);
      toast.success("Form submitted successfully!"); // Show success toast if fields are filled
      console.log("Both inputs are filled:", { input1, input2 });
    }
  };

  const [open, setOpen] = React.useState(false);
  const [dateRange, setDateRange] = React.useState<DateRange>({});

  const toggle = () => setOpen(!open);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleGenderChange = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  const handleMultipleSelectChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions(typeof value === "string" ? value.split(",") : value);
  };

  const handleDateChange = (newDate: Dayjs | null) => {
    setSelectedDate(newDate);
  };

  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

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
        <Typography variant="h4" gutterBottom>
          Form with Validation
        </Typography>

        {/* Alert when inputs are empty */}
        {showAlert && (
          <Stack sx={{ width: "100%", marginBottom: 2 }} spacing={2}>
            <Alert
              onClose={() => setShowAlert(false)}
              severity="error"
              variant="filled"
            >
              <AlertTitle>Error</AlertTitle>
              Both fields must be filled — <strong>please check!</strong>
            </Alert>
          </Stack>
        )}

        {/* Input fields */}
        <Stack spacing={2} sx={{ marginBottom: 2 }}>
          <TextField
            label="Input 1"
            variant="outlined"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
          <TextField
            label="Input 2"
            variant="outlined"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </Stack>

        {/* Button */}
        <Button variant="contained" onClick={handleButtonClick}>
          Submit
        </Button>

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
        <FormControl fullWidth sx={{ marginTop: 2 }}>
          <Autocomplete
            options={["female", "male", "other"]}
            value={gender}
            onChange={(event, newValue) => setGender(newValue || "")}
            renderInput={(params) => (
              <TextField {...params} label="Gender" variant="outlined" />
            )}
          />
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

        {/* Linear Stepper Example */}
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h5" gutterBottom>
            Linear Stepper Example
          </Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box sx={{ mt: 2 }}>
            {activeStep === steps.length ? (
              <Box>
                <Typography>All steps completed - you are finished</Typography>
                <Button onClick={handleReset} sx={{ mt: 1 }}>
                  Reset
                </Button>
              </Box>
            ) : (
              <Box>
                <Typography sx={{ mb: 2 }}>
                  {steps[activeStep].description}
                </Typography>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </Box>
            )}
          </Box>
        </Box>

        {/* Date Picker Example */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box sx={{ marginTop: 4 }}>
            <Typography variant="h5" gutterBottom>
              Date Picker Example
            </Typography>
            <DatePicker
              label="Select Date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </Box>
        </LocalizationProvider>
        <Box sx={{ marginTop: 4 }}>
          <Button variant="contained" onClick={toggle}>
            Select Date Range
          </Button>

          <DateRangePicker
            open={open}
            toggle={toggle}
            onChange={(range) => setDateRange(range)}
          />
          <p>
            Selected: {dateRange.startDate?.toLocaleDateString()} -{" "}
            {dateRange.endDate?.toLocaleDateString()}
          </p>
        </Box>
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="subtitle1">
            COMPONENT-Material UI:{" "}
            <a
              href="https://mui.com/material-ui/react-stepper/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mui.com/material-ui/react-stepper/
            </a>
          </Typography>
          <Typography variant="subtitle1">
            DATAGRID-MUIX:{" "}
            <a
              href="https://mui.com/x/react-data-grid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mui.com/x/react-data-grid/
            </a>
          </Typography>
          <Typography variant="subtitle1">
            TEMPLATE-Toolpad:{" "}
            <a
              href="https://mui.com/toolpad/core/introduction/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mui.com/toolpad/core/introduction/
            </a>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default ExamplesPage;
