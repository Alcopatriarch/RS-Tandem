export const firebaseErrorMap: Record<string, string> = {
  "auth/user-not-found": "User not found",
  "auth/wrong-password": "Wrong password",
  "auth/email-already-in-use": "Email already in use",
  "auth/weak-password": "Password is too weak",
  "auth/invalid-email": "Invalid email",
  "auth/too-many-requests": "Too many requests. Please try again later",
  "auth/invalid-credential": "Invalid email or password",
};

export function getFirebaseErrorMessage(error: string): string {
  return firebaseErrorMap[error] || "Unknown error";
}
