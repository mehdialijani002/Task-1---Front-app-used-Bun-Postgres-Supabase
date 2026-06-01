import { supabase } from "@/lib/supabaseClient";

export const postTechnicianSignInSupabase = async (params) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: params.email,
    password: params.password,
  });
  if (error) throw error;
  return data;
};

export const postTechnicianSignUpSupabase = async (params) => {
  const emailRedirectTo =
    typeof window !== "undefined"
      ? `${window.location.origin}/panel/technician-signin`
      : undefined;

  const options = emailRedirectTo ? { emailRedirectTo } : undefined;

  const { data, error } = await supabase.auth.signUp(
    {
      email: params.email,
      password: params.password,
    },
    options,
  );
  if (error) throw error;
  return data;
};

export const postTechnicianForgetPasswordSupabase = async (params) => {
  // Triggers Supabase password reset email
  const { data, error } = await supabase.auth.resetPasswordForEmail(
    params.email,
  );
  if (error) throw error;
  return data;
};

export const postTechnicianResetPasswordSupabase = async (params) => {
  // In client-side flows, password reset is handled via magic link/token.
  // If a token and new password are provided, attempt update via updateUser.
  const { token, password } = params;
  if (!token || !password) throw new Error("token and password required");
  const { data, error } = await supabase.auth.updateUser({
    access_token: token,
    password,
  });
  if (error) throw error;
  return data;
};

export const postTechnicianResendEmailSupabase = async (params) => {
  // Supabase doesn't have a direct resend-confirmation endpoint client-side.
  // Re-signup attempt will often re-send confirmation depending on settings.
  const { email } = params;
  const { data, error } = await supabase.auth.signUp({ email });
  if (error) throw error;
  return data;
};
