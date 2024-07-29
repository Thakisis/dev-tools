import ToolsList from '@/components/Tools'
import Filters from '@/components/Filters'
import { getData } from '@/server/getData'
async function ToolContent(props) {
    const { dataTools, dataTags } = await getData()
    return (
        <>
            <Filters tags={dataTags}>
                <ToolsList tools={dataTools} />
            </Filters>
        </>
    )
}

export default ToolContent
