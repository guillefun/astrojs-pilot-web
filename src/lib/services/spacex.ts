import type { GetStaticPathsResult } from "astro";
import type { APIXSpaceXResponse, Doc } from "../../types/api";

export const getLatestLaunches = async () => {
    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: 'asc'
                },
                limit: 30
            }
        })
    })

    const { docs }= await res.json() as APIXSpaceXResponse;
    return docs;
}

export const getStaticPathsForLaunches = async () => {
    const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: 'asc'
                },
                limit: 30
            }
        })
    })

    const { docs }= await res.json() as APIXSpaceXResponse;
    return docs.map((d) => ({ params: { id: d.id } }));
}

export const getLaunchById = async ({id} : {id: string}) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)

    const launch = await res.json() as Doc;
    return launch;
}