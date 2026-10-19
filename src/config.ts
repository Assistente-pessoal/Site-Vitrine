export interface AppConfig {
  name: string;
  version: string;
  apkUrl: string | null;
  playStoreUrl: string | null;
  repoUrl: string | null;
  contactEmail: string | null;
  privacyUrl: string | null;
}

// PLACEHOLDERS: null = dado real ainda não fornecido. Nada é exibido como link.
export const APP: AppConfig = {
  name: "Synapse",
  version: "PENDENTE",
  apkUrl: null,
  playStoreUrl: null,
  repoUrl: null,
  contactEmail: null,
  privacyUrl: null,
};

export const isHttpUrl = (value: string | null): value is string =>
  value !== null && /^https?:\/\/[^\s]+$/i.test(value);
