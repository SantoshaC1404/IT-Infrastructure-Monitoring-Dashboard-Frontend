import { z } from "zod";

export const deviceSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Device name must be at least 3 characters.")
    .max(100, "Device name is too long."),

  device_type: z.enum([
    "LINUX",
    "WINDOWS",
    "SWITCH",
    "UPS",
  ]),

  ip_address: z
    .string()
    .trim()
    .regex(
      /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/,
      "Enter a valid IPv4 address."
    ),

  ssh_port: z
    .coerce
    .number()
    .int()
    .min(1, "Port must be between 1 and 65535.")
    .max(65535, "Port must be between 1 and 65535."),

  username: z
    .string()
    .trim()
    .min(1, "Username is required.")
    .max(100),

  password: z
    .string()
    .min(1, "Password is required.")
    .max(255),
});