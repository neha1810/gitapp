import React from 'react'
import "./Card.scss"


const Cards = (props) => {

    return (
        <div className="card-wrapper">
            {props.gitdata && props.gitdata.map((val, key) =>
                <div className="card" key={key}>
                    <div className="full-name">{val.full_name}</div>
                    <div className="git-url-link">
                        <a href={val.clone_url} id="git-url">{val.clone_url}</a>
                    </div>
                    <div className="description">{val.description}</div>
                    <div className="stars">Stars: {val.stargazers_count}</div>
                    <div className="owner">{val.owner.login}</div>
                    <img src={val.owner.avatar_url} id="avatar" alt=""></img>
                    <div className="updated-at">{val.updated_at}</div>
                </div>
            )
            }

        </div>


    )

}

export default Cards;