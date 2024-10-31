// components/modals/DeleteConfirmationModal.tsx
import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

interface DeleteConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName: string; // The name of the item to delete
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  open,
  onClose,
  onConfirm,
  itemName,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2, // Adjust this value for more or less rounding
        }}
      >
        <Typography
          variant="h6"
          component="h3"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          Hapus Produk?
        </Typography>
        <Typography
          sx={{ mt: 2, color: "text.secondary", textAlign: "center" }}
        >
          {` ${itemName}`}
        </Typography>
        <Typography
          sx={{
            mt: 2,
            color: "text.secondary",
            textAlign: "center",
            fontSize: 13,
          }}
        >
          Produk yang sudah dihapus tidak bisa kembali lagi.
        </Typography>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
          <Button variant="outlined" color="primary" onClick={onClose}>
            Batal
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={onConfirm}
            sx={{ ml: 2 }}
          >
            Hapus
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteConfirmationModal;
