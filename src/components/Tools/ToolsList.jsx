import React from 'react'
import { getData } from '@/server/getData'
import Card from './Card'
function ToolsList({ tools = [] }) {

    return tools.map((tool) => <Card key={tool.name} name={tool.name} {...tool} />)
}

export default ToolsList
