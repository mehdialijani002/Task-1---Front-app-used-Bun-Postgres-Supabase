import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getBookDemoDropdown,
  postBookDemo,
} from "@/api/core/bookDemo/bookDemo";

export const usePostBookDemo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postBookDemo,
  });
};

export const useGetBookDemoDropdown = (params) => {
  return useQuery({
    queryKey: ["getBookDemoDropdown", params],
    queryFn: () => getBookDemoDropdown(params),
  });
};
