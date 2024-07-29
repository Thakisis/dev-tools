import React from 'react'
import { getData } from '@/server/getData'
import Card from './Card'
function ToolsList({ tools = [] }) {

    return tools.map(({ tags, name, ...otherProps }) => <Card key={name} {...otherProps} name={name} tags={tags} />)
}

export default ToolsList
