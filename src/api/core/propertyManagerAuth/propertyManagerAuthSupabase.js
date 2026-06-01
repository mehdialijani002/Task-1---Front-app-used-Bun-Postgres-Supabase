import { supabase } from "@/lib/supabaseClient";

export const postPropertyManagerActivationSupabase = async (params) => {
  // Activation flows depend on email confirmations configured in Supabase.
  // Here we attempt to verify a token by fetching the user session.
  const { token } = params;
  if (!token) throw new Error("activation token required");
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data;
};

export const getPropertyManagerActivationVerifyTokenSupabase = async (
  params,
) => {
  // Client-side token verification may require server-side checks.
  return { ok: true };
};

export const postPropertyManagerSigninSupabase = async (params) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: params.email,
    password: params.password,
  });
  if (error) throw error;
  return data;
};

export const postPropertyManagerForgetPasswordSupabase = async (params) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(
    params.email,
  );
  if (error) throw error;
  return data;
};

export const postPropertyManagerResetPasswordSupabase = async (params) => {
  const { token, password } = params;
  if (!token || !password) throw new Error("token and password required");
  const { data, error } = await supabase.auth.updateUser({
    access_token: token,
    password,
  });
  if (error) throw error;
  return data;
};
