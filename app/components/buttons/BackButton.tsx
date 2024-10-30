import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  loading?: boolean; // Optional loading state
}

const BackButton: React.FC<BackButtonProps> = ({ loading }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); // Navigate to the previous page
  };

  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={handleBack}
      disabled={loading}
    >
      {loading ? <CircularProgress size={24} /> : "Back"}
    </Button>
  );
};

export default BackButton;
