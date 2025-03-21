import { TLanguage, ILanguageOption } from "../types";

export const FALLBACK_LANGUAGE: TLanguage = "en";

export const SUPPORTED_LANGUAGES: ILanguageOption[] = [
  { label: "English", value: "en" },
  { label: "Tiếng Việt", value: "vn" },
  { label: "简体中文", value: "zh-CN" },
  { label: "繁體中文", value: "zh-TW" },
];

export const STORAGE_KEY = "userLanguage";
