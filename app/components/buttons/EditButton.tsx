import React from "react";
import { Button, CircularProgress } from "@mui/material";

interface EditButtonProps {
  onEdit: () => void; // Callback function when the button is clicked
  loading?: boolean; // Optional loading state
}

const EditButton: React.FC<EditButtonProps> = ({ onEdit, loading }) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={onEdit}
      disabled={loading} // Disable button if loading
    >
      {loading ? <CircularProgress size={24} /> : "Edit"}
    </Button>
  );
};

export default EditButton;
