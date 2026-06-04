import { createClient } from '@supabase/supabase-js';

// Get keys from env
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dummy.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dummy';

// console.log("supabase init", supabaseUrl);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface CourseData {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
}
