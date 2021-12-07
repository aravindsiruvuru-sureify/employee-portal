import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({
  handleAgreeClick = () => {},
  handleDisagreeClick = () => {},
  text = "",
}) {
  return (
    <Dialog
      open={true}
      onClose={handleDisagreeClick}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        id="alert-dialog-title"
        style={{ textTransform: "none", fontSize: "16px" }}
      >
        {text}
      </DialogTitle>
      {/* <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent> */}
      <DialogActions>
        <Button onClick={handleDisagreeClick} style={{ fontSize: "14px" }}>
          No
        </Button>
        <Button
          onClick={handleAgreeClick}
          autoFocus
          style={{ fontSize: "14px" }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
