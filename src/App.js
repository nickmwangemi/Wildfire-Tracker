import { useEffect, useState } from 'react'
import Header from './components/Header'
import Loader from './components/Loader'
import Map from './components/Map'

const BASE_URL = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events'

function App() {
	const [eventData, setEventData] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const fetchEvents = async () => {
			setLoading(true)
			const response = await fetch(`${BASE_URL}`)
			const { events } = await response.json()

			setEventData(events)
			setLoading(false)
		}
		fetchEvents()
	}, [])

	return (
		<div>
			<Header />

			{!loading ? <Map eventData={eventData} /> : <Loader />}
		</div>
	)
}

export default App
