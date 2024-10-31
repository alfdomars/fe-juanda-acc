import React, { useState } from "react";
import DeleteConfirmationModal from "@/app/components/modals/DeleteConfirmation";
import { Button } from "@mui/material";

const SomeComponent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [itemName, setItemName] = useState("");

  const handleDelete = () => {
    // Perform the delete action here
    console.log(`Deleting ${itemName}`);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    setItemName("");
  };

  const handleOpen = (name: string) => {
    setItemName(name);
    setOpen(true);
  };

  return (
    <div>
      {/* Example button to trigger the modal */}
      <Button
        variant="contained"
        color="error"
        onClick={() =>
          handleOpen("sepatu pria sneakers original reebok classic")
        }
      >
        Hapus Sepatu
      </Button>

      <DeleteConfirmationModal
        open={open}
        onClose={handleClose}
        onConfirm={handleDelete}
        itemName={itemName}
      />
    </div>
  );
};

export default SomeComponent;
