
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://jcfmkopndcmxorvoogxr.supabase.co'
const supabaseKey = 'sb_publishable_UCh_YHpg42X9OddcWFTwBw_n4vlL9VL'
export const supabase = createClient(supabaseUrl, supabaseKey)