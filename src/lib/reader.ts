import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";

/**
 * Keystatic Reader — used in Server Components to read content at build time.
 * This reads the local content files from the `src/content/news/` directory
 * and converts them into structured data for rendering.
 */
export const reader = createReader(process.cwd(), keystaticConfig);
