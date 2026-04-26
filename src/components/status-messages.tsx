export const LoadingSpinner = () => (
    <div className="flex flex-col items-center mt-10 space-y-3">
        <div className="w-10 h-10 border-4 border-[#aa3bff]/30 border-t-[#aa3bff] rounded-full animate-spin"></div>
        <p className="text-[#aa3bff] font-medium italic animate-pulse">
            Fetching users data... Please wait.
        </p>
    </div>
);

export const ErrorMessage = ({ message }: { message: string }) => (
    <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 shadow-sm">
        <div className="flex items-center space-x-2">
            <span className="font-bold text-lg">⚠️ Fetch Error:</span>
        </div>
        <p className="text-sm mt-1 ml-7">{message}</p>
    </div>
);