import { useAppContext } from "../contexts/AppProvider";
import { useThemeContext } from "../contexts/theme/useThemeContext";
import { renderLog } from "../utils";

export const Header: React.FC = () => {
  renderLog("Header rendered");
  const { user, login, logout } = useAppContext();
  const { theme, toggleTheme } = useThemeContext();

  const handleLogin = () => {
    // 실제 애플리케이션에서는 사용자 입력을 받아야 합니다.
    login("user@example.com", "password");
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">샘플 애플리케이션</h1>
        <div className="flex items-center">
          <button
            onClick={toggleTheme}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            {theme === "light" ? "다크 모드" : "라이트 모드"}
          </button>
          {user ? (
            <div className="flex items-center">
              <span className="mr-2">{user.name}님 환영합니다!</span>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                로그아웃
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              로그인
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
