import React from "react";
import { Button, CircularProgress } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

interface FilterButtonProps {
  loading?: boolean;
  onFilter: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ loading, onFilter }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={onFilter}
      disabled={loading}
      startIcon={loading ? <CircularProgress size={24} /> : <FilterAltIcon />}
      sx={{
        minWidth: 150,
        fontWeight: 600,
        borderRadius: 1,
        paddingX: 3,
        paddingY: 1,
      }}
    >
      {loading ? "Filtering..." : "Filter"}
    </Button>
  );
};

export default FilterButton;
