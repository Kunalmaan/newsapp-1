import { getByTitle } from '@testing-library/dom'
import React, { Component } from 'react'

export class NewsItem extends Component {
  

    render() {
     let {title,description,imageUrl, newsUrl, author, date, source } = this.props ; 
        return (
            <div className= "my-3">
                <div className="card" >
                  <div style ={   {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute', 
                    right: '0'
                  }

                  }
                  > 
                <span class=" badge rounded-pill bg-danger" > {source} 
    
    </span>
    </div>
  <img src={ !imageUrl? "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/22_04_2021_10_41_51_3007185.jpg?width=920&format=jpeg": imageUrl }className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {!author?  "Unknown": author} on {new Date (date).toGMTString()} </small></p>
    <a rel = 'no referrer' href={newsUrl} target = "_blank" className="btn btn-sn btn-dark">Read More</a>
  </div>
</div>
            </div>
        )
    }
}

export default NewsItem
