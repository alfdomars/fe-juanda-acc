import React from "react";
import { Button, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface CreateButtonProps {
  loading?: boolean;
  onCreate: () => void;
}

const CreateButton: React.FC<CreateButtonProps> = ({ loading, onCreate }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={onCreate}
      disabled={loading}
      startIcon={loading ? <CircularProgress size={24} /> : <AddIcon />}
      sx={{
        minWidth: 150,
        fontWeight: 600,
        borderRadius: 1,
        paddingX: 3,
        paddingY: 1,
      }}
    >
      {loading ? "Creating..." : "Create"}
    </Button>
  );
};

export default CreateButton;
