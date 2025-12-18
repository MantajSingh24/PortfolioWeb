-- Contact Submissions Table with Magic Link Verification
-- Run this in your Supabase SQL Editor
-- This script is idempotent and can be safely run multiple times

-- Create table if it doesn't exist
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  token_hash TEXT NOT NULL UNIQUE,
  expires_at TIMESTAMPTZ NOT NULL,
  verified_at TIMESTAMPTZ NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create indexes for performance (IF NOT EXISTS prevents errors on re-run)
CREATE INDEX IF NOT EXISTS idx_contact_submissions_token_hash 
  ON contact_submissions(token_hash);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_expires_at 
  ON contact_submissions(expires_at);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_verified_at 
  ON contact_submissions(verified_at);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Drop and recreate policy to ensure clean state
DROP POLICY IF EXISTS "Service role can do everything" ON contact_submissions;

CREATE POLICY "Service role can do everything" 
  ON contact_submissions 
  FOR ALL 
  TO service_role 
  USING (true) 
  WITH CHECK (true);

-- Auto-cleanup function for expired unverified submissions
-- This keeps your database clean by removing old unverified submissions
CREATE OR REPLACE FUNCTION cleanup_expired_contact_submissions()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  DELETE FROM contact_submissions
  WHERE verified_at IS NULL
    AND expires_at < NOW() - INTERVAL '7 days';
END;
$$;

-- Optional: Set up automatic cleanup with pg_cron (if available)
-- Uncomment the following lines if you have pg_cron extension enabled:
-- 
-- SELECT cron.schedule(
--   'cleanup-expired-contacts',
--   '0 2 * * *',  -- Run at 2 AM every day
--   'SELECT cleanup_expired_contact_submissions();'
-- );

-- To manually run cleanup, execute:
-- SELECT cleanup_expired_contact_submissions();

-- Verification query to check if everything is set up correctly:
-- SELECT 
--   tablename, 
--   indexname, 
--   indexdef 
-- FROM pg_indexes 
-- WHERE tablename = 'contact_submissions';
