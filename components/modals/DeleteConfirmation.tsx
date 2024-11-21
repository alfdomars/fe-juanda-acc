import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

interface DeleteConfirmationModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  itemName: string;
}

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  open,
  onClose,
  onConfirm,
  itemName,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth={false}
      sx={{
        "& .MuiDialog-paper": {
          borderRadius: 4,
        },
      }}
    >
      <DialogTitle sx={{ textAlign: "center", fontWeight: 600, fontSize: 20 }}>
        Hapus Produk?
      </DialogTitle>
      <DialogContent sx={{ paddingY: 2 }}>
        <Typography variant="body1" color="text.primary" align="center">
          {itemName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 1, fontSize: 14 }}
        >
          Produk yang sudah dihapus tidak bisa kembali lagi.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "space-between", paddingBottom: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={onClose}
          sx={{
            minWidth: 170,
            fontWeight: 600,
            borderRadius: 3,
            paddingX: 3,
            paddingY: 1,
          }}
        >
          Batal
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={onConfirm}
          sx={{
            minWidth: 170,
            fontWeight: 600,
            borderRadius: 3,
            paddingX: 3,
            paddingY: 1,
            marginLeft: 2,
          }}
        >
          Hapus
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationModal;
