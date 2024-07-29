"use client"
import * as React from "react"
import { useState, Children, useMemo } from "react"
import TextSearch from "./TextSearch"
import TagsSearch from "./TagsSearch"
function Filters({ children, tags }) {
    const [selTags, setSelTags] = useState(["UI", "SVG"])
    const [nameTool, setNameTool] = useState('')


    const selectedTools = useMemo(() =>
        Children.toArray(children)
            .filter((child) => filterTags({ tags: child.props.datatags, selTags, mode: 1 }))
            .filter((child) => filterName({ name: child.props.dataname, nameTool }))
        , [selTags, children, nameTool])
    const amount = selectedTools.length
    return (
        <>
            <div className='w-full mb-2 flex flex-wrap gap-2'>
                <TextSearch amount={amount} nameTool={nameTool} setNameTool={setNameTool} />
                <TagsSearch allTags={tags} selectedTags={selTags} toggleTag={setSelTags} />
            </div>
            {selectedTools}
        </>
    )
}

export default Filters
/*
    mode=0 significa interseccion es decir necesita tener todas las tags
    mode=1 significa que tiene que tener al menos una
*/
function filterTags({ tags, selTags, mode }) {
    if (selTags.length === 0) return true
    return selTags.reduce((include, tag) => {
        if (mode == 0)
            return include && tags.includes(tag)
        return include || tags.includes(tag)
    }, mode === 0 ? true : false)
}
function filterName({ nameTool, name }) {
    return name.toLowerCase().includes(nameTool.toLowerCase())
}





