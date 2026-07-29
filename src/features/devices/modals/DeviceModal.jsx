import { useEffect, useRef, useState } from "react";

import Modal from "../../../components/common/Modal";
import Button from "../../../components/common/Button";

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

  const isEditing = Boolean(device);

  const [saving, setSaving] = useState(false);

  const [testingConnection, setTestingConnection] = useState(false);

  const [connectionVerified, setConnectionVerified] = useState(false);

  const [connectionResult, setConnectionResult] = useState(null);

  /**
   * Reset modal every time it opens.
   */
  useEffect(() => {
    if (!open) return;

    setSaving(false);

    setTestingConnection(false);

    setConnectionResult(null);

    /**
     * Add Device
     */
    if (!device) {
      setConnectionVerified(false);
      return;
    }

    /**
     * Edit Device
     * (Later we'll compare dirty fields)
     */
    setConnectionVerified(true);
  }, [open, device]);

  /**
   * Connection fields changed.
   */
  const handleConnectionChange = () => {
    if (!isEditing) {
      setConnectionVerified(false);
    }

    setConnectionResult(null);
  };

  /**
   * Test SSH connection.
   */
  const handleTestConnection = async () => {
    try {
      setTestingConnection(true);

      const values = formRef.current.getValues();

      console.log("Testing Connection:", values);

      const result = await onTestConnection(values);

      console.log("Connection Result:", result);

      setConnectionVerified(result.success);

      setConnectionResult(result);
    } catch (err) {
      console.error(err);

      setConnectionVerified(false);

      setConnectionResult({
        success: false,
        message: err.message,
      });
    } finally {
      setTestingConnection(false);
    }
  };

  /**
   * Save Device.
   */
  const handleSubmit = async (values) => {
    console.log("Submitting Device:", values);

    console.log("isEditing =", isEditing);

    console.log("connectionVerified =", connectionVerified);

    if (!connectionVerified) {
      console.log("Connection not verified.");

      return;
    }

    try {
      setSaving(true);

      if (isEditing) {
        console.log("Calling onUpdate()");

        await onUpdate(device.id, values);

        console.log("Update completed");
      } else {
        console.log("onCreate =", onCreate);
        
        console.log("typeof =", typeof onCreate);

        await onCreate(values);

        console.log("Returned from onCreate");
      }

      handleClose();
    } catch (err) {
      console.error("Save failed", err);
    } finally {
      setSaving(false);
    }
  };

  /**
   * Close modal.
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
          <Button variant="secondary" onClick={handleClose} disabled={saving}>
            Cancel
          </Button>

          <Button
            variant="secondary"
            loading={testingConnection}
            disabled={saving}
            onClick={handleTestConnection}
          >
            Test Connection
          </Button>

          {/* <Button
            loading={saving}
            disabled={!connectionVerified}
            onClick={() => formRef.current.submit()}
          >
            {isEditing ? "Update Device" : "Save Device"}
          </Button> */}

          <Button
            loading={saving}
            disabled={!connectionVerified}
            onClick={() => {
              console.log("SAVE BUTTON CLICKED");
              console.log(formRef.current);

              formRef.current?.submit();
            }}
          >
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
