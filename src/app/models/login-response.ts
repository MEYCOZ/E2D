// src/app/models/login-response.model.ts
export interface LoginResponse {
    success: boolean;
    message: string;
    user?: any; // Optionnel, selon les données que tu veux renvoyer
  }
  