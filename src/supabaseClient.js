import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fpvjezoufgntzhfbbgqn.supabase.co';

const supabaseAnonKey = 'sb_publishable_6O5s-CUWSOlqiao3VIrJCA_6w60Jk-T';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);