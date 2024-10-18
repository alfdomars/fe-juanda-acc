import * as React from "react";
import { Button } from "@mui/material";

interface ActionButtonProps {
  action: "create" | "edit" | "view";
  onClick?: () => void;
  type?: "button" | "submit"; // Menambahkan 'submit' sebagai opsi
}

const ActionButton: React.FC<ActionButtonProps> = ({
  action,
  onClick,
  type = "button",
}) => {
  let buttonText = "";

  switch (action) {
    case "create":
      buttonText = "Create";
      break;
    case "edit":
      buttonText = "Save Changes";
      break;
    case "view":
      buttonText = "Back";
      break;
    default:
      buttonText = "Submit";
  }

  return (
    <Button variant="contained" color="primary" onClick={onClick} type={type}>
      {buttonText}
    </Button>
  );
};

export default ActionButton;
