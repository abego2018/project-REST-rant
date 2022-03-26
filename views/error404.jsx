const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div>
                    <img className="pug" src="/images/pug.jpg" alt="Sad Pug" />
                    <div>
                    Photo by <a href="https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">charlesdeluvio</a> on <a href="https://unsplash.com/s/photos/dog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  
module.exports = error404