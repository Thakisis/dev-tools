

export function TagButton({ selected, toggleTag, tag }) {
    return (
        <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-4 py-2 rounded-3xl border-gray-700 border text-sm ${selected
                ? 'bg-white text-black'
                : 'bg-[#161616] text-white'
                }`}
        >
            {tag}
        </button>
    )
}

