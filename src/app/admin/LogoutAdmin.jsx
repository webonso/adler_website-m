import { handleLogout } from '@/libs/actions';

const LogoutAdminButton = () => {
  return (
    <form action={handleLogout}>
      <button className="text-white text-base rounded-lg shadow-md bg-red-700 px-6 py-2" type="submit">
        Logout
      </button>
    </form>
  );
};

export default LogoutAdminButton;
