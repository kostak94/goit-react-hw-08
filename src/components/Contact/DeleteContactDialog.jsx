import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from "@material-ui/core";
const DeleteContactDialog = ({ isOpen, onClose, onDelete }) => {
  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>
        {" "}
        <Typography variant="h4">Delete</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h6">
          Are you sure you want to delete this contact?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained" color="primary">
          No
        </Button>
        <Button onClick={onDelete} variant="contained" color="secondary">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteContactDialog;
