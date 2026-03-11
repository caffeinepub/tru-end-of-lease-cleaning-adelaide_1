import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitEnquiry() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      phone: string;
      email: string;
      suburb: string;
      propertyType: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitEnquiry(
        data.name,
        data.phone,
        data.email,
        data.suburb,
        data.propertyType,
        data.message,
      );
    },
  });
}
