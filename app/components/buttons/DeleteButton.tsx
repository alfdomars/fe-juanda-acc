import React from "react";
import { Button, CircularProgress } from "@mui/material";

interface DeleteButtonProps {
  onDelete: () => void;
  loading?: boolean;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete, loading }) => {
  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={onDelete}
      disabled={loading}
      style={{ marginLeft: 8 }}
    >
      {loading ? <CircularProgress size={24} /> : "Delete"}
    </Button>
  );
};

export default DeleteButton;
