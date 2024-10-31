import React from "react";
import { Button, CircularProgress } from "@mui/material";

interface EditButtonProps {
  onEdit: () => void;
  loading?: boolean;
}

const EditButton: React.FC<EditButtonProps> = ({ onEdit, loading }) => {
  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={onEdit}
      disabled={loading}
    >
      {loading ? <CircularProgress size={24} /> : "Edit"}
    </Button>
  );
};

export default EditButton;
