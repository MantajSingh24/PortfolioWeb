-- Contact Submissions Table with Magic Link Verification
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,S
  token_hash TEXT NOT NULL UNIQUE,
  expires_at TIMESTAMPTZ NOT NULL,
  verified_at TIMESTAMPTZ NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for fast token lookup
CREATE INDEX IF NOT EXISTS idx_contact_submissions_token_hash 
ON contact_submissions(token_hash);

-- Index for cleanup queries (finding expired submissions)
CREATE INDEX IF NOT EXISTS idx_contact_submissions_expires_at 
ON contact_submissions(expires_at);

-- Index for finding unverified submissions
CREATE INDEX IF NOT EXISTS idx_contact_submissions_verified_at 
ON contact_submissions(verified_at);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy to allow service role to do everything
CREATE POLICY "Service role can do everything" 
ON contact_submissions 
FOR ALL 
TO service_role 
USING (true) 
WITH CHECK (true);

-- Optional: Auto-cleanup function for expired unverified submissions (runs daily)
-- This keeps your database clean by removing old unverified submissions
CREATE OR REPLACE FUNCTION cleanup_expired_contact_submissions()
RETURNS void
LANGUAGE plpgsql
AS $$
BEGIN
  DELETE FROM contact_submissions
  WHERE verified_at IS NULL
    AND expires_at < NOW() - INTERVAL '7 days';
END;
$$;

-- To manually run cleanup, execute:
-- SELECT cleanup_expired_contact_submissions();

