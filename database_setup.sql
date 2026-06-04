-- Supabase setup script for Next-Gen Learning Dashboard
-- Run this in your Supabase SQL editor

CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  progress integer NOT NULL DEFAULT 0,
  icon_name text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- insert some dummy data (mock rows)
INSERT INTO courses (title, progress, icon_name) VALUES
  ('Advanced React Patterns', 75, 'Code2'),
  ('UI/UX Fundamentals', 40, 'PenTool'),
  ('Framer Motion Mastery', 90, 'MonitorPlay'),
  ('System Design Basics', 20, 'Database');
