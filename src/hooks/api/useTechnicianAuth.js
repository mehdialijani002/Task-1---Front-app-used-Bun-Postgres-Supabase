import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  postTechnicianSignIn,
  postTechnicianSignUp,
  postTechnicianForgetPassword,
  postTechnicianResetPassword,
  postTechnicianResendEmail,
} from "@/api/core/technicianAuth/technicianAuth";

export const usePostTechnicianSignIn = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postTechnicianSignIn,
  });
};

export const usePostTechnicianSignUp = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postTechnicianSignUp,
  });
};

export const usePostTechnicianForgetPassword = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postTechnicianForgetPassword,
  });
};
export const usePostTechnicianResetPassword = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postTechnicianResetPassword,
  });
};
export const usePostTechnicianResendEmail = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postTechnicianResendEmail,
  });
};
