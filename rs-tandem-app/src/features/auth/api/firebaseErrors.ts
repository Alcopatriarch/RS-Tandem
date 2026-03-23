export const firebaseErrorMap: Record<string, string> = {
  "auth/user-not-found": "Пользователь не найден",
  "auth/wrong-password": "Неверный пароль",
  "auth/email-already-in-use": "Email уже используется",
  "auth/weak-password": "Слишком слабый пароль",
  "auth/invalid-email": "Некорректный email",
  "auth/too-many-requests": "Слишком много попыток. Попробуйте позже",
  "auth/invalid-credential": "Неверные Email или пароль",
};

export function getFirebaseErrorMessage(error: string): string {
  return firebaseErrorMap[error] || "Неизвестная ошибка";
}
