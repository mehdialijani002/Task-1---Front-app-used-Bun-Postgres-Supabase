import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  postPropertyManagerActivation,
  postPropertyManagerSignin,
  getPropertyManagerActivationVerifyToken,
  postPropertyManagerForgetPassword,
  postPropertyManagerResetPassword,
} from "@/api/core/propertyManagerAuth/propertyManagerAuth";

export const usePostPropertyManagerActivation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postPropertyManagerActivation,
  });
};
export const useGetPropertyManagerActivationVerifyToken = (params) => {
  return useQuery({
    queryKey: ["getPropertyManagerActivationVerifyToken", params],
    queryFn: () => getPropertyManagerActivationVerifyToken(params),
  });
};

export const usePostPropertyManagerSignin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postPropertyManagerSignin,
  });
};
export const usePostPropertyManagerForgetPassword = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postPropertyManagerForgetPassword,
  });
};
export const usePostPropertyManagerResetPassword = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postPropertyManagerResetPassword,
  });
};
