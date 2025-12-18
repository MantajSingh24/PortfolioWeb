import crypto from "crypto";

/**
 * Generate a cryptographically secure random token
 * @returns A URL-safe random token (32 bytes = 256 bits)
 */
export function generateToken(): string {
  return crypto.randomBytes(32).toString("base64url");
}

/**
 * Hash a token using SHA-256
 * NEVER store raw tokens in the database - always hash them
 * @param token - The raw token to hash
 * @returns The hashed token as a hex string
 */
export function hashToken(token: string): string {
  return crypto.createHash("sha256").update(token).digest("hex");
}

/**
 * Get expiration timestamp for token (15 minutes from now)
 * @returns ISO timestamp string
 */
export function getTokenExpiration(): string {
  const expiresAt = new Date();
  expiresAt.setMinutes(expiresAt.getMinutes() + 15);
  return expiresAt.toISOString();
}


