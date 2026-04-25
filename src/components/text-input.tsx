const TextInput = ({ text, setText }: { text: string, setText: (value: string) => void; }) => {
    return (
        <div className="mt-4 w-full">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something here..."
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-600"
            />
        </div>
    );
};

export default TextInput;