import React from "react";
import { Button, CircularProgress } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface CancelButtonProps {
  loading?: boolean;
  onCancel: () => void;
}

const CancelButton: React.FC<CancelButtonProps> = ({
  loading = false,
  onCancel,
}) => {
  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={onCancel}
      disabled={loading}
      startIcon={loading ? <CircularProgress size={24} /> : <CloseIcon />}
    >
      {loading ? <CircularProgress size={24} color="inherit" /> : "Cancel"}
    </Button>
  );
};

export default CancelButton;
