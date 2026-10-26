-- Create reviews table for Wall of Love
-- Run this in your Supabase SQL Editor

CREATE TABLE IF NOT EXISTS reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  display_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  relationship VARCHAR(100),
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title VARCHAR(100),
  review_text TEXT NOT NULL CHECK (LENGTH(review_text) >= 20 AND LENGTH(review_text) <= 1000),
  status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_reviews_status ON reviews(status);
CREATE INDEX IF NOT EXISTS idx_reviews_published_at ON reviews(published_at DESC) WHERE status = 'approved';
CREATE INDEX IF NOT EXISTS idx_reviews_rating ON reviews(rating) WHERE status = 'approved';

-- Enable Row Level Security
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to read approved reviews only
CREATE POLICY "Public can read approved reviews"
ON reviews FOR SELECT
USING (status = 'approved');

-- Policy: Allow public to insert reviews (status will be 'pending' by default)
CREATE POLICY "Public can insert reviews"
ON reviews FOR INSERT
WITH CHECK (true);

-- Policy: No one can update reviews through public API
CREATE POLICY "No public updates"
ON reviews FOR UPDATE
USING (false);

-- Policy: No one can delete reviews through public API
CREATE POLICY "No public deletes"
ON reviews FOR DELETE
USING (false);

-- Note: To approve/reject reviews, you'll need to:
-- 1. Create a separate admin authentication system
-- 2. Add additional RLS policies for authenticated admin users
-- 3. Or use Supabase Dashboard to manually review and update status

-- Example manual approval query (run in Supabase SQL Editor):
-- UPDATE reviews SET status = 'approved', published_at = NOW() WHERE id = 'review-uuid';
