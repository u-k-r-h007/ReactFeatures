import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Loader from './Loader'

function Jobs() {
    const [jobsIds, setJobsIds] = useState()
    const [cardData, setcardData] = useState()
    const [loading, setLoading] = useState(false)

    const getData = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            return data

        } catch (error) {
            console.log(error)
        }
    }
    const fetchPostMetaData = async (ids) => {
        console.log("Fetching posts:", ids);
        setLoading(true)
        const apiCalls = ids.map((id) => {
            const url = `https://hacker-news.firebaseio.com/v0/item/${id}.json`
            return getData(url)
        })
        const result = await Promise.all(apiCalls)
        setcardData((prev)=> [...(prev||[]) ,...result])
        setLoading(false)

    }
    const fetchPostIds = async () => {
        const url = "https://hacker-news.firebaseio.com/v0/jobstories.json"
        const data = await getData(url)
        const ids = data.splice(0, 9)
        setJobsIds(data)
        fetchPostMetaData(ids)
    }

    useEffect(() => {
console.log("Running useEffect")
        fetchPostIds()

        // 
    }, [])

    const handleLoad =async () => {
        const remaining= [...jobsIds]
        const ids = remaining.splice(0, 6)
        setJobsIds(remaining)
        fetchPostMetaData(ids)

    }
    return (

        <div>
            {loading && <div> <Loader /> </div>}
            <div className='cardContainer'>

                {
                    cardData && cardData.map((item,i) => {
                        return (
                            <div key={i} className='card'>
                                <h3>Company:{item.by}</h3>
                                <h3> Des:{item.title}</h3>
                                <a href={item.url} target='blank' style={{padding:"10px 30px",borderRadius:"10px",backgroundColor:"orange",color:"white"}}>Apply</a>
                            </div>
                        )

                    })
                }


            </div>
            {loading ? <Loader /> :<button style={{backgroundColor:"red",borderRadius:"10px",padding:"10px 30px",outline:"none",marginTop:"5px",color:"white"}} onClick={handleLoad}>Load More</button>}
        </div>
    )
}

export default Jobs