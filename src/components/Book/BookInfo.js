import React, { Component } from "react"
import { Link } from "react-router-dom"
import propTypes from "prop-types"
import Popup from "../Popup"
import styled from "styled-components"

export default class Book extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoverClass: "",
      showSavedMsg: false,
      textPopup: "",
    }
    this.popupRef = React.createRef()
    this.showHideMoreButton = this.showHideMoreButton.bind(this)
    this.showPopup = this.showPopup.bind(this)
    this.handleAnimationEnd = this.handleAnimationEnd.bind(this)
  }

  showHideMoreButton(val) {
    this.setState({
      hoverClass: val ? "outline-button-hover" : "",
    })
  }

  showPopup(text) {
    if (!this.state.showSavedMsg) {
      this.setState({
        showSavedMsg: true,
        textPopup: text,
      })
    }
  }

  handleAnimationEnd() {
    this.setState({ showSavedMsg: false })
  }

  saveBook(id) {
    const books = JSON.parse(localStorage.getItem("books"))

    const alreadySaved = books.find(book => book.id === id)

    if (alreadySaved) {
      this.showPopup("Libro già inserito nella raccolta")
    } else {
      localStorage.setItem(
        "books",
        books ? JSON.stringify([...books, { id }]) : JSON.stringify([{ id }])
      )
      this.showPopup("Libro aggiunto alla raccolta")
    }
  }

  render() {
    return (
      <>
        <CardWrapper
          onMouseOver={() => {
            this.showHideMoreButton(true)
          }}
          onMouseOut={() => {
            this.showHideMoreButton(false)
          }}
        >
          <BackgroundCard />
          <Card>
            <Title>{this.props.title}</Title>
            <TextWrapper>
              <CategoryWrapper>
                <CategoryTitle>Authors</CategoryTitle>
                <CategoryText>{this.props.authors}</CategoryText>
              </CategoryWrapper>
              <CategoryWrapper>
                <CategoryTitle>Category</CategoryTitle>
                <CategoryText>{this.props.categories}</CategoryText>
              </CategoryWrapper>
              <CategoryWrapper>
                <CategoryTitle>Published By</CategoryTitle>
                <CategoryText>{this.props.publisher}</CategoryText>
              </CategoryWrapper>
              <CategoryWrapper>
                <CategoryTitle>Released at</CategoryTitle>
                <CategoryText>{this.props.date}</CategoryText>
              </CategoryWrapper>
            </TextWrapper>

            {/* {this.state.showSavedMsg && (
            <Popup
              lineaRef={this.popupRef}
              text={this.state.textPopup}
              handleAnimationEnd={this.handleAnimationEnd}
            />
          )} */}

            {/* {this.props.image && (
            <ImageWrapper>
              <Image src={this.props.image} alt={this.props.title} />
            </ImageWrapper>
          )} */}
            {/* <div className="hover-buttons">
            <Link to={`/book/${this.props.id}`} className="clear-link">
              <button className={`outline-button ${this.state.hoverClass}`}>
                More Info
              </button>
            </Link>
            <button
              className={`outline-button clear-links ${this.state.hoverClass}`}
              onClick={() => this.saveBook(this.props.id)}
            >
              Save
            </button>
          </div> */}
          </Card>
        </CardWrapper>
      </>
    )
  }
}

Book.propTypes = {
  authors: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  categories: propTypes.string.isRequired,
  publisher: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
}

const DefaultCard = styled.div`
  max-width: 360px;
  min-width: 240px;
  width: 100%;
  height: 456px;
  border-radius: 50px;
  border-top-left-radius: 0;
  border-radius: 60px 60px 60px 0px;
  transform-origin: left bottom;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`

const BackgroundCard = styled(DefaultCard)`
  height: 426px;
  z-index: -1;
  position: absolute;
  transform-origin: left top;
  transform: rotate(-5deg);
  background: rgba(0, 150, 0, 0.3);
`

const Card = styled(DefaultCard)`
  padding: 30px 0px 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: rgba(0, 255, 0, 0.2);
  border: 1px solid white;
  backdrop-filter: blur(15px);
  z-index: 1;
  @media (max-width: 960px) {
    width: 100%;
  }
`

const CardWrapper = styled.div`
  position: relative;
  cursor: pointer;
  perspective: 5000;

  :hover {
    ${Card} {
      transform: translateY(-3px);
    }

    ${BackgroundCard} {
      transform: rotateX(-30deg) rotateY(30deg);
    }
  }
`

const Title = styled.h1`
  font-size: 30px;
  /* margin: 10px 0px; */
  padding: 0px 20px;
`

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const CategoryWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 10px 20px;
`

const CategoryTitle = styled.h2`
  text-align: left;
  font-size: 18px;
`

const CategoryText = styled.span`
  text-align: right;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Image = styled.img`
  background: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-y: -40px;
  height: 300px;
  width: 100%;
`
