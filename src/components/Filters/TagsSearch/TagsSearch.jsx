import { TagButton } from "@/ui/tagbutton"

function TagsSearch({ allTags = [], selectedTags = [], toggleTag }) {
    console.log(allTags, selectedTags)
    const toggleTag2 = (tag) => {
        toggleTag(prevTags => prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
        )
    }
    const tagsList = allTags.map((tag) => <TagButton key={tag} tag={tag} selected={selectedTags.includes(tag)} toggleTag={toggleTag2} />)
    return (

        <div className='w-full mb-2 flex flex-wrap gap-2'>
            {tagsList}
        </div>

    )
}

export default TagsSearch


