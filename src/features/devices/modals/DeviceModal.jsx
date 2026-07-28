import { useEffect, useRef, useState } from "react";

import Button from "../../../components/common/Button";
import Modal from "../../../components/common/Modal";

import DeviceForm from "../components/DeviceForm";

const DeviceModal = ({
  open,
  device,
  onClose,
  onCreate,
  onUpdate,
  onTestConnection,
}) => {
  const formRef = useRef(null);

  const isEditing = !!device;

  const [testingConnection, setTestingConnection] = useState(false);

  const [saving, setSaving] = useState(false);

  const [connectionVerified, setConnectionVerified] = useState(false);

  const [connectionResult, setConnectionResult] = useState(null);

  /**
   * Reset modal state whenever opened
   * or switching between create/edit.
   */
  useEffect(() => {
    if (!open) return;

    setConnectionVerified(false);
    setConnectionResult(null);
  }, [open, device]);

  /**
   * Called whenever
   * connection fields change.
   */
  const handleConnectionChange = () => {
    setConnectionVerified(false);
    setConnectionResult(null);
  };

  /**
   * Test SSH connection.
   */
  const handleTestConnection = async () => {
    const values = formRef.current.getValues();

    try {
      setTestingConnection(true);

      const result = await onTestConnection(values);

      setConnectionVerified(result.success);

      setConnectionResult(result);
    } finally {
      setTestingConnection(false);
    }
  };

  /**
   * Save Device.
   */
  const handleSubmit = async (values) => {
    if (!connectionVerified) {
      return;
    }

    try {
      setSaving(true);

      if (isEditing) {
        await onUpdate(device.id, values);
      } else {
        await onCreate(values);
      }

      handleClose();
    } finally {
      setSaving(false);
    }
  };

  /**
   * Close Modal.
   */
  const handleClose = () => {
    formRef.current?.reset();

    setConnectionVerified(false);

    setConnectionResult(null);

    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={isEditing ? "Edit Device" : "Add Device"}
      size="lg"
      footer={
        <>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>

          <Button
            variant="secondary"
            loading={testingConnection}
            onClick={handleTestConnection}
          >
            Test Connection
          </Button>

          <Button loading={saving} onClick={() => formRef.current.submit()}>
            {isEditing ? "Update Device" : "Save Device"}
          </Button>
        </>
      }
    >
      <DeviceForm
        ref={formRef}
        defaultValues={device}
        onSubmit={handleSubmit}
        onConnectionChange={handleConnectionChange}
      />

      {connectionResult && (
        <div
          className={`mt-5 rounded-lg border p-4 text-sm ${
            connectionResult.success
              ? "border-green-200 bg-green-50 text-green-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {connectionResult.message}
        </div>
      )}
    </Modal>
  );
};

export default DeviceModal;
