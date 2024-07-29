import React from 'react'
import { getData } from '@/server/getData'
import Card from './Card'
async function ToolsList({ tools = [] }) {

    return tools.map((tool) => <Card key={tool.name} {...tool} tags={tool.tags} />)
}

export default ToolsList
