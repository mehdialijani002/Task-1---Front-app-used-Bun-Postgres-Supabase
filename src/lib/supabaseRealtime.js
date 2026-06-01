import { supabase } from "@/lib/supabaseClient";

// Simple helper to subscribe to a table's realtime changes and call a callback
export const subscribeToTable = (table, callback) => {
  if (!supabase) return { unsubscribe: () => {} };

  const subscription = supabase
    .channel(`public:${table}`)
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table },
      (payload) => {
        callback(payload);
      },
    )
    .subscribe();

  return {
    unsubscribe: async () => {
      try {
        await supabase.removeChannel(subscription);
      } catch (e) {
        // ignore
      }
    },
  };
};

export default { subscribeToTable };
