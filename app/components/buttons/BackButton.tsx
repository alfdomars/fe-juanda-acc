import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";

interface BackButtonProps {
  loading?: boolean;
}

const BackButton: React.FC<BackButtonProps> = ({ loading }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
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
