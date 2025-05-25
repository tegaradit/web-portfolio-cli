export const Navbar = ({ onNavigate }) => {
  const menus = ["home", "project", "riwayat", "kisah", "contact"];

  return (
    <div className="flex flex-wrap justify-center gap-4 text-green-300 mt-6">
      {menus.map((menu) => (
        <button
          key={menu}
          className="border border-green-500 px-3 py-1 rounded hover:bg-green-500 hover:text-black transition"
          onClick={() => onNavigate(menu)}
        >
          $ cd /{menu}
        </button>
      ))}
    </div>
  );
};
