import React from "react";
import { Button, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

interface BackButtonProps {
  loading?: boolean;
}

const BackButton: React.FC<BackButtonProps> = ({ loading = false }) => {
  const router = useRouter();

  const handleBack = () => {
    if (!loading) {
      router.back();
    }
  };

  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={handleBack}
      startIcon={!loading ? <ArrowBackIosIcon /> : null}
      disabled={loading}
    >
      {loading ? <CircularProgress size={20} color="inherit" /> : "Back"}
    </Button>
  );
};

export default BackButton;
