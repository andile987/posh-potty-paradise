
import { useToast as useHookToast } from "@/components/ui/toast";

export const useToast = useHookToast;

interface ToastProps {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
}

export const toast = ({ title, description, action, variant = "default" }: ToastProps) => {
  const { toast: hookToast } = useHookToast();
  
  return hookToast({
    title,
    description,
    action,
    variant,
  });
};
