import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
    this.admin = false;
  }
  turnAdmin?(): void {
    this.admin = true;
    this.updated_at = new Date();
  }
}

export { User };
