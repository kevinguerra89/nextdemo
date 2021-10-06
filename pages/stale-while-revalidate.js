/* Static Generation without Data + Fetch Data on the Client-Side */
/* stale-while-revalidate */

import useSWR from 'swr'
import UserCard from 'components/UserCard'
import Skeleton from 'react-loading-skeleton'

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data)

function StaleWhileRevalidate () {
  const { data: user, error } = useSWR('/api/user/1', fetcher)

  if (error) return <div>failed to load</div>
  if (!user) {
    return (
      <>
        <div className="body">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="our-team">
                  <div className="picture">
                    <Skeleton circle={true} height={130} width={130}/>
                  </div>
                  <Skeleton count={2} width={170}/>
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
            margin-bottom: 50px;
            z-index: 1;
            position: relative;
          }
        `}</style>
      </>
    )
  }
  return <UserCard name={user.name} userName={user.username} avatar="https://picsum.photos/130/130?image=1027"/>
}

export default StaleWhileRevalidate
