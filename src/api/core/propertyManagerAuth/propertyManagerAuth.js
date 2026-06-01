import { BASE_URL_ADDRESS, axiosInstance } from "@/api/_instanceAxios";
import {
  postPropertyManagerActivationSupabase,
  getPropertyManagerActivationVerifyTokenSupabase,
  postPropertyManagerSigninSupabase,
  postPropertyManagerForgetPasswordSupabase,
  postPropertyManagerResetPasswordSupabase,
} from "@/api/core/propertyManagerAuth/propertyManagerAuthSupabase";

const BASE_URL = BASE_URL_ADDRESS + "/api/v1";

const useSupabase = process.env.NEXT_PUBLIC_USE_SUPABASE === "true";

export const postPropertyManagerActivation = async (params) => {
  if (useSupabase) return postPropertyManagerActivationSupabase(params);

  const { data } = await axiosInstance.post(
    BASE_URL + "/property-manager/activate",
    params,
  );
  return data;
};
export const getPropertyManagerActivationVerifyToken = async (params) => {
  if (useSupabase)
    return getPropertyManagerActivationVerifyTokenSupabase(params);

  const { data } = await axiosInstance.get(
    BASE_URL + "/property-manager/activate",
    {
      params,
    },
  );
  return data;
};
export const postPropertyManagerSignin = async (params) => {
  if (useSupabase) return postPropertyManagerSigninSupabase(params);

  const { data } = await axiosInstance.post(
    BASE_URL + "/property-manager/signin",
    params,
  );
  return data;
};
export const postPropertyManagerForgetPassword = async (params) => {
  if (useSupabase) return postPropertyManagerForgetPasswordSupabase(params);

  const { data } = await axiosInstance.post(
    BASE_URL + "/property-manager/reset-password",
    params,
  );
  return data;
};
export const postPropertyManagerResetPassword = async (params) => {
  if (useSupabase) return postPropertyManagerResetPasswordSupabase(params);

  const { data } = await axiosInstance.post(
    BASE_URL + "/property-manager/confim-password",
    params,
  );
  return data;
};
