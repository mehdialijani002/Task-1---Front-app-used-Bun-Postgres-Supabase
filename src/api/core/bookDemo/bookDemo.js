import { BASE_URL_ADDRESS, axiosInstance } from "@/api/_instanceAxios";
import {
  getBookDemoDropdownSupabase,
  postBookDemoSupabase,
} from "@/api/core/bookDemo/bookDemoSupabase";

const BASE_URL = BASE_URL_ADDRESS + "/api/v1";

const useSupabase = process.env.NEXT_PUBLIC_USE_SUPABASE === "true";

export const getBookDemoDropdown = async (params) => {
  if (useSupabase) return getBookDemoDropdownSupabase(params);

  const { data } = await axiosInstance.get(
    BASE_URL + "/demo-booking/property-types",
    {
      params,
    },
  );
  return data;
};

export const postBookDemo = async (params) => {
  if (useSupabase) return postBookDemoSupabase(params);

  const { data } = await axiosInstance.post(
    BASE_URL + "/demo-booking/",
    params,
  );
  return data;
};
