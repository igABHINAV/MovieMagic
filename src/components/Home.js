import React, { useState } from 'react'

const File = () => {
    const [name, setname] = useState('')
    const [text, settext] = useState({
        "Title": "-------",
        "Genre": "-------",
        "Year": "-------",
        "Actors": "-------",
        "Director": "-------",
        "Ratings": [
            {
                "Source": "Internet Movie Database",
                "Value": "-------"
            },
            {
                "Source": "Rotten Tomatoes",
                "Value": "-------"
            },
            {
                "Source": "Metacritic",
                "Value": "74/100"
            }
        ]


    })
    const nameonchange = (e) => {
        setname(e.target.value)
    }

    const f = async () => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=9b6248d&t=${name}`)
            const data = await response.json()
            settext(data)
        } catch (err) {
            settext({
                "Title": "Not Found",
                "Genre": "Not Found",
                "Year": "-Not Found",
                "Actors": "-Not Found",
                "Director": "-Not Found",
                "Ratings": [
                    {
                        "Source": "Internet Movie Database",
                        "Value": "-------"
                    },
                    {
                        "Source": "Rotten Tomatoes",
                        "Value": "-------"
                    },
                    
                ]


            })
        }

    }

    return (
        <div>
            <br />
            <br />
            <div className="input-group mb-3 container">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="Movie Name" value={name} onChange={nameonchange} aria-label="Movie" aria-describedby="basic-addon1" />
                <button type="button" className="btn btn-primary" onClick={f}>search</button>
            </div>
            <br />
            <div className="bg-dark text-secondary px-4 py-5 text-center">
                <div className="py-5">
                    <h1 className="display-5 fw-bold text-primary">{text.Title}</h1>
                    <h2 className='text-white'>{text.Year}</h2>
                    <h3 className='text-white'>{text.Genre}</h3>
                    <div className="col-lg-6 mx-auto">
                        <h4> {text.Actors}</h4>
                        <h4>Director : {text.Director}</h4>

                        <p className="fs-5 mb-4">{text.Plot}</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">IMDb : {text.Ratings[0].Value}</button>
                            <button type="button" className="btn btn-outline-light btn-lg px-4">Rotten Tomatoes : {text.Ratings[1].Value}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default File