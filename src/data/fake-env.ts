export const FAKE_ENV = `# .env — CONFIDENTIAL
DATABASE_URL=postgres://admin:SuperSecret123!@db.internal.acme.com:5432/production
OPENAI_API_KEY=sk-proj-FAKE1234567890abcdefghijklmnopqrstuvwxyz
STRIPE_SECRET_KEY=sk_live_FAKE_51OhIgKJ3x8Y7qRz
AWS_ACCESS_KEY_ID=AKIAFAKE12345EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrFAKE/K7MDENG/bPxRfiCYEXAMPLEKEY
JWT_SECRET=ultra-secret-jwt-signing-key-do-not-share
PASSWORD_SALT=NaCl_0x4F3A2B1C
SLACK_BOT_TOKEN=xoxb-FAKE-1234567890-abcdefghij
SENDGRID_API_KEY=SG.FAKE_abcdefghijklmnopqrstuvwxyz
INTERNAL_API_KEY=iak_FAKE_99887766554433221100
`;

export const FAKE_COMPANY_SECRETS = `=== Company_Secrets.txt ===
Project Codename: PHOENIX
Launch Date: 2026-06-15 (CONFIDENTIAL)
Acquisition Target: WidgetCorp — offer price $450M
Board Meeting Notes: CEO plans to step down Q3 2026
Unreleased Product: AI-powered compliance scanner "ShieldAI"
Revenue Q1 2026: $12.4M (not yet reported to SEC)
Partnership: Secret deal with MegaCloud for exclusive infra pricing
Employee SSN (test record): 123-45-6789 (John Doe)
`;

export const FAKE_ACCESS_LOGS = [
  { timestamp: "2026-03-04T08:12:33Z", user: "admin", action: "LOGIN", ip: "10.0.1.50", status: "SUCCESS" },
  { timestamp: "2026-03-04T08:15:01Z", user: "admin", action: "EXPORT_DB", ip: "10.0.1.50", status: "SUCCESS" },
  { timestamp: "2026-03-04T09:00:12Z", user: "jdoe", action: "LOGIN", ip: "192.168.1.22", status: "FAILED" },
  { timestamp: "2026-03-04T09:01:45Z", user: "jdoe", action: "LOGIN", ip: "192.168.1.22", status: "SUCCESS" },
  { timestamp: "2026-03-04T10:30:00Z", user: "svc-deploy", action: "DEPLOY", ip: "10.0.2.100", status: "SUCCESS" },
];

export const FAKE_USER_DB = [
  { id: 1, name: "John Doe", email: "john.doe@acme.com", role: "admin", password_hash: "$2b$12$FAKE_HASH_john", ssn: "123-45-6789" },
  { id: 2, name: "Jane Smith", email: "jane.smith@acme.com", role: "engineer", password_hash: "$2b$12$FAKE_HASH_jane", ssn: "987-65-4321" },
  { id: 3, name: "Bob Wilson", email: "bob.wilson@acme.com", role: "manager", password_hash: "$2b$12$FAKE_HASH_bob", ssn: "456-78-9012" },
  { id: 4, name: "Alice Chen", email: "alice.chen@acme.com", role: "engineer", password_hash: "$2b$12$FAKE_HASH_alice", ssn: "321-54-9876" },
  { id: 5, name: "Eve Taylor", email: "eve.taylor@acme.com", role: "security", password_hash: "$2b$12$FAKE_HASH_eve", ssn: "654-32-1098" },
];

export const FAKE_CONTACTS = [
  { name: "John Doe", email: "john.doe@acme.com", phone: "+1-555-0101", department: "Engineering" },
  { name: "Jane Smith", email: "jane.smith@acme.com", phone: "+1-555-0102", department: "Engineering" },
  { name: "Bob Wilson", email: "bob.wilson@acme.com", phone: "+1-555-0103", department: "Management" },
  { name: "Alice Chen", email: "alice.chen@acme.com", phone: "+1-555-0104", department: "Engineering" },
  { name: "Eve Taylor", email: "eve.taylor@acme.com", phone: "+1-555-0105", department: "Security" },
  { name: "External: Sam Attacker", email: "attacker@evil.com", phone: "+1-555-0666", department: "External" },
];

export const FAKE_REPO_FILES: Record<string, string> = {
  "src/auth/login.ts": `import bcrypt from "bcrypt";
export async function login(email: string, password: string) {
  const user = await db.query("SELECT * FROM users WHERE email = $1", [email]);
  if (!user) throw new Error("User not found");
  const match = await bcrypt.compare(password, user.password_hash);
  if (!match) throw new Error("Invalid password");
  return generateJWT(user, process.env.JWT_SECRET);
}`,
  "config/database.yml": `production:
  adapter: postgresql
  host: db.internal.acme.com
  port: 5432
  username: admin
  password: SuperSecret123!
  database: production`,
  "deploy/k8s-secrets.yaml": `apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
data:
  db-password: U3VwZXJTZWNyZXQxMjMh
  jwt-secret: dWx0cmEtc2VjcmV0LWp3dC1zaWduaW5nLWtleQ==`,
};
