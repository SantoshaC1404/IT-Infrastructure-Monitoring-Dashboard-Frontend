import Modal from "./Modal";
import Button from "./Button";

const ConfirmModal = ({
  open,
  title = "Confirm Action",
  message,
  confirmText = "Delete",
  cancelText = "Cancel",
  confirmVariant = "danger",
  loading = false,
  onConfirm,
  onCancel,
}) => {
  if (!open) return null;

  return (
    <Modal open={open} onClose={onCancel} title={title} size="sm">
      <div className="space-y-6">
        <p className="text-sm text-gray-600 ">{message}</p>

        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={onCancel}>
            {cancelText}
          </Button>

          <Button
            variant={confirmVariant}
            loading={loading}
            onClick={onConfirm}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
