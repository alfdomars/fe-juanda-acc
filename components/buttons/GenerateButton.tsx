import React, { useState } from "react";
import { Button, Menu, MenuItem, CircularProgress } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface GenerateButtonProps {
  loading?: boolean;
  onGeneratePDF: () => void;
  onGenerateXLS: () => void;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({
  loading,
  onGeneratePDF,
  onGenerateXLS,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        endIcon={
          loading ? <CircularProgress size={16} /> : <ArrowDropDownIcon />
        }
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate"}
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            onGeneratePDF();
          }}
        >
          Generate PDF
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            onGenerateXLS();
          }}
        >
          Generate XLS
        </MenuItem>
      </Menu>
    </>
  );
};

export default GenerateButton;
