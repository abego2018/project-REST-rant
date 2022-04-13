const React = require('react')
const Def = require('../default')


function show (data) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )

    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className='row'>
            <div className='border form-group col-sm-4'>
              <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <strong>- {c.author}</strong>
              </h3>
              <h4>Rating: {c.stars} </h4>
            </div>
          </div>
        )
      })
    }
    return (
        <Def>
          <main>
            <div className="row">
              <div className="col-sm-6">
                <img src={data.place.pic} alt={data.place.name} />
                <h3>
                  Located in {data.place.city}, {data.place.state}
                </h3>
              </div>
              <div className="col-sm-6">
            
                <h2>Description</h2>
                <h3>
                  {data.place.showEstablished()}
                </h3>
                <h4>
                  Serving {data.place.cuisines}
                </h4>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
                  Edit
                </a>      
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form>    
                </div> 

            </div>
            <h2>Comments</h2>
              {comments}
              <form method="POST" action={`/places/${data.place.id}/comment`} >
              <div className='row'>
                <div className='form-group col-sm-12'>
                    <label htmlFor="content">Content</label>
                    <textarea className='form-control' id='content'  name='content' rows="3" cols="5"></textarea>
                </div>
                <div className='form-group col-sm-4'>
                    <label htmlFor="author">Author</label>
                    <input className='form-control' id="author" name="author" />
                </div>
                <div className='form-group col-sm-4 '>
                    <label htmlFor="stars">Star Rating</label>
                    <input className='form-control' id="stars" name="stars" />
                </div>
                <div className='form-group col-sm-2'>
                    <label htmlFor="rant">Rant</label>
                    <input type="checkbox"  id="rant" name="rant" className='form-control' />
                </div>
                </div>
                <input className="btn btn-primary" type="submit" value="Add Comment" />
                
            </form>
          </main>
        </Def>
    )
}

module.exports = show
