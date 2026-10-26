# Supabase Setup Guide for VEDORA Wall of Love

This guide will help you set up Supabase to enable the Wall of Love review system.

## Prerequisites

- A Supabase account (free tier is sufficient)
- Basic understanding of SQL (optional, as scripts are provided)

## Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in the project details:
   - **Name**: vedora-wall-of-love (or your preferred name)
   - **Database Password**: Choose a strong password and save it securely
   - **Region**: Choose a region closest to your users
5. Click "Create new project"
6. Wait for the project to be provisioned (this may take 1-2 minutes)

## Step 2: Get Your Credentials

1. Go to your project dashboard
2. Navigate to **Settings → API**
3. Copy the following values:
   - **Project URL**: This is your `VITE_SUPABASE_URL`
   - **anon public**: This is your `VITE_SUPABASE_ANON_KEY`

## Step 3: Configure Environment Variables

1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add the following environment variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Replace the values with the credentials you copied in Step 2.

3. Make sure `.env` is in your `.gitignore` file to avoid committing sensitive data:

```gitignore
.env
.env.local
.env.production
```

## Step 4: Create the Database Schema

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor** (in the left sidebar)
3. Click "New Query"
4. Copy the entire contents of `supabase-schema.sql` from this project
5. Paste it into the SQL Editor
6. Click "Run" to execute the schema creation

This will:
- Create the `reviews` table with all necessary fields
- Set up indexes for performance
- Enable Row Level Security (RLS)
- Create security policies for public read/write access

## Step 5: Verify the Setup

1. In the SQL Editor, run this query to verify the table was created:

```sql
SELECT * FROM reviews;
```

You should see an empty result set (no errors).

2. Check the RLS policies by running:

```sql
SELECT * FROM pg_policies WHERE tablename = 'reviews';
```

You should see 4 policies for the reviews table.

## Step 6: Test the Review System

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:5173/wall-of-love`

3. Try submitting a test review:
   - Fill in the form with test data
   - Submit the review
   - You should see a success message

4. Verify the review was submitted (as pending):
   - Go to Supabase dashboard → Table Editor
   - Select the `reviews` table
   - You should see your review with `status = 'pending'`

## Step 7: Approve Reviews (Manual Process)

Since we haven't implemented an admin dashboard yet, you'll need to approve reviews manually:

1. Go to Supabase dashboard → Table Editor
2. Select the `reviews` table
3. Find the review you want to approve
4. Click the `status` field and change it from `pending` to `approved`
5. Click in the `published_at` field and set it to the current date/time
6. Click "Save"

The review will now appear on the Wall of Love page.

**Alternative SQL approach:**
Run this in the SQL Editor:

```sql
UPDATE reviews 
SET status = 'approved', published_at = NOW() 
WHERE id = 'your-review-uuid';
```

Replace `your-review-uuid` with the actual UUID from the review row.

## Step 8: Implement Review Moderation (Optional Future Enhancement)

For a production system, you may want to implement:

1. **Admin Authentication System**
   - Create an `admins` table
   - Implement login with Supabase Auth
   - Add RLS policies that allow admins to update reviews

2. **Admin Dashboard**
   - Create a protected route at `/admin/reviews`
   - Display pending reviews
   - Add approve/reject buttons
   - Show statistics (total reviews, average rating, etc.)

3. **Email Notifications**
   - Send confirmation emails when reviews are submitted
   - Notify admins when new reviews need moderation
   - Send emails when reviews are published

## Security Notes

### What's Already Protected

- **Public can only read approved reviews**: RLS policy ensures only `status = 'approved'` reviews are visible
- **Email addresses are private**: Never exposed to the public
- **Status can only be changed by admins**: Public users cannot approve/reject reviews
- **No public deletions**: Reviews cannot be deleted through the public API

### What You Should Add for Production

1. **Rate Limiting**: Prevent spam submissions by limiting how often a user can submit
2. **Content Moderation**: Add profanity filters or manual review before approval
3. **CAPTCHA**: Add reCAPTCHA or similar to prevent bot submissions
4. **Admin Authentication**: Never use hardcoded credentials
5. **Audit Logging**: Track who approved/rejected reviews and when

## Troubleshooting

### Reviews not appearing after approval

1. Check that `published_at` is set (not NULL)
2. Verify `status` is exactly `'approved'` (case-sensitive)
3. Clear browser cache and refresh the page
4. Check browser console for any errors

### Supabase connection errors

1. Verify your `.env` file is in the correct location (project root)
2. Check that the URL and anon key are correct
3. Ensure the project is active (not paused) in Supabase
4. Restart your development server after changing `.env`

### Form submission fails

1. Check browser console for error messages
2. Verify Supabase project is not paused
3. Check that the RLS policies are correctly set up
4. Ensure all required fields are filled in the form

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [React Integration Guide](https://supabase.com/docs/guides/getting-started/quickstarts/react)

## Support

If you encounter issues:

1. Check the Supabase dashboard logs for any errors
2. Review the SQL schema to ensure it was executed correctly
3. Verify your environment variables are set correctly
4. Check the browser console for JavaScript errors

For issues specific to the VEDORA implementation, refer to the project documentation or contact the development team.
