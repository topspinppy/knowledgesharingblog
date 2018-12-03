import React, { Fragment } from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

const Thumbnails = styled.div`
  width: 100%;
  margin-bottom: 10px;
`
const Img = styled.img`
  max-width: 100%;
  height: auto;
`
const PostDetail = styled.div`
  .post-meta {
    margin: 10px 0;
    font-size: larger;
    display: flex;
    justify-content: space-between;
    .date {
      color: #999;
      text-transform: capitalize;
      font-weight: 700;
    }
  }
`

const ReadMore = styled.div`
  width: 100%;
`
const Hr = styled.hr`
  border: none;
  border-top: 3px solid #333;
  color: #333;
  overflow: visible;
  text-align: center;
  height: 5px;
`
const LastestPost = props => {
  return (
    <Container>
      {props.header !== undefined ? (
        <div>
          <h3>{props.header}</h3>
          <Hr size="10" />
        </div>
      ) : null}
      <Row>
        <Col md="4">
          <Thumbnails>
            <Img
              src="https://d19m59y37dris4.cloudfront.net/blog/1-2/img/blog-1.jpg"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Thumbnails>
          <PostDetail>
            <div className="post-meta">
              <div className="date">11 May | 2018</div>
              <div className="type">
                <b>NETWORK</b>
              </div>
            </div>
            <h3>Ways to remember your important ideas</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </PostDetail>
        </Col>
        <Col md="4">
          <Thumbnails>
            <Img
              src="https://d19m59y37dris4.cloudfront.net/blog/1-2/img/blog-1.jpg"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Thumbnails>
          <PostDetail>
            <div className="post-meta">
              <div className="date">11 May | 2018</div>
              <div className="type">
                <b>TECHNOLOGY</b>
              </div>
            </div>
            <h3>Ways to remember your important ideas</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </PostDetail>
        </Col>
        <Col md="4">
          <Thumbnails>
            <Img
              src="https://d19m59y37dris4.cloudfront.net/blog/1-2/img/blog-1.jpg"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Thumbnails>
          <PostDetail>
            <div className="post-meta">
              <div className="date">11 May | 2018</div>
              <div className="type">
                <b>FINANCIAL</b>
              </div>
            </div>
            <h3>Ways to remember your important ideas</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </PostDetail>
        </Col>
      </Row>
    </Container>
  )
}

export default LastestPost
