export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "monospace" }}>
      <h1>Demo Agentic App</h1>
      <p>POST to <code>/api/exfil-test-agent</code> with:</p>
      <pre>{`{ "message": "your message here" }`}</pre>
      <p>The agent has 10 tools: read_file, browse_url, db_query, write_log, get_contacts, create_calendar_invite, read_repo, gist_create, send_email, slack_dm</p>
    </main>
  );
}
