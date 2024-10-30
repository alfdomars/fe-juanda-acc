import React from "react";
import { Button, CircularProgress } from "@mui/material";

interface DeleteButtonProps {
  onDelete: () => void; // Callback function when the button is clicked
  loading?: boolean; // Optional loading state
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete, loading }) => {
  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={onDelete}
      disabled={loading} // Disable button if loading
      style={{ marginLeft: 8 }} // Ensure consistent spacing
    >
      {loading ? <CircularProgress size={24} /> : "Delete"}
    </Button>
  );
};

export default DeleteButton;
