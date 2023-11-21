export const Comments = () => {
    return (
        <div className="col-md-4">
          <div className="card">
            <div className="card-img-top image-card image-card-1">
              <img src="https://i.imgur.com/CHquE7o.png" alt="..." />
            </div>
            <div className="card-body">
              
              {/* <h6 className="card-title text-dark mt-2">
                What you wants to know about hubspot?
              </h6> */}
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua..
              </p>
              <a href="#" className="text-dark">
                Read full story...
              </a>
              <div className="mt-4 about d-flex justify-content-between align-items-center">
                <span>By Prabhjot Singh</span> <span>On 12 Oct, 2020</span>
                {/* <span>5 min read</span> */}
              </div>
            </div>
          </div>
        </div>
    )
}