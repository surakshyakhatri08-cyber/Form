const UserCard = ({ user }: {
  user: { id: number; name: string; email: string; company: { name: string } }
}) => {
  return (
    <div className="group bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#aa3bff]/50 transition-all duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="font-bold text-xl text-gray-800 group-hover:text-[#aa3bff] transition-colors">
            {user.name}
          </h2>
          <p className="text-gray-500 text-sm mt-1 flex items-center italic">
            📧 {user.email}
          </p>
        </div>
        <span className="bg-[#aa3bff]/10 text-[#aa3bff] text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-tighter">
          ID: {user.id}
        </span>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400">
        <span className="font-medium uppercase tracking-widest">Company:</span>
        <span className="text-gray-700 font-semibold">{user.company.name}</span>
      </div>
    </div>
  );
};

export default UserCard;