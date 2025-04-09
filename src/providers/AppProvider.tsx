import { ReactNode } from "react";
import { NotificationProvider } from "../contexts/notification/NotificationProvider";
import { ThemeProvider } from "../contexts/theme/ThemeProvider";
import { useNotificationContext } from "../contexts/notification/useNotificationContext";
import { AuthProvider } from "../contexts/auth/AuthProvider";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <NotificationProvider>
      <AuthWithNotification>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthWithNotification>
    </NotificationProvider>
  );
};

type AuthWithNotificationProps = {
  children: React.ReactNode;
};

function AuthWithNotification({ children }: AuthWithNotificationProps) {
  const { addNotification } = useNotificationContext();
  return (
    <AuthProvider addNotification={addNotification}>{children}</AuthProvider>
  );
}
