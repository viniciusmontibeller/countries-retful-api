const regions = ['Africa', 'America', 'Asia', 'Europa', 'Oceania']

export const Select = () => {
    return (
        <div>
            <select name="Regions">
                <option value=''>Filter by Region</option>
                {regions.map((region, index) => {
                    return <option key={index} value={region}>{region}</option>
                })}
            </select>
        </div>
    )
}