import { BASE_URL_ADDRESS, axiosInstance } from "@/api/_instanceAxios";
import {
  postTechnicianSignInSupabase,
  postTechnicianSignUpSupabase,
  postTechnicianForgetPasswordSupabase,
  postTechnicianResetPasswordSupabase,
  postTechnicianResendEmailSupabase,
} from "@/api/core/technicianAuth/technicianAuthSupabase";

const BASE_URL = BASE_URL_ADDRESS + "/api/v1";

const useSupabase = process.env.NEXT_PUBLIC_USE_SUPABASE === "true";

export const postTechnicianSignIn = async (params) => {
  if (useSupabase) return postTechnicianSignInSupabase(params);

  const { data } = await axiosInstance.post(
    BASE_URL + "/technician/signin",
    params,
  );
  return data;
};
export const postTechnicianSignUp = async (params) => {
  if (useSupabase) return postTechnicianSignUpSupabase(params);

  const { data } = await axiosInstance.post(
    BASE_URL + "/technician/signup",
    params,
  );
  return data;
};
export const postTechnicianForgetPassword = async (params) => {
  if (useSupabase) return postTechnicianForgetPasswordSupabase(params);

  const { data } = await axiosInstance.post(
    BASE_URL + "/technician/reset-password",
    params,
  );
  return data;
};
export const postTechnicianResetPassword = async (params) => {
  if (useSupabase) return postTechnicianResetPasswordSupabase(params);

  const { data } = await axiosInstance.post(
    BASE_URL + "/technician/confim-password",
    params,
  );
  return data;
};
export const postTechnicianResendEmail = async (params) => {
  if (useSupabase) return postTechnicianResendEmailSupabase(params);

  const { data } = await axiosInstance.post(
    BASE_URL + "/technician/email/resend",
    params,
  );
  return data;
};
