/**
 * Extracts a human-readable message from an axios error.
 *
 * Single source of truth for this - previously duplicated (and
 * inconsistent) between api/axios.js and services/BaseService.js.
 *
 * Handles:
 *  - The backend's structured error envelope: { success: false, error: { code, message } }
 *  - FastAPI validation errors: { detail: [{ loc, msg, type }, ...] } or { detail: "..." }
 *  - Network errors (request made, no response received)
 *  - Anything else (fallback to error.message)
 */
export const getErrorMessage = (error) => {
  const data = error?.response?.data;

  // Backend AppException envelope
  if (data?.error?.message) {
    return data.error.message;
  }

  // FastAPI validation error (422) - array of field errors
  if (Array.isArray(data?.detail)) {
    return data.detail
      .map((d) => d.msg)
      .filter(Boolean)
      .join(" ");
  }

  // FastAPI plain string detail
  if (typeof data?.detail === "string") {
    return data.detail;
  }

  if (error?.request && !error?.response) {
    return "Unable to connect to the server. Please check your network.";
  }

  return error?.message || "Something went wrong. Please try again.";
};

export default getErrorMessage;
