
import { useState, useEffect } from "react";
import { ToastActionElement, ToastProps } from "@/components/ui/toast";

type ToasterToast = ToastProps & {
  id: string;
  title?: string;
  description?: string;
  action?: ToastActionElement;
};

const TOAST_LIMIT = 5;
const TOAST_REMOVE_DELAY = 1000000;

type ToastState = {
  toasts: ToasterToast[];
};

export const useToast = () => {
  const [state, setState] = useState<ToastState>({
    toasts: [],
  });

  const toast = ({
    title,
    description,
    action,
    ...props
  }: Omit<ToasterToast, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = {
      id,
      title,
      description,
      action,
      ...props,
    };

    setState((state) => {
      const newToasts = state.toasts.concat(newToast).slice(0, TOAST_LIMIT);
      return {
        ...state,
        toasts: newToasts,
      };
    });

    return {
      id,
      dismiss: () => dismissToast(id),
      update: (props: ToasterToast) =>
        updateToast(id, { ...props, id }),
    };
  };

  const dismissToast = (toastId: string) => {
    setState((state) => ({
      ...state,
      toasts: state.toasts.filter((toast) => toast.id !== toastId),
    }));
  };

  const updateToast = (toastId: string, toast: ToasterToast) => {
    setState((state) => ({
      ...state,
      toasts: state.toasts.map((t) => (t.id === toastId ? { ...t, ...toast } : t)),
    }));
  };

  return {
    toasts: state.toasts,
    toast,
    dismiss: dismissToast,
    update: updateToast,
  };
};

interface ToastOptions {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
}

export const toast = ({ title, description, action, variant = "default" }: ToastOptions) => {
  // This is a simplified version for direct usage
  const toastId = Math.random().toString(36).substring(2, 9);
  
  // We're adding to window to avoid circular dependencies
  // In a real implementation we'd use a context or a proper state management
  if (typeof window !== "undefined") {
    const event = new CustomEvent("toast-add", {
      detail: {
        id: toastId,
        title,
        description,
        action,
        variant,
      },
    });
    window.dispatchEvent(event);
  }

  return {
    id: toastId,
    dismiss: () => {
      if (typeof window !== "undefined") {
        const event = new CustomEvent("toast-dismiss", {
          detail: { id: toastId },
        });
        window.dispatchEvent(event);
      }
    },
    update: (props: ToastOptions) => {
      if (typeof window !== "undefined") {
        const event = new CustomEvent("toast-update", {
          detail: { id: toastId, ...props },
        });
        window.dispatchEvent(event);
      }
    },
  };
};
