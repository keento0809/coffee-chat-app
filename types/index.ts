import { Database } from "./supabase";

export type UserProfile = Database["public"]["Tables"]["profiles"]["Row"];
