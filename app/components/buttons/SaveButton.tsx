import React from "react";
import { Button, CircularProgress } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

interface SaveButtonProps {
  loading?: boolean;
  onSave: () => void;
}

const SaveButton: React.FC<SaveButtonProps> = ({ loading, onSave }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onSave}
      disabled={loading}
      startIcon={loading ? <CircularProgress size={24} /> : <SaveIcon />}
    >
      {loading ? "Saving..." : "Save"}
    </Button>
  );
};

export default SaveButton;
