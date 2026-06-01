import { supabase } from "@/lib/supabaseClient";

export const getBookDemoDropdownSupabase = async (params) => {
  // Example: read from a `property_types` table in Supabase
  const { data, error } = await supabase
    .from("property_types")
    .select("id,name")
    .order("name", { ascending: true });

  if (error) throw error;
  return data;
};

export const postBookDemoSupabase = async (params) => {
  // Example: insert into a `demo_bookings` table
  const payload = {
    name: params.name,
    email: params.email,
    phone: params.phone,
    property_type_id: params.property_type_id,
    message: params.message || null,
    created_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("demo_bookings")
    .insert([payload]);
  if (error) throw error;
  return data;
};
