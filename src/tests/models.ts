import { factory, primaryKey } from "@mswjs/data";
import { nanoid } from "nanoid";

export const db = factory({
  sheet: {
    id: primaryKey(() => nanoid()),
    account: String,
    address1: String,
    address2: String,
    bank: String,
    city: String,
    company: String,
    created_at: String,
    name: String,
    nip: String,
    user_id: String,
  },
});
