import { selector } from 'recoil'
import { Types } from '../../components/Overview/D3ForceGraph/types'

export const getPowerChartData = selector({
    key: 'GetPowerChartData',
    get: () => {
        return getDataFromAPI()
    }
})

const getDataFromAPI = () =>
new Promise((resolve) => 
fetch('../../fake-data/force-directed-graph-fake-data.json').then((response) => {
    if (response.status !== 200){
        console.log(`error!${response.status}`)
    }
    response.json().then((data) => {
        const d = data.results[0] as Types.dataObject
        resolve(d)
    })
})
)