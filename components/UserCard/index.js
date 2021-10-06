export default function UserCard ({ name, userName, avatar }) {
  return (
    <>
      <div className="body">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img className="img-fluid" src={avatar} alt={name} />
                </div>
                <div className="team-content">
                  <h3 className="name h3">{name}</h3>
                  <h4 className="title h4">{userName}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
          margin-bottom: .5rem;
          font-family: inherit;
          font-weight: 500;
          line-height: 1.2;
          color: inherit;
        }

        .h1, .h2, .h3, .h4, .h5, .h6 {
          margin-top: 0;
          margin-bottom: .5rem;
        }

        .col-12, .col-lg-3, .col-md-4, .col-sm-6 {
          position: relative;
          width: 100%;
          min-height: 1px;
          padding-right: 15px;
          padding-left: 15px;
        }

        .col-lg-3 {
          -ms-flex: 0 0 250px;
          flex: 0 0 250px;
          max-width: 250px;
        }

        .body {
          font-family: tahoma;
          height: 100vh;
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
        }

        .container {
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        }

        .row {
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
        }

        .our-team {
          padding: 30px 0 40px;
          margin-bottom: 30px;
          background-color: #f7f5ec;
          text-align: center;
          overflow: hidden;
          position: relative;
        }

        .our-team .picture {
          display: inline-block;
          height: 130px;
          width: 130px;
          margin-bottom: 50px;
          z-index: 1;
          position: relative;
        }

        .our-team .picture img {
          width: 100%;
          height: auto;
          border-radius: 50%;
          transform: scale(1);
          transition: all 0.9s ease 0s;
        }

        .our-team .title {
          display: block;
          font-size: 15px;
          color: #4e5052;
          text-transform: capitalize;
        }
      `}</style>
    </>
  )
}
