

function TextSearch({ amount, nameTool, setNameTool }) {
    const handleSearchChange = (event) => {
        setNameTool(event.target.value)
    }

    return (

        <div className='w-full mb-2'>
            <input
                type='text'
                placeholder={`Search among ${amount} items...`}
                value={nameTool}
                onChange={handleSearchChange}
                className='w-full px-4 py-2 border border-gray-700 rounded-md'
            />
        </div>

    )
}

export default TextSearch;

/*
<div className='w-full mb-2 flex flex-wrap gap-2'>
                {allTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-4 py-2 rounded-3xl border-gray-700 border text-sm ${selectedTags.includes(tag)
                                ? 'bg-white text-black'
                                : 'bg-[#161616] text-white'
                            }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>    */
